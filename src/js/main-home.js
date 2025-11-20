import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchCategories, fetchExercises } from './api-functions';
import {
  renderCategories,
  renderExercises,
  renderPagination,
  renderFilter,
} from './render-functions';
import { renderQuoteOfTheDay } from './quote-api-localStorage.js';
import './footer-subscription.js';

import '/css/pages/home.css';
import './header.js';
import './modal-exercise.js';

const filterOptions = ['Muscles', 'Body parts', 'Equipment'];
const mobileBreakpoint = 375;
const filtersList = document.querySelector('ul.filters-list');
const categoriesList = document.querySelector('ul.block-categories-list');
const exercisesList = document.querySelector('ul.exercises-list');
const paginationList = document.querySelector('ul.pagination-controls-list');
const loader = document.querySelector('span.loader');
const searchForm = document.querySelector('form.search-form');
const searchInput = searchForm.querySelector('.search-input');
const clearBtn = document.querySelector('button.clear-btn');

const isMobile = document.documentElement.clientWidth <= mobileBreakpoint;

let currentFilter = filterOptions[0];
let currentCategory = '';
let searchQuery = '';
let currentPage = 1;
let categoriesPerPage = isMobile ? 9 : 12;
let exercisesPerPage = isMobile ? 8 : 10;

searchForm.addEventListener('input', evt => {
  searchQuery = evt.target.value;
  if (searchQuery.length) {
    clearBtn.classList.remove('visually-hidden');
  } else {
    clearBtn.classList.add('visually-hidden');
  }
});

searchForm.addEventListener('submit', async evt => {
  evt.preventDefault();
  try {
    const exercises = await fetchExercises(
      currentFilter,
      currentCategory,
      searchQuery,
      currentPage,
      exercisesPerPage
    );
    const { results, page, totalPages } = exercises;
    paginationList.innerHTML = '';
    renderExercises(results, exercisesList);
    renderPagination(Number(totalPages), Number(page), paginationList);
  } catch (error) {
    loader.classList.add('visually-hidden');
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message,
    });
  }
});

clearBtn.addEventListener('click', async () => {
  searchQuery = '';
  searchInput.value = '';
  clearBtn.classList.add('visually-hidden');
  renderExercises(results, exercisesList);
  renderPagination(Number(totalPages), Number(page), paginationList);
});

async function loadAndRenderCategoriesList() {
  categoriesList.innerHTML = '';
  exercisesList.innerHTML = '';
  paginationList.innerHTML = '';
  loader.classList.remove('visually-hidden');
  try {
    const categories = await fetchCategories(
      currentFilter,
      currentPage,
      categoriesPerPage
    );
    const { results, page, totalPages } = categories;
    renderCategories(results, categoriesList);
    renderPagination(Number(totalPages), Number(page), paginationList);
    loader.classList.add('visually-hidden');
  } catch (error) {
    loader.classList.add('visually-hidden');
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message,
    });
  }
}

filtersList.addEventListener('click', onFiltersListClick);

function onFiltersListClick(event) {
  const clickedItem = event.target.closest('.filters-list-item');
  if (clickedItem) {
    const filterOption = clickedItem.dataset.option;
    currentFilter = filterOption;
    loadAndRenderCategoriesList();
    renderFilter(filterOptions, currentFilter, filtersList);
    searchForm.classList.add('visually-hidden');
    searchQuery = '';
    searchInput.value = '';
  }
}

categoriesList.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  const clickedItem = event.target.closest('.categories-item');
  if (clickedItem) {
    currentCategory = clickedItem.dataset.name;
    try {
      const exercises = await fetchExercises(
        currentFilter,
        currentCategory,
        searchQuery,
        currentPage,
        exercisesPerPage
      );
      const { results, page, totalPages } = exercises;
      categoriesList.innerHTML = '';
      paginationList.innerHTML = '';
      renderExercises(results, exercisesList);
      renderPagination(Number(totalPages), Number(page), paginationList);
      searchForm.classList.remove('visually-hidden');
    } catch (error) {
      loader.classList.add('visually-hidden');
      iziToast.error({
        icon: '',
        position: 'topRight',
        message: error.message,
      });
    }
  }
}
paginationList.addEventListener('click', onPaginationClick);

async function onPaginationClick(event) {
  const clickedButton = event.target.closest('button[data-page]');
  if (clickedButton) {
    const currentPage = parseInt(clickedButton.dataset.page, 10);
    try {
      if (currentCategory) {
        const exercises = await fetchExercises(
          currentFilter,
          currentCategory,
          searchQuery,
          currentPage,
          exercisesPerPage
        );
        const { results, page, totalPages } = exercises;
        renderExercises(results, exercisesList);
        renderPagination(Number(totalPages), Number(page), paginationList);
      } else {
        console.log(1);

        const categories = await fetchCategories(
          currentFilter,
          currentPage,
          categoriesPerPage
        );
        const { results, page, totalPages } = categories;
        renderCategories(results, categoriesList);
        renderPagination(Number(totalPages), Number(page), paginationList);
      }
    } catch (error) {
      loader.classList.add('visually-hidden');
      iziToast.error({
        icon: '',
        position: 'topRight',
        message: error.message,
      });
    }
  }
}

// Call the render the quote
document.addEventListener('DOMContentLoaded', renderQuoteOfTheDay);

renderFilter(filterOptions, currentFilter, filtersList);
loadAndRenderCategoriesList();
