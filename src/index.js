document.querySelector(".botao-tema").addEventListener("click", switchTheme);
function switchTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    const botao = newTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    this.innerHTML = `<span class="material-icons" id="icone-tema">${botao}_mode</span>${botao} mode`;
}