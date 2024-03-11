// Background transition
const target = document.querySelector('.target');
const targetTxt = document.querySelector('.target-text');

target.addEventListener('click', changeTarget);

function changeTarget() {
    target.classList.toggle('js-target');
    if (target.classList.length > 1) {
        targetTxt.textContent = 'Click and back outside';
    } else {
        targetTxt.textContent = 'Click and look inside';
    }
}