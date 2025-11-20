import { fetchExerciseModalById } from './api-functions.js';
import {
  createModalExerciseMarkup,
  createRemoveFromFavoritesMarkup,
  createAddToFavoritesMarkup,
} from './modal-exercise-markup.js';
import { ModalBox } from './modal-class-box.js';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const LS_FAVORITES_ID = 'favorite-id-list';
const favoriteIdList = JSON.parse(localStorage.getItem(LS_FAVORITES_ID)) || [];

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
    const exericiseData = await fetchExerciseModalById(favoriteId);
    modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exericiseData
    );

    modalBox.open();

    setupModalEventListeners(modalBox, favoriteId);
  } catch (error) {
    console.error('Error loading exercise data:', error);
  }
}

function setupModalEventListeners(modalBox, favoriteId) {
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
      handleAddToFavoriteBtnClick(event, favoriteId, addToFavoriteBtnRef)
    );

    if (favoriteIdList.includes(favoriteId)) {
      addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();
    }
  }
}

function handleGiveRatingBtnClick(_, modalBox) {
  modalBox.instance.close();
}

function handleAddToFavoriteBtnClick(_, favoriteId, addToFavoriteBtnRef) {
  if (favoriteIdList.includes(favoriteId)) {
    processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef);
    removeLocalStorageIfEmpty();
    return;
  }

  processAddingToFavorites(favoriteId, addToFavoriteBtnRef);
}

function processAddingToFavorites(favoriteId, addToFavoriteBtnRef) {
  addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();

  favoriteIdList.push(favoriteId);
  const favoriteIdData = JSON.stringify(favoriteIdList);

  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);
}

function processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef) {
  const currentFavoriteIndex = favoriteIdList.indexOf(favoriteId);
  favoriteIdList.splice(currentFavoriteIndex, 1);

  const favoriteIdData = JSON.stringify(favoriteIdList);
  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);

  addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
}

function removeLocalStorageIfEmpty() {
  if (favoriteIdList.length === 0) {
    localStorage.removeItem(LS_FAVORITES_ID);
  }
}
