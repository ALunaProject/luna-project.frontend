let currentIndex = 0;
const mainImages = document.querySelectorAll('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnails-wrapper img');
const indicators = document.querySelectorAll('.indicator');
const totalImages = mainImages.length;

function updateCarousel(index) {
    mainImages.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    mainImages[index].classList.add('active');
    indicators[index].classList.add('active');

    if (thumbnails[index]) {
        thumbnails[index].classList.add('active');
        thumbnails[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    currentIndex = index;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel(newIndex);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % totalImages;
    updateCarousel(newIndex);
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateCarousel(index);
    });
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        updateCarousel(index);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.querySelector('.prev-btn').click();
    } else if (e.key === 'ArrowRight') {
        document.querySelector('.next-btn').click();
    }
});