let open_drawer_btn = document.querySelector('#open-drawer')
let close_drawer_btn = document.querySelector('#close-drawer')
let drawer = document.querySelector('.drawer')

open_drawer_btn.addEventListener('click', () => {
    drawer.style.width = "300px";
    document.querySelector('.order').style.opacity = "1";
});
close_drawer_btn.addEventListener('click', () => {
    drawer.style.width = "0px";
    document.querySelector('.order').style.opacity = "0";
});