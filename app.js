const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'noir') {
        body.setAttribute('data-theme', 'canvas');
    } else {
        body.setAttribute('data-theme', 'noir');
    }
});
