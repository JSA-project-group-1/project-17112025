import { fetchExerciseModalById } from './modal-exercise-api.js';
import { createModalExerciseMarkup } from './modal-exercise-markup.js';
import { ModalBox } from './modal-class-box.js';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const openModalExerciseBtnRef = document.querySelector(openModalSelector);

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

async function handleOpenModalClick() {
  try {
    const exericiseData = await fetchExerciseModalById();
    const modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exericiseData
    );

    modalBox.open();
  } catch (error) {
    console.error(
      "The weather is nice today, isn't it? But in fact, It's just an error"
    );
  }
}
