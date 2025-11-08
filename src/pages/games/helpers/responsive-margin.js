const container = document.querySelector('.game-container');

function adjustPosition() {
    const offset = -(window.innerWidth * 0.18);

    container.style.top = `${offset}px`;
}
adjustPosition();
window.addEventListener('resize', adjustPosition);
