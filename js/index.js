const btnStartElem = document.querySelector("#start-btn");
const closeBtnElem = document.querySelector("#closeBtn");
const randomCatsBtnElem = document.querySelector("#random-cats-btn");
const coinElem = document.querySelector("#coin");
const imgElem = document.querySelector("#img");
const startSection = document.querySelector("#start-section");
const randomCatsSection = document.querySelector("#random-cats-section");
const url = "http://aws.random.cat/meow";

const fetchHandler = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    imgElem.src = data.file;
  } catch (err) {
    console.log(err.message);
  }
};

randomCatsBtnElem.addEventListener("click", (event) => {
  fetchHandler(url);
  coinElem.innerHTML++;
});

closeBtnElem.addEventListener("click", (event) => {
  startSection.style.display = "flex";
  randomCatsSection.style.display = "none";
  coinElem.innerHTML = 0;
});

btnStartElem.addEventListener("click", (event) => {
  randomCatsSection.style.display = "block";
  startSection.style.display = "none";
});
