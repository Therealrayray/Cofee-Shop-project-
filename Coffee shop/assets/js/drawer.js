let open_drawer_btn = document.querySelector('#open-drawer')
let close_drawer_btn = document.querySelector('#close-drawer')
let drawer = document.querySelector('.drawer')

open_drawer_btn.addEventListener('click', () => {
    drawer.style.display = "flex";
});
close_drawer_btn.addEventListener('click', () => {
    drawer.style.display = "none";
});