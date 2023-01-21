const popupBtnOpen = document.querySelector('.popup_open');
const popupBtnClose = document.querySelector('.modal-close');
const popUp = document.querySelector('.modal');

// popupBtnOpen.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.toggle('active');
// });
popupBtnOpen.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});

popupBtnClose.addEventListener('click', () => {
    popUp.classList.remove('active');
});
