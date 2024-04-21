document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.slider__tabs .slider__button');
  const slides = document.querySelectorAll('.slider__contents .slider__item');

  buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => btn.classList.remove('slider__button_active'));
          slides.forEach(slide => slide.classList.remove('slider__item_active'));

          this.classList.add('slider__button_active');
          slides[index].classList.add('slider__item_active');
      });
  });
});