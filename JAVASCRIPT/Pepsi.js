function imgSlider(anything) {
    document.querySelector('.HomeImg').src = anything;
}
function changeBgColor(color) {
    const sec = document.querySelector('.Pepsi');
    sec.style.background = color;
}
function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}