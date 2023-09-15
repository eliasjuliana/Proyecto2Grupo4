//selecciono botones del navbar

const menuBtnNav = document.getElementById('btn-menu');
const searchBtnNav = document.getElementById('btn-search');
const userBtnNav = document.getElementById('btn-user');

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownSearch = document.getElementById('dropdown-search');
const dropdownUser = document.getElementById('dropdown-user');

const iconSearch = document.getElementById('icon-search');
const iconX = document.getElementById('icon-xmark');


//funciones
const toggleNavbarButton = (button, dropdown) => {
    if (button.classList.contains('btn-navbar-active')) {
        button.classList.remove('btn-navbar-active');
        button.classList.add('btn');
        dropdown.classList.add('d-none');
    } else {
        button.classList.add('btn-navbar-active');
        button.classList.remove('btn');
        dropdown.classList.remove('d-none');
    }
};

const hideOtherDropdowns = (dropdown1, dropdown2) =>{
    dropdown1.classList.add('d-none');
    dropdown2.classList.add('d-none');
};

const inactiveBtn = (btn1, btn2) =>{
    btn1.classList.add('btn');
    btn1.classList.remove('btn-navbar-active');
    btn2.classList.add('btn');
    btn2.classList.remove('btn-navbar-active');
}

const changeIcons = (iconToShow, iconToHide) =>{
    iconToShow.classList.remove('d-none');
    iconToHide.classList.add('d-none');
}


//event listeners
menuBtnNav.addEventListener('click', () => {
    toggleNavbarButton(menuBtnNav, dropdownMenu);
    hideOtherDropdowns(dropdownSearch, dropdownUser);
    inactiveBtn(searchBtnNav, userBtnNav);
    changeIcons(iconSearch, iconX);
});

searchBtnNav.addEventListener('click', () => {
    toggleNavbarButton(searchBtnNav, dropdownSearch, iconSearch, iconX);
    hideOtherDropdowns(dropdownMenu, dropdownUser);
    inactiveBtn(menuBtnNav, userBtnNav);

    if(!(searchBtnNav.classList.contains('btn-navbar-active'))){
        changeIcons(iconSearch, iconX);
    } else {
        changeIcons(iconX, iconSearch);
    }
});

userBtnNav.addEventListener('click', () => {
    toggleNavbarButton(userBtnNav, dropdownUser);
    hideOtherDropdowns(dropdownMenu, dropdownSearch);
    inactiveBtn(menuBtnNav, searchBtnNav);
    changeIcons(iconSearch, iconX);
});
