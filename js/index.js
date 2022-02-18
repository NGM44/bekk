const menuButton = document.getElementById("menu-button")
const menu = document.getElementById('menu')
const ipad = window.matchMedia('screen and (max-width: 767px)')




function hideShowMenu() {
    console.log(menu)
    if (menu.classList.contains('active')){
        menu.classList.remove('active')
        setTimeout(() => {
            menuButton.classList.remove('active')
        }, 400)
    }
    else{
        menu.classList.add('active')
        menuButton.classList.add('active')
    }
}

function validation(event) {
    if (event.matches)
        menuButton.addEventListener('click', hideShowMenu)
    else
        menuButton.removeEventListener('click', hideShowMenu)
}

if (ipad.matches)
    menuButton.addEventListener('click', hideShowMenu)

ipad.addEventListener('change', validation)

// function openImage(_class){
//     imageSrc = document.getElementsByClassName(_class);
//     const imageShower = document.getElementsByClassName('showImage');
//     imageShower[0].src = imageSrc[0].src;
//     const image = document.getElementById('imageDisplayer');
//     image.style.display = 'block';
// }

// function closeImage(){
//     const image = document.getElementById('imageDisplayer');
//     image.style.display = "none";
// }
