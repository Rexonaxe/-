// Получаем элементы слайдера
const sliders = document.querySelectorAll(".slider");

for (let i = 0; i < sliders.length; i++) {
    // Перебирает все, вызывает функцию для каждого.
    init_slider(sliders[i]);
}

function init_slider(slider) {
    let slider_items_container = slider.querySelector(".slider-items");
    let slider_items = Array.from(slider_items_container.querySelectorAll(".item-card"));
    let prevButton = slider.querySelector(".slider__prev-button");
    let nextButton = slider.querySelector(".slider__next-button");
    let slideCount = slider_items.length;
    let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
    function showPreviousSlide() {
        let temp = slideIndex;
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider(temp);
    }

// Функция для показа следующего слайда
    function showNextSlide() {
        let temp = slideIndex;
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider(temp);
    }

    const el_slide = slider.querySelector(".item-card");
    let slideWidth = el_slide.clientWidth;

    new ResizeObserver(() => {
        slideWidth = el_slide.clientWidth;
        updateSlider(slideIndex);
    }).observe(el_slide);

// Функция для обновления отображения слайдера
    function updateSlider() {
        slider_items_container.style.translate = `${-slideIndex * (slideWidth + 20)}px`;
    }
}
