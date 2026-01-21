let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'active');
    console.log("Dark mode enabled");
}
const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', 'null');
    console.log("Dark mode disabled");
}

if (darkMode === "active") enableDarkMode();

themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})