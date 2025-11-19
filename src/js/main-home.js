import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchCategories, fetchExercises } from "./pixabay-api"
import { renderCategories, renderExercises, renderPagination, renderFilter } from "./render-functions";

import '/css/pages/home.css';

const filterOptions = ["Muscles", "Body parts", "Equipment"]
const mobileBreakpoint = 375;
const filtersList = document.querySelector("ul.filters-list");
const categoriesList = document.querySelector("ul.block-categories-list");
const exercisesList = document.querySelector("ul.exercises-list");
const paginationList = document.querySelector("ul.pagination-controls-list");
const loader = document.querySelector("span.loader");
const searchForm = document.querySelector("form.form");
const searchInput = searchForm.querySelector(".search-input");
const clearBtn = document.querySelector("button.clear-btn");

const isMobile = document.documentElement.clientWidth <= mobileBreakpoint;

let currentFilter = filterOptions[0]
let searchQuery = ""
let currentPage = 1;
let categoriesPerPage = isMobile ? 9 : 12;
let exercisesPerPage = isMobile ? 8 : 10;


searchForm.addEventListener("input", (evt) => {
  searchQuery = evt.target.value;
  if (searchQuery.length) {
    clearBtn.classList.remove('visually-hidden');
  } else {
    clearBtn.classList.add('visually-hidden');
  }
});

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(searchQuery)
});

clearBtn.addEventListener('click', () => {
  searchQuery = ""
  clearBtn.classList.add('visually-hidden');
  searchInput.value = "";
});



async function loadAndRenderCategoriesList() {
  categoriesList.innerHTML = '';
  exercisesList.innerHTML = '';
  paginationList.innerHTML = '';
  loader.classList.remove('visually-hidden');
  try {
    const categories = await fetchCategories(currentFilter, currentPage, categoriesPerPage);
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
    currentFilter = filterOption
    renderFilter(filterOptions, currentFilter, filtersList)
    loadAndRenderCategoriesList()
  }
}

categoriesList.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  const clickedItem = event.target.closest('.categories-item');
  if (clickedItem) {
    const categoryName = clickedItem.dataset.name;
    console.log(currentFilter, categoryName);

    const exercises = await fetchExercises(currentFilter, categoryName, '', currentPage, exercisesPerPage)
    console.log(exercises);
    const { results, page, totalPages } = exercises;
    categoriesList.innerHTML = '';
    paginationList.innerHTML = '';
    renderExercises(results, exercisesList)
    renderPagination(Number(totalPages), Number(page), paginationList)

  }
}


renderFilter(filterOptions, currentFilter, filtersList)
loadAndRenderCategoriesList()
