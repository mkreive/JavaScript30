'use strict';

document.addEventListener('keydown', (e) => {
    const key = e.keyCode;
    const element = document.querySelector(`div[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);

    element ? element.classList.add('playing') : '';
    audio.play();
});

document.addEventListener('keyup', (e) => {
    const key = e.keyCode;
    const element = document.querySelector(`div[data-key="${key}"]`);
    element ? element.classList.remove('playing') : '';
});
