import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchCategories, fetchExercises } from "./pixabay-api"
import { renderCategories, renderExercises, renderPagination, renderFilter } from "./render-functions";

import '/css/pages/home.css';
import './modal-exercise.js';

const filterOptions = ["Muscles", "Body parts", "Equipment"]
const mobileBreakpoint = 375;
const filtersList = document.querySelector("ul.filters-list");
const categoriesList = document.querySelector("ul.block-categories-list");
const exercisesList = document.querySelector("ul.exercises-list");
const paginationList = document.querySelector("ul.pagination-controls-list");
const loader = document.querySelector("span.loader");
const isMobile = document.documentElement.clientWidth <= mobileBreakpoint;

let currentCategory = filterOptions[0]

async function loadAndRenderCategoriesList() {
  categoriesList.innerHTML = '';
  paginationList.innerHTML = '';
  loader.classList.remove('visually-hidden');
  try {
    const categories = await fetchCategories(currentCategory, '1', `${isMobile ? 9 : 12}`);
    const { results, page, totalPages } = categories;
    renderCategories(results, categoriesList)
    renderPagination(Number(totalPages), Number(page), paginationList)
    loader.classList.add('visually-hidden');
  }
  catch (error) {
    loader.classList.add('visually-hidden');
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message
    })
  }
}

filtersList.addEventListener('click', onFiltersListClick);
function onFiltersListClick(event) {
  const clickedItem = event.target.closest('.filters-list-item');
  if (clickedItem) {
    const filterOption = clickedItem.dataset.option;
    currentCategory = filterOption
    renderFilter(filterOptions, currentCategory, filtersList)
    loadAndRenderCategoriesList()
  }
}

categoriesList.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  const clickedItem = event.target.closest('.categories-item');
  if (clickedItem) {
    const categoryName = clickedItem.dataset.name;
    const exercises = await fetchExercises("back", "lats", "barbell", "pull",)
    console.log(exercises);
    const { results, page, totalPages } = exercises;
    categoriesList.innerHTML = '';
    paginationList.innerHTML = '';
    renderExercises(results, exercisesList)
    renderPagination(Number(totalPages), Number(page), paginationList)

  }
}


renderFilter(filterOptions, currentCategory, filtersList)
loadAndRenderCategoriesList()
