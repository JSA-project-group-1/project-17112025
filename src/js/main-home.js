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

import '../css/loader.css';
import { showLoader, hideLoader } from './loader.js';

const filterOptions = ['Muscles', 'Body parts', 'Equipment'];
const mobileBreakpoint = 375;

const slash = document.querySelector('span.slash');
const currentCategoryP = document.querySelector('p.current-category');
const warningP = document.querySelector('p.warning');

const filtersList = document.querySelector('ul.filters-list');
const categoriesList = document.querySelector('ul.block-categories-list');
const exercisesList = document.querySelector('ul.exercises-list');
const paginationList = document.querySelector('ul.pagination-controls-list');

const searchForm = document.querySelector('form.search-form');
const searchInput = searchForm.querySelector('.search-input');
const clearBtn = document.querySelector('button.clear-btn');

// ЛОАДЕРНЫЕ КОНТЕЙНЕРЫ
const categoriesSection = document.getElementById('categories-section');

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

  showLoader(categoriesSection);

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
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message,
    });
  } finally {
    hideLoader(categoriesSection);
  }
});

clearBtn.addEventListener('click', async () => {
  searchQuery = '';
  searchInput.value = '';
  clearBtn.classList.add('visually-hidden');
  renderExercises(results, exercisesList);
  renderPagination(Number(totalPages), Number(page), paginationList);
  loadAndRenderCategoriesList();
});


async function loadAndRenderCategoriesList() {
  categoriesList.innerHTML = '';
  exercisesList.innerHTML = '';
  paginationList.innerHTML = '';

  showLoader(categoriesSection);

  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Визуальная задержка лоадера (чтоб видеть что работает. Можно убрать)

    const categories = await fetchCategories(
      currentFilter,
      currentPage,
      categoriesPerPage
    );

    const { results, page, totalPages } = categories;

    renderCategories(results, categoriesList);
    renderPagination(Number(totalPages), Number(page), paginationList);

  } catch (error) {
    warningP.classList.remove('visually-hidden');
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message,
    });
  } finally {
    hideLoader(categoriesSection);
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
    currentCategory = '';
    searchInput.value = '';
    slash.classList.add('visually-hidden');
    currentCategoryP.textContent = currentCategory;
  }
}


categoriesList.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  const clickedItem = event.target.closest('.categories-item');
  if (clickedItem) {
    showLoader(categoriesSection);
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
      slash.classList.remove('visually-hidden');
      currentCategoryP.textContent = currentCategory;
    } catch (error) {
      iziToast.error({
        icon: '',
        position: 'topRight',
        message: error.message,
      });
    }finally{
        hideLoader(categoriesSection);
    }
  }
}

paginationList.addEventListener('click', onPaginationClick);

async function onPaginationClick(event) {
  const clickedButton = event.target.closest('button[data-page]');
  if (clickedButton) {

    showLoader(categoriesSection);
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
      iziToast.error({
        icon: '',
        position: 'topRight',
        message: error.message,
      });
    } finally {
      hideLoader(categoriesSection);
    }
  }
}

document.addEventListener('DOMContentLoaded', renderQuoteOfTheDay);

renderFilter(filterOptions, currentFilter, filtersList);
loadAndRenderCategoriesList();
