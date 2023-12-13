"use strict"
let mobileButton = document.querySelector('.sidePanel__mobile-button');

mobileButton.addEventListener('click', e => {
        if(e.target && e.target.matches('.sidePanel__mobile-button span')) {
            alert('CLICK!');
        } 
    });

console.log(mobileButton, 'test');