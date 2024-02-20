/* Достали DOM-элементы */
const leftCarouselButton = document.querySelector('.carousel-button_left');
const rightCarouselButton = document.querySelector('.carousel-button_right');
const carouselContainer = document.querySelector('.participants__list');
const carouselTextContainer = document.querySelector('.carousel-buttons__text');

/* Создали локальные переменные */
let scrollCarouselCounter = 1;
let intervalCounter = 0;
const scrollCarouselWidth = carouselContainer.scrollWidth;

/* Функция измененения текста */
const changeCarouselText = (counter) => {
  carouselTextContainer.textContent = counter.toString();
};

/* Условия для определения первого элемента */
if (scrollCarouselWidth === 2464) {
  scrollCarouselCounter = 3;
  changeCarouselText(scrollCarouselCounter);
} else {
  changeCarouselText(scrollCarouselCounter);
}

/* Функция вычисления позиции карусели */
const counterCarouselPosition = (side = 'left') => {
  if (side === 'right' && scrollCarouselCounter !== 6) {
    scrollCarouselCounter += 1;
  } else if (
    side === 'left' &&
    scrollCarouselCounter !== 1 &&
    scrollCarouselWidth !== 2464
  ) {
    scrollCarouselCounter -= 1;
  } else if (
    side === 'left' &&
    scrollCarouselCounter !== 3 &&
    scrollCarouselWidth === 2464
  ) {
    scrollCarouselCounter -= 1;
  }

  if (scrollCarouselCounter === 6) {
    disableButton(rightCarouselButton);
  } else if (scrollCarouselCounter === 1) {
    disableButton(leftCarouselButton);
  } else if (scrollCarouselCounter === 3 && scrollCarouselWidth === 2464) {
    disableButton(leftCarouselButton);
  } else {
    activateButton(rightCarouselButton);
    activateButton(leftCarouselButton);
  }
};

/* Функция слайда влево */
const slideLeft = () => {
  counterCarouselPosition('left');
  changeCarouselText(scrollCarouselCounter);
  swipeContainer('left', 400);
};

/* Функция слайда вправо */
const slideRight = () => {
  counterCarouselPosition('right');
  changeCarouselText(scrollCarouselCounter);
  swipeContainer('right', 400);
};

/* Функция отключения кнопки */
const disableButton = (button) => {
  button.classList.add('carousel-button_disabled');
  button.disabled = true;
};

/* Функция включение кнопки */
const activateButton = (button) => {
  if (button.classList.contains('carousel-button_disabled')) {
    button.classList.remove('carousel-button_disabled');
    button.disabled = false;
  }
};

/* Функция свайпа в контейнере */
const swipeContainer = (side, breakpoint) => {
  if (side === 'right') {
    carouselContainer.scrollLeft += breakpoint;
  } else {
    carouselContainer.scrollLeft -= breakpoint;
  }
};

/* Функция зацикленной карусели */
const slideCarousel = () => {
  if (intervalCounter === 3 && scrollCarouselWidth === 2464) {
    clearInterval(intervalId);
    setInterval(slideLeft, 4000);
  } else if (intervalCounter === 5) {
    clearInterval(intervalId);
    setInterval(slideLeft, 4000);
  }

  slideRight();
  intervalCounter ++;
};

/* Создали интервал */
const intervalId = setInterval(slideCarousel, 4000);

/* Навешиваем обработчики */
leftCarouselButton.addEventListener('click', slideLeft);
rightCarouselButton.addEventListener('click', slideRight);
