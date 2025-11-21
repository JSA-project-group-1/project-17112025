import { fetchExerciseModalById } from './api-functions.js';
import {
  createModalExerciseMarkup,
  createRemoveFromFavoritesMarkup,
  createAddToFavoritesMarkup,
} from './modal-exercise-markup.js';
import { ModalBox } from './modal-class-box.js';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const FAVORITES_KEY = 'favorite_workouts';

function readFavoritesFromStorage() {
  const raw = localStorage.getItem(FAVORITES_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse favorites from LS in modal:', error);
    localStorage.removeItem(FAVORITES_KEY);
    return [];
  }
}

function saveFavoritesToStorage(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isExerciseInFavorites(exerciseId) {
  const favorites = readFavoritesFromStorage();
  return favorites.some(item => item._id === exerciseId);
}

document.addEventListener('click', event => {
  if (event.target.matches(openModalSelector)) {
    const exerciseId = event.target.dataset.exerciseId;
    handleOpenModalClick(exerciseId);
  }
});

async function handleOpenModalClick(exerciseId) {
  let modalBox = {};

  const favoriteId = exerciseId || '64f389465ae26083f39b17a2';

  try {
    const exerciseData = await fetchExerciseModalById(favoriteId);

    modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exerciseData
    );

    modalBox.open();

    setupModalEventListeners(modalBox, exerciseData);
  } catch (error) {
    console.error('Error loading exercise data:', error);
  }
}

function setupModalEventListeners(modalBox, exerciseData) {
  const modalElement = modalBox.instance.element();
  const giveRatingBtnRef = modalElement.querySelector('.js-give-rating-btn');
  const addToFavoriteBtnRef = modalElement.querySelector(
    '.js-add-to-favorites-btn'
  );

  if (giveRatingBtnRef) {
    giveRatingBtnRef.addEventListener('click', event =>
      handleGiveRatingBtnClick(event, modalBox)
    );
  }

  if (addToFavoriteBtnRef) {
    addToFavoriteBtnRef.addEventListener('click', event =>
      handleAddToFavoriteBtnClick(event, exerciseData, addToFavoriteBtnRef)
    );

    if (isExerciseInFavorites(exerciseData._id)) {
      addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();
    } else {
      addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
    }
  }
}

function handleGiveRatingBtnClick(_, modalBox) {
  modalBox.instance.close();
}

function handleAddToFavoriteBtnClick(_, exerciseData, addToFavoriteBtnRef) {
  const favorites = readFavoritesFromStorage();
  const exists = favorites.some(item => item._id === exerciseData._id);

  if (exists) {
    processRemovalsFromFavorites(exerciseData._id, addToFavoriteBtnRef, favorites);
    return;
  }

  processAddingToFavorites(exerciseData, addToFavoriteBtnRef, favorites);
}

function processAddingToFavorites(exerciseData, addToFavoriteBtnRef, favorites) {
  addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();

  const minifiedExercise = {
  _id: exerciseData._id,
  time: exerciseData.time,
  target: exerciseData.target,
  name: exerciseData.name,
  burnedCalories: exerciseData.burnedCalories,
  bodyPart: exerciseData.bodyPart,
};

favorites.push(minifiedExercise);
  saveFavoritesToStorage(favorites);
}

function processRemovalsFromFavorites(exerciseId, addToFavoriteBtnRef, favorites) {
  const newFavorites = favorites.filter(item => item._id !== exerciseId);

  if (newFavorites.length === 0) {
    localStorage.removeItem(FAVORITES_KEY);
  } else {
    saveFavoritesToStorage(newFavorites);
  }

  addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
}