import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import '/css/pages/favorites.css';
import './header.js';


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

// ====== API ======

// Тягнемо ВЕСЬ список вправ з першої сторінки
async function fetchAllWorkouts() {
  const url =
    "https://your-energy.b.goit.study/api/exercises?page=1&limit=100";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.results)) return data.results;
  if (Array.isArray(data.data)) return data.data;

  throw new Error("Unexpected API response format");
}

// ====== РЕНДЕР ======

function getFavoritesContainer() {
  let container = document.querySelector("[data-favorites-list]");

  if (!container) {
    container = document.getElementById("favorites-list");
  }

  if (!container) {
    const controls =
      document.querySelector(".favorites-test-controls") ||
      document.querySelector("section .container");

    if (!controls) return null;

    container = document.createElement("div");
    container.id = "favorites-list";
    container.classList.add("favorites-list");
    controls.insertAdjacentElement("afterend", container);
  }

  return container;
}

function createWorkoutCardMarkup(workout) {
  const {
    _id,
    name,
    burnedCalories,
    time,
    bodyPart,
    target,
  } = workout;

  return `
    <article class="favorite-card" data-id="${_id}">
      <div class="favorite-card-header">
        <span class="favorite-card-label">WORKOUT</span>
        <button
          type="button"
          class="favorite-remove-btn"
        >
          Remove card
        </button>
      </div>

      <h3 class="favorite-card-title">${name}</h3>

      <p class="favorite-card-text">
        Burned calories: <span>${burnedCalories} / ${time} min</span>
      </p>
      <p class="favorite-card-text">
        Body part: <span>${bodyPart}</span>
      </p>
      <p class="favorite-card-text">
        Target: <span>${target}</span>
      </p>
    </article>
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

  const cardsMarkup = itemsForPage
    .map(createWorkoutCardMarkup)
    .join("");

  const paginationMarkup = createPaginationMarkup(totalPages, currentPage);

  container.innerHTML = cardsMarkup;

  const oldPagination = document.querySelector(".favorites-pagination");
  if (oldPagination) oldPagination.remove();

  container.insertAdjacentHTML("afterend", paginationMarkup);
}

// ====== ЛОГІКА ДОДАВАННЯ ======

async function onAddBtnClick() {
  try {
    const workouts = await fetchAllWorkouts();

    favoritesState = readFavoritesFromStorage();
    const favoriteIds = new Set(favoritesState.map(w => w._id));

    const nextWorkout = workouts.find(w => !favoriteIds.has(w._id));

    if (!nextWorkout) {
      iziToast.info({
        title: "No more workouts",
        message: "All workouts from API are already in favorites.",
        position: "topRight",
        maxWidth: 600,
      });
      console.log("All workouts from API are already in favorites.");
      return;
    }

    favoritesState.push(nextWorkout);
    saveFavoritesToStorage(favoritesState);

    const totalPages = Math.max(
      1,
      Math.ceil(favoritesState.length / ITEMS_PER_PAGE)
    );
    currentPage = totalPages;

    renderFavoritesList();

    iziToast.success({
      title: nextWorkout.name,
      message: "Workout added to favorites.",
      position: "topRight",
      maxWidth: 600,
    });

    console.log("Added workout:", nextWorkout);
    console.log("Favorites after add:", favoritesState);
  } catch (err) {
    console.error("Failed to add favorite:", err);
    iziToast.error({
      title: "Error",
      message: "Failed to add workout to favorites.",
      position: "topRight",
      maxWidth: 600,
    });
  }
}

// ====== ЛОГІКА ВИДАЛЕННЯ + ПАГІНАЦІЯ ======

function onFavoritesListClick(event) {
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
      renderFavoritesList();
    } else {
      const totalPages = Math.max(
        1,
        Math.ceil(favoritesState.length / ITEMS_PER_PAGE)
      );
      if (currentPage > totalPages) currentPage = totalPages;
      renderFavoritesList();
    }

    iziToast.success({
      title: removed ? removed.name : "Workout",
      message: "Workout removed from favorites.",
      position: "topRight",
      maxWidth: 600,
    });

    console.log("Removed id:", workoutId);
    console.log("Favorites after remove:", favoritesState);
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

// ====== ІНІЦІАЛІЗАЦІЯ СТОРІНКИ ======

function initFavoritesPage() {
  const addBtn = document.getElementById("favorites-add-btn");

  if (addBtn) {
    addBtn.addEventListener("click", onAddBtnClick);
  }

  // слухаємо кліки по всьому документу:
  document.addEventListener("click", onFavoritesListClick);

  favoritesState = readFavoritesFromStorage();
  currentPage = 1;
  renderFavoritesList();

  console.log("Favorites page initialized. Current favorites:", favoritesState);
}

initFavoritesPage();