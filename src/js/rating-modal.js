import iziToast from 'izitoast';
import { sendRating } from './api-functions.js';

const RATING_MODAL_SELECTOR = '[data-modal-rating]';
const RATING_FORM_SELECTOR = '[data-rating-form]';

const refs = {
  ratingModalBackdrop: document.querySelector(RATING_MODAL_SELECTOR),
  closeRatingModalBtn: document.querySelector('[data-modal-rating-close]'),
  ratingForm: document.querySelector(RATING_FORM_SELECTOR),
  ratingStars: document.querySelector('.rating-stars'),
  ratingValueSpan: document.querySelector('.rating-value'),
  ratingRadios: document.querySelectorAll('.rating-radio'),
};

let currentExerciseId = null;
let modalExerciseInstance = null;
let currentRating = 0;

export function openRatingModal(exerciseId, modalBoxInstance) {
  if (!refs.ratingModalBackdrop) return;

  currentExerciseId = exerciseId;
  modalExerciseInstance = modalBoxInstance;

  if (modalExerciseInstance && modalBoxInstance.instance) {
    modalBoxInstance.instance.close();
  }

  refs.ratingModalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  resetRating();
}

function closeRatingModal() {
  if (!refs.ratingModalBackdrop) return;

  refs.ratingModalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';

  if (modalExerciseInstance && modalExerciseInstance.instance) {
    modalExerciseInstance.instance.show();
  }

  currentExerciseId = null;
  modalExerciseInstance = null;
  currentRating = 0;
  refs.ratingForm.reset();
}

function updateRatingValue(rating) {
  refs.ratingValueSpan.textContent = rating.toFixed(1);
  currentRating = rating;
}

function handleStarChange(event) {
  if (event.target.name === 'rating') {
    const rating = parseFloat(event.target.value);
    updateRatingValue(rating);
  }
}

function resetRating() {
  if (refs.ratingRadios.length > 0) {
    refs.ratingRadios.forEach(radio => (radio.checked = false));
  }
  updateRatingValue(0.0);
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get('email').trim();
  const review = formData.get('review').trim();

  if (currentRating === 0) {
    iziToast.error({
      message: 'Please give a rating before submitting.',
      position: 'topRight',
    });
    return;
  }

  if (!email) {
    iziToast.error({
      message: 'Email field cannot be empty.',
      position: 'topRight',
    });
    return;
  }

  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    iziToast.error({
      message: 'Please enter a valid email address.',
      position: 'topRight',
    });
    return;
  }

  const ratingData = {
    rate: currentRating,
    email: email,
    review: review || '',
  };

  try {
    await sendRating(currentExerciseId, ratingData);

    iziToast.success({
      message: 'Rating successfully sent! Thank you for your feedback.',
      position: 'topRight',
    });

    closeRatingModal();
  } catch (error) {
    console.error('Rating submission failed:', error);
    let errorMessage = 'Failed to submit rating. Please try again.';

    if (error.response && error.response.status === 409) {
      errorMessage = 'You have already rated this exercise.';
    }

    iziToast.error({
      message: errorMessage,
      position: 'topRight',
    });
  }
}

if (refs.ratingStars) {
  refs.ratingStars.addEventListener('change', handleStarChange);
}

if (refs.ratingForm) {
  refs.ratingForm.addEventListener('submit', handleFormSubmit);
}

if (refs.closeRatingModalBtn) {
  refs.closeRatingModalBtn.addEventListener('click', closeRatingModal);
}

if (refs.ratingModalBackdrop) {
  refs.ratingModalBackdrop.addEventListener('click', evt => {
    if (evt.target === refs.ratingModalBackdrop) {
      closeRatingModal();
    }
  });
}

document.addEventListener('keydown', evt => {
  if (
    evt.key === 'Escape' &&
    refs.ratingModalBackdrop &&
    !refs.ratingModalBackdrop.classList.contains('is-hidden')
  ) {
    closeRatingModal();
  }
});
