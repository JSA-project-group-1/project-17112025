import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import fetchList from "./pixabay-api"
import { renderMuscles, renderPagination, renderFilter } from "./render-functions";

import '/css/pages/home.css';
const filterOptions = ["Muscles", "Body parts", "Equipment"]
const mobileBreakpoint = 375;
const filtersList = document.querySelector("ul.filters-list");

const categoriesList = document.querySelector("ul.block-categories-list");
const paginationList = document.querySelector("ul.pagination-controls-list");
const loader = document.querySelector("span.loader");
const isMobile = document.documentElement.clientWidth <= mobileBreakpoint;

renderFilter(filterOptions, filterOptions[0], filtersList)
async function loadAndRenderCategoriesList() {
  loader.classList.remove('visually-hidden');
  try {
    const muscles = await fetchList('Muscles', '1', `${isMobile ? 9 : 12}`);
    const { results } = muscles
    console.log(muscles)
    renderMuscles(results, categoriesList)
    renderPagination(2, 1, paginationList)
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

loadAndRenderCategoriesList()