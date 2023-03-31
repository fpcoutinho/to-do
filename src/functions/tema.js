const checkUserPreference = () => {
  const root = document.documentElement;
  const userPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  root.className = userPreference;
};

const switchTema = (botao) => {
  const root = document.documentElement;
  const newTheme = root.className === "light" ? "dark" : "light";
  const icone = newTheme === "dark" ? "light" : "dark";

  root.className = newTheme;
  botao.innerHTML = `<span class="material-symbols-outlined" id="icone-tema">${icone}_mode</span>`;
};

export { switchTema, checkUserPreference };
