
var imgElem = document.querySelector('img');
var imageForm = document.getElementById('image');

if(!localStorage.getItem('image')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('image', imageForm.value);

  setStyles();
}

function setStyles() {
  var currentImage = localStorage.getItem('image');
  imageForm.value = currentImage;
  imgElem.setAttribute('src', currentImage);
}

imageForm.onchange = populateStorage;