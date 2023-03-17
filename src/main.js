/* eslint-disable no-magic-numbers */
import './style.css';

const getBtn = document.querySelector('#randomBtn');
const getName = document.querySelector('#name');
const getImg = document.querySelector('#image');

getBtn.addEventListener('click', () => {
  const generateRandomID = Math.floor((Math.random() * 700) + 1);
  const getURL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${generateRandomID}.json`;
  fetch(getURL)
    .then((response) => response.json())
    .then((data) => {
      getImg.src = data.images.md;
      getName.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
