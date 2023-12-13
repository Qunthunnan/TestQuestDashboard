"use strict"
const sidePanel = document.querySelector('.side_panel'),
      mobileButton = document.querySelector('.mobileButton');

mobileButton.addEventListener('click', e => {
        if(e.target && e.target.matches('.mobileButton span')) {
            sidePanel.classList.toggle('side_panel--active');
        } 
    });