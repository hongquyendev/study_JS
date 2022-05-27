const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");
const dotItems = document.querySelectorAll(".slider-dot-item");
const sliderItemWidth = sliderItems[0].offsetWidth;
const slidesLength = sliderItems.length;
let positionX = 0;
let index = 0;

nextBtn.addEventListener("click", function () {
  handleChangeSlide(1);
  console.log(index);
});
prevBtn.addEventListener("click", function () {
  handleChangeSlide(-1);
  console.log(index);
});

[...dotItems].forEach((item) =>
  item.addEventListener("click", function (e) {
    [...dotItems].forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    const slideIndex = parseInt(e.target.dataset.index);
    index = slideIndex;
    positionX = -1 * slideIndex * sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    console.log("slideIndex", slideIndex);
  })
);

function handleChangeSlide(direction) {
  if (direction == 1) {
    if (index >= slidesLength - 1) {
      index = slidesLength - 1;
      return;
    }
    positionX -= sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index++;
  } else if (direction == -1) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX += sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index--;
  }
  [...dotItems].forEach((el) => el.classList.remove("active"));

  dotItems[index].classList.add("active");
}
