
const target = document.querySelector('.target');

target.addEventListener('click', changeTarget);

function changeTarget() {
    target.classList.toggle('js-target');
}


