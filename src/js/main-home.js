import iziToast from 'izitoast';
import './footer-subscription.js';
import './header.js';
import './modal-exercise.js';
import './scroll';
import { fetchCategories, fetchExercises } from './api-functions';
import {
  renderCategories,
  renderExercises,
  renderPagination,
  renderFilter,
} from './render-functions';
import { renderQuoteOfTheDay } from './quote-api-localStorage.js';
import { showLoader, hideLoader } from './loader.js';

import 'izitoast/dist/css/iziToast.min.css';
import '/css/pages/home.css';
import '../css/loader.css';

const filterOptions = ['Muscles', 'Body parts', 'Equipment'];
const mobileBreakpoint = 375;
const isMobile = document.documentElement.clientWidth <= mobileBreakpoint;

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
const categoriesSection = document.getElementById('categories-section');
const NavLinkHome = document.querySelector('a.nav-link');

NavLinkHome.classList.add('nav-link--active');

let currentFilter = filterOptions[0];
let currentCategory = '';
let searchQuery = '';

let categoriesPage = 1;
let categoriesPages = 1;
let categoriesPerPage = isMobile ? 9 : 12;

let exercisesPage = 1;
let exercisesPages = 1;
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
      exercisesPage,
      exercisesPerPage
    );

    const { results, page, totalPages } = exercises;
    exercisesPages = totalPages;
    exercisesPage = page;
    paginationList.innerHTML = '';
    renderExercises(results, exercisesList);
    renderPagination(exercisesPages, exercisesPage, paginationList);

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
  renderPagination(exercisesPages, exercisesPage, paginationList);
  loadAndRenderCategoriesList();
});


async function loadAndRenderCategoriesList() {
  categoriesList.innerHTML = '';
  exercisesList.innerHTML = '';
  paginationList.innerHTML = '';

  showLoader(categoriesSection);

  try {
    const categories = await fetchCategories(
      currentFilter,
      categoriesPage,
      categoriesPerPage
    );

    const { results, page, totalPages } = categories;
    categoriesPages = totalPages;
    categoriesPage = page;

    renderCategories(results, categoriesList);
    renderPagination(categoriesPages, categoriesPage, paginationList);

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
    if (results.length > 0) {
      renderFilter(filterOptions, currentFilter, filtersList);
    }
    searchForm.classList.add('visually-hidden');
    searchQuery = '';
    currentCategory = '';
    searchInput.value = '';
    currentCategoryP.textContent = currentCategory;
    slash.classList.add('visually-hidden');
  }
}


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
        exercisesPage,
        exercisesPerPage
      );
      const { results, page, totalPages } = exercises;
      exercisesPages = totalPages;
      exercisesPage = page;
      categoriesList.innerHTML = '';
      paginationList.innerHTML = '';
      renderExercises(results, exercisesList);
      if (results.length > 0) {
        renderPagination(exercisesPages, exercisesPage, paginationList);
        searchForm.classList.remove('visually-hidden');
      }
      currentCategoryP.textContent = currentCategory;
      slash.classList.remove('visually-hidden');
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


async function onPaginationClick(event) {
  const clickedButton = event.target.closest('button[data-page]');
  if (clickedButton) {
    showLoader(categoriesSection);
    console.log(clickedButton.dataset.page)
    try {
      if (currentCategory) {
        switch (clickedButton.dataset.page) {
          case 'beg':
            exercisesPage = 1;
            break;

          case 'prev':
            exercisesPage--;
            break;

          case 'next':
            exercisesPage++;
            break;

          case 'end':
            exercisesPage = exercisesPages;
            break;

          default:
            exercisesPage = parseInt(clickedButton.dataset.page, 10);
        }

        const exercises = await fetchExercises(
          currentFilter,
          currentCategory,
          searchQuery,
          exercisesPage,
          exercisesPerPage
        );
        const { results, page, totalPages } = exercises;
        exercisesPages = totalPages;
        exercisesPage = page;
        renderExercises(results, exercisesList);
        renderPagination(exercisesPages, exercisesPage, paginationList);
      } else {

        switch (clickedButton.dataset.page) {
          case 'beg':
            categoriesPage = 1;
            break;

          case 'prev':
            categoriesPage--;
            break;

          case 'next':
            categoriesPage++;
            break;

          case 'end':
            categoriesPage = categoriesPages;
            break;

          default:
            categoriesPage = parseInt(clickedButton.dataset.page, 10);
        }

        const categories = await fetchCategories(
          currentFilter,
          categoriesPage,
          categoriesPerPage
        );
        const { results, page, totalPages } = categories;
        categoriesPages = totalPages;
        categoriesPage = page;

        renderCategories(results, categoriesList);
        renderPagination(categoriesPages, categoriesPage, paginationList);
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


renderFilter(filterOptions, currentFilter, filtersList);
loadAndRenderCategoriesList();
categoriesList.addEventListener('click', onCategoryClick);
paginationList.addEventListener('click', onPaginationClick);

document.addEventListener('DOMContentLoaded', renderQuoteOfTheDay);

