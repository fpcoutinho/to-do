import { switchTema, checkUserPreference } from "../functions/tema.js";
import "../css/header.css";
import logoImg from "../assets/icons/logo.png";

const header = () => {
  const botaoTema = document.createElement("button");

  botaoTema.classList.add("botao-tema");
  const userPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  switch (userPreference) {
    case "dark":
      botaoTema.innerHTML = `<span class="material-symbols-outlined" id="icone-tema">light_mode</span>`;
      break;
    case "light":
      botaoTema.innerHTML = `<span class="material-symbols-outlined" id="icone-tema">dark_mode</span>`;
      break;
  }
  botaoTema.addEventListener("click", () => {
    switchTema(botaoTema);
  });

  const html = document.createElement("header");
  const logo = document.createElement("img");
  logo.setAttribute("src", logoImg);
  logo.setAttribute("alt", "logo");
  logo.setAttribute("width", "50rem");

  html.appendChild(logo);
  html.appendChild(botaoTema);

  return html;
};

export default header;
