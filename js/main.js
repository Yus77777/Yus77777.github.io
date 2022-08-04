'use strict'

{
    const open = document.getElementById('open')
    const textboardsp = document.getElementById('textboard-sp')
    const mask = document.getElementById('mask')


    open.addEventListener('click', () => {
        textboardsp.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    mask.addEventListener('click', () => {
        mask.classList.add('hidden');
        textboardsp.classList.add('hidden');
      });

}