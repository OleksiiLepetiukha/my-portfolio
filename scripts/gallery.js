const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
  'pic1.jpg': 'Pets',
  'pic2.jpg': 'Dog and Cat',
  'pic3.jpg': '2 dogs and 2 cats',
  'pic4.jpg': 'Dog cant and rabbit',
  'pic5.jpg': '2 dogs'
}

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

// Image Map
let mainImg = document.querySelector('.main-img');

console.log('W:', mainImg.clientWidth, 'H:', mainImg.clientHeight);

let areas = [];
const imgMap = document.getElementsByName('dogmap');
for (i = 0; i < 6; i++){
  console.log(imgMap[0].areas[i].coords);

  //imgMap[0].areas[i].setAttribute('coords', `${mainImg.clientWidth/0}, ${}` )
}
  