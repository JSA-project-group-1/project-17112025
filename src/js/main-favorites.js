import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import '/css/pages/favorites.css';
import '/css/pages/modal-exercise.css';
import '/css/pages/section-exercises.css';
import './header.js';
import './modal-exercise.js';
import { renderQuoteOfTheDay } from './render-functions.js';
import { openRatingModal } from './rating-modal.js';
import iconsUrl from '../assets/icons/icons.svg';

const FAVORITES_KEY = 'favorite_workouts';

const mobileBreakpoint = 375;
const isMobile = document.documentElement.clientWidth <= mobileBreakpoint;
const desktopBreakpoint = 1440;
const isDesktop = document.documentElement.clientWidth >= desktopBreakpoint;

import { renderPagination } from './render-functions';


let favoritesState = [];
let currentPage = 1;
let pages = 1;
let perPage = isMobile ? 8 : (isDesktop ? 1000 : 10);

const paginationList = document.querySelector('ul.pagination-controls-list');
const favoritesList = document.querySelector('ul.favorites-list');
const favoritesBlok = document.getElementById('favorites-blok');

// ====== СЕРВІС ДЛЯ localStorage ======

function readFavoritesFromStorage() {
  const raw = localStorage.getItem(FAVORITES_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to parse favorites from LS:', err);
    iziToast.error({
      message: 'Favorites data is corrupted. Clearing storage.',
      position: 'topRight',
      maxWidth: 600,
    });
    localStorage.removeItem(FAVORITES_KEY);
    return [];
  }
}

function saveFavoritesToStorage(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

// ====== РЕНДЕР ======


function loadAndRenderFavoriesList() {
  favoritesList.innerHTML = '';
  paginationList.innerHTML = '';

  try {
    favoritesState = readFavoritesFromStorage();
    pages = Math.max(
      1,
      Math.ceil(favoritesState.length / perPage)
    );
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;
    const itemsForCurrentPage = favoritesState.slice(startIndex, endIndex);
    renderFavorites(itemsForCurrentPage, favoritesList);
    if (favoritesState.length > 0) {
      renderPagination(pages, currentPage, paginationList);
    }
  } catch (error) {
    // warningP.classList.remove('visually-hidden');
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message,
    });
  }
}

function renderFavorites(exercises, list) {
  if (exercises.length > 0) {
    const markup = exercises
      .map(({ _id, name, target, bodyPart, burnedCalories }) => {
        return `
    <li class="exercises-item">
    <div class="header-card">
    <div class="header-left">
        <span class="type">WORKOUT</span>
          <button type="button" class="favorite-remove-btn" data-id="${_id}">
            <svg class="modal-exercise-trash-icon favorite-exercise-trash-icon" width="18" height="18">
              <use href="${iconsUrl}#icon-trash"></use></svg>
            </span>
          </button>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${_id}"> Start
        <svg class="icon-arrow-right" width="18" height="18">
        <use href="${iconsUrl}#icon-arrow-1"></use>
        </svg>
        </button>
        </div>
        </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${_id}">
      <svg class="icon" width="24" height="24">
      <use href="${iconsUrl}#icon-run-man-2"></use>
      </svg>
      </button>
      <span class="name-text-exercise">${name}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
        <li class="calories">
        <span class="calories-name">Burned calories</span>
        <span class="calories-value">${burnedCalories} / 3 min</span>
        </li>
        <li class="body-part">
        <span class="body-part-name">Body part:</span>
        <span class="body-part-value">${bodyPart}</span>
        </li>
        <li class="target">
        <span class="target-name">Target:</span>
        <span class="target-value">${target}</span>
          </li>
          </ul>
          </div>
          </li>
          `;
      })
      .join('');
    list.innerHTML = markup;
  } else {
    list.innerHTML =
      "<div class='no-content-warning'><p>It appears that you haven't added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p></div>";
  }

  // attach click listeners to rating buttons to open rating modal with the exercise id
  const ratingButtons = list.querySelectorAll('.js-give-rating-btn');
  ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.exerciseId;
      openRatingModal(id, null);
    });
  });
}

// ====== СИНХРОНІЗАЦІЯ ПІСЛЯ ЗАКРИТТЯ МОДАЛКИ ======

function onModalCloseClick(event) {
  const closeModal = event.target.closest('[data-modal-exercise="close"]');
  if (closeModal) {
    const newState = readFavoritesFromStorage();

    const prev = JSON.stringify(favoritesState);
    const next = JSON.stringify(newState);

    if (prev === next) return;

    favoritesState = newState;

    favoritesList.innerHTML = '';
    paginationList.innerHTML = '';
    pages = Math.max(
      1,
      Math.ceil(favoritesState.length / perPage)
    );
    renderFavorites(favoritesState, favoritesList);
    if (favoritesState.length > 0) {
      renderPagination(pages, currentPage, paginationList);
    }
  }
}


function onFavoritesListClick(event) {
  const removeBtn = event.target.closest('button[data-id]');
  if (removeBtn) {
    const workoutId = removeBtn.dataset.id;
    if (!workoutId) return;

    const newFavorites = favoritesState.filter(item => item._id !== workoutId);

    if (newFavorites.length === favoritesState.length) {
      return;
    }

    favoritesState = newFavorites;
    saveFavoritesToStorage(favoritesState);

    favoritesList.innerHTML = '';
    paginationList.innerHTML = '';
    pages = Math.max(
      1,
      Math.ceil(favoritesState.length / perPage)
    );
    renderFavorites(favoritesState, favoritesList);
    if (favoritesState.length > 0) {
      renderPagination(pages, currentPage, paginationList);
    }
  }
}

function onPaginationClick(event) {
  const clickedButton = event.target.closest('button[data-page]');
  if (clickedButton) {
    try {
      switch (clickedButton.dataset.page) {
        case 'beg':
          currentPage = 1;
          break;

        case 'prev':
          currentPage--;
          break;

        case 'next':
          currentPage++;
          break;

        case 'end':
          currentPage = pages;
          break;

        default:
          currentPage = parseInt(clickedButton.dataset.page, 10);
      }

      const startIndex = (currentPage - 1) * perPage;
      const endIndex = currentPage * perPage;
      const itemsForCurrentPage = favoritesState.slice(startIndex, endIndex);
      renderFavorites(itemsForCurrentPage, favoritesList);
      if (favoritesState.length > 0) {
        renderPagination(pages, currentPage, paginationList);
      }

    } catch (error) {
      iziToast.error({
        icon: '',
        position: 'topRight',
        message: error.message,
      });
    }
  }
}
// ====== INIT ======

function initFavoritesPage() {
  renderQuoteOfTheDay();
  loadAndRenderFavoriesList()

  favoritesList.addEventListener('click', onFavoritesListClick);
  paginationList.addEventListener('click', onPaginationClick);
  document.addEventListener('click', onModalCloseClick);
}

initFavoritesPage();
