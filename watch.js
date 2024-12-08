const card = document.querySelector('.project-card-one');
const panel = document.querySelector('.info-panel');

card.addEventListener('mouseenter', () => {
    panel.style.right = '0';
});

card.addEventListener('mouseleave', () => {
    panel.style.right = '-100%';
});