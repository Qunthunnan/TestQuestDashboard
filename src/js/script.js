"use strict"

const sidePanel = document.querySelector('.side_panel'),
      mobileButton = document.querySelector('.jsMobileBtn');

mobileButton.addEventListener('click', () => {
        sidePanel.classList.toggle('side_panel--active');
});