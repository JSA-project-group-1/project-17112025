import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "/css/pages/favorites.css";
import "/css/pages/modal-exercise.css";
import "/css/pages/section-exercises.css";
import "./header.js";
import "./modal-exercise.js";
import { renderQuoteOfTheDay } from "./quote-api-localStorage.js";

const FAVORITES_KEY = "favorite_workouts";
const ITEMS_PER_PAGE = 12;

let favoritesState = [];
let currentPage = 1;

// ====== СЕРВІС ДЛЯ localStorage ======

function readFavoritesFromStorage() {
  const raw = localStorage.getItem(FAVORITES_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Failed to parse favorites from LS:", err);
    iziToast.error({
      message: "Favorites data is corrupted. Clearing storage.",
      position: "topRight",
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

function getFavoritesContainer() {
  let container = document.querySelector("[data-favorites-list]");

  if (!container) {
    container = document.getElementById("favorites-list");
  }

  if (!container) {
    const parent = document.querySelector("section .container");
    if (!parent) return null;

    container = document.createElement("div");
    container.id = "favorites-list";
    container.classList.add("favorites-list", "exercises-list");
    parent.appendChild(container);
  } else {
    container.classList.add("favorites-list", "exercises-list");
  }

  return container;
}

function createWorkoutCardMarkup(workout) {
  const { _id, name, burnedCalories, time, bodyPart, target } = workout;

  return `
    <li class="exercises-item favorite-card favorites-item" data-id="${_id}">
      <div class="header">
        <div class="workout-rating">
          <span class="type">WORKOUT</span>
          <button
            type="button"
            class="favorite-remove-btn"
          >
            Remove
          </button>
        </div>

        <button
          class="start-btn"
          type="button"
          data-modal-exercise="open"
          data-exercise-id="${_id}"
        >
          Start
        </button>
      </div>

      <div class="title">
        <span class="icon"></span>${name}
      </div>

      <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${burnedCalories} / ${time} min</span>
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
}

function createPaginationMarkup(totalPages, page) {
  if (totalPages <= 1) return "";

  const prevDisabled = page === 1 ? "disabled" : "";
  const nextDisabled = page === totalPages ? "disabled" : "";

  return `
    <div class="favorites-pagination">
      <button
        type="button"
        class="favorites-page-btn"
        data-page="prev"
        ${prevDisabled}
      >&lt;</button>

      <span class="favorites-page-info">${page} / ${totalPages}</span>

      <button
        type="button"
        class="favorites-page-btn"
        data-page="next"
        ${nextDisabled}
      >&gt;</button>
    </div>
  `;
}

function renderFavoritesList() {
  const container = getFavoritesContainer();
  if (!container) return;

  if (!favoritesState.length) {
    container.innerHTML = "<p>No favorite workouts yet.</p>";

    const oldPagination = document.querySelector(".favorites-pagination");
    if (oldPagination) oldPagination.remove();

    return;
  }

  const totalPages = Math.max(
    1,
    Math.ceil(favoritesState.length / ITEMS_PER_PAGE)
  );

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const itemsForPage = favoritesState.slice(startIndex, endIndex);

  const cardsMarkup = itemsForPage.map(createWorkoutCardMarkup).join("");
  const paginationMarkup = createPaginationMarkup(totalPages, currentPage);

  container.innerHTML = cardsMarkup;

  const oldPagination = document.querySelector(".favorites-pagination");
  if (oldPagination) oldPagination.remove();

  container.insertAdjacentHTML("afterend", paginationMarkup);
}

// ====== СИНХРОНІЗАЦІЯ ПІСЛЯ ЗАКРИТТЯ МОДАЛКИ ======

function syncFavoritesFromStorageIfChanged() {
  const newState = readFavoritesFromStorage();

  const prev = JSON.stringify(favoritesState);
  const next = JSON.stringify(newState);

  if (prev === next) return;

  favoritesState = newState;

  if (!favoritesState.length) {
    currentPage = 1;
  } else {
    const totalPages = Math.max(
      1,
      Math.ceil(favoritesState.length / ITEMS_PER_PAGE)
    );
    if (currentPage > totalPages) currentPage = totalPages;
  }

  renderFavoritesList();
}

// ====== ВИДАЛЕННЯ + ПАГІНАЦІЯ + ЗАКРИТТЯ МОДАЛКИ ======

function onFavoritesListClick(event) {
  const closeModalBtn = event.target.closest('[data-modal-exercise="close"]');
  if (closeModalBtn) {
    syncFavoritesFromStorageIfChanged();
    return;
  }

  const removeBtn = event.target.closest(".favorite-remove-btn");
  if (removeBtn) {
    const card = removeBtn.closest(".favorite-card");
    if (!card) return;

    const workoutId = card.dataset.id;
    if (!workoutId) return;

    const removed = favoritesState.find(item => item._id === workoutId);
    const newFavorites = favoritesState.filter(
      item => item._id !== workoutId
    );

    if (newFavorites.length === favoritesState.length) {
      return;
    }

    favoritesState = newFavorites;
    saveFavoritesToStorage(favoritesState);

    if (!favoritesState.length) {
      currentPage = 1;
    } else {
      const totalPages = Math.max(
        1,
        Math.ceil(favoritesState.length / ITEMS_PER_PAGE)
      );
      if (currentPage > totalPages) currentPage = totalPages;
    }

    renderFavoritesList();

    iziToast.success({
      title: removed ? removed.name : "Workout",
      message: "Workout removed from favorites.",
      position: "topRight",
      maxWidth: 600,
    });

    return;
  }

  const pageBtn = event.target.closest(".favorites-page-btn");
  if (pageBtn) {
    const action = pageBtn.dataset.page;
    const totalPages = Math.max(
      1,
      Math.ceil(favoritesState.length / ITEMS_PER_PAGE)
    );

    if (action === "prev" && currentPage > 1) {
      currentPage -= 1;
    } else if (action === "next" && currentPage < totalPages) {
      currentPage += 1;
    }

    renderFavoritesList();
  }
}

// ====== INIT ======

function initFavoritesPage() {
  document.addEventListener("click", onFavoritesListClick);

  favoritesState = readFavoritesFromStorage();
  currentPage = 1;

  renderQuoteOfTheDay();

  renderFavoritesList();
}

initFavoritesPage();