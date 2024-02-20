/* Достали DOM-элементы */
const leftStagesButton = document.querySelector('.stages-button_left');
const rightStagesButton = document.querySelector('.stages-button_right');
const stagesContainer = document.querySelector('.stages__list');
const stagesStepsList = document.querySelectorAll('.stages-buttons__step');

/* Создали локальные переменные */
let scrollStagesIndex = 0;

/* Функция измененения активного стэпа */
const changeActiveStage = (counter) => {
  stagesStepsList[scrollStagesIndex]
      .classList.remove('stages-buttons__step_disabled');
  if (stagesStepsList[scrollStagesIndex + 1]) {
    stagesStepsList[scrollStagesIndex + 1]
        .classList.add('stages-buttons__step_disabled');
  }

  if (stagesStepsList[scrollStagesIndex - 1]) {
    stagesStepsList[scrollStagesIndex - 1]
        .classList.add('stages-buttons__step_disabled');
  }
};

/* Функция вычисления позиции карусели */
const counterStagesPosition = (side = 'left') => {
  if (side === 'right' && scrollStagesIndex !== 4) {
    scrollStagesIndex += 1;
  } else if (
    side === 'left' &&
    scrollStagesIndex !== 0
  ) {
    scrollStagesIndex -= 1;
  }

  if (scrollStagesIndex === 4) {
    disableButton(rightStagesButton);
  } else if (scrollStagesIndex === 0) {
    disableButton(leftStagesButton);
  } else {
    activateButton(rightStagesButton);
    activateButton(leftStagesButton);
  }
};

/* Функция слайда влево */
const slideLeft = () => {
  counterStagesPosition('left');
  changeActiveStage(counterStagesPosition);
  swipeContainer('left', 400);
};

/* Функция слайда вправо */
const slideRight = () => {
  counterStagesPosition('right');
  changeActiveStage(counterStagesPosition);
  swipeContainer('right', 400);
};

/* Функция отключения кнопки */
const disableButton = (button) => {
  button.classList.add('stages-button_disabled');
  button.disabled = true;
};

/* Функция включение кнопки */
const activateButton = (button) => {
  if (button.classList.contains('stages-button_disabled')) {
    button.classList.remove('stages-button_disabled');
    button.disabled = false;
  }
};

/* Функция свайпа в контейнере */
const swipeContainer = (side, breakpoint) => {
  if (side === 'right') {
    stagesContainer.scrollLeft += breakpoint;
  } else {
    stagesContainer.scrollLeft -= breakpoint;
  }
};

/* Навешиваем обработчики */
leftStagesButton.addEventListener('click', slideLeft);
rightStagesButton.addEventListener('click', slideRight);
