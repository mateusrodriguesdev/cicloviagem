const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
const texts = [
    "Hello",        // English
    "你好",         // Chinese
    "Hola",         // Spanish
    "こんにちは",   // Japanese
    "Olá",          // Portuguese
    "Hallo",        // German
    "مرحبا",        // Arabic
    "Bonjour",      // French
    "Здравствуйте", // Russian
    "안녕하세요"    // Korean
];

let currentIndex = 0;
const loadingTextElement = document.getElementById('loadingText');

function changeText() {
    loadingTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

function hidePreloading() {
    document.getElementById('preloading').classList.add('hidden');
    document.getElementById('main-content').style.display = 'flex';
}

setInterval(changeText, 200); //1000 = 1 segundo
// Simulate content loading
setTimeout(hidePreloading, 1800); // 10000 = 10 segundos

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
