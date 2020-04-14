menuBtn = document.querySelector('#menu');
openedMenu = document.querySelector('.openedMenu');
closeMenuBtn = document.querySelector('#menuX');
backdrop = document.querySelector('#backdrop');
categoryDropDown = document.querySelector('.category-dropdown');

const toggleMenu = function () {
    openedMenu.classList.toggle('hideShow');
    openedMenu.classList.toggle('slide-right');
    document.body.classList.toggle('overflowHidden');
    backdrop.classList.toggle('visible')
}

menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click',toggleMenu);
backdrop.addEventListener('click', toggleMenu)

categoryBtn = document.querySelector('#category')

const showCategoryHandler = function () {
    console.log('test');
    categoryDropDown.classList.toggle('hideShow');
}


categoryBtn.onmouseover = showCategoryHandler;
categoryBtn.onmouseout = showCategoryHandler;
