var carteleras = document.querySelectorAll('.cartelera'); // Selecciona las carteleras
var slider = document.getElementById('slider');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var position = 0;
var carteleraWidth = 240;

function redirectTo(page) {
    window.location.href = page;
}

function updateArrows() {
    var maxScroll = (carteleras.length * carteleraWidth) - slider.offsetWidth;
    prev.disabled = position <= 0;
    next.disabled = position >= maxScroll;
}

prev.addEventListener('click', function () {
    if (position > 0) {
        position -= carteleraWidth;
        slider.style.transform = 'translateX(' + -position + 'px)';
    }
    updateArrows();
});

next.addEventListener('click', function () {
    var maxScroll = (carteleras.length * carteleraWidth) - slider.offsetWidth;
    if (position < maxScroll) {
        position += carteleraWidth;
        slider.style.transform = 'translateX(' + -position + 'px)';
    }
    updateArrows();
});



updateArrows();
