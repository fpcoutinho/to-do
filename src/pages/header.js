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
  const logoMenu = document.createElement("div");
  logoMenu.classList.add("logo-menu");
  const logo = document.createElement("img");
  logo.setAttribute("src", logoImg);
  logo.setAttribute("alt", "logo");
  const openSideNav = document.createElement("button");
  openSideNav.innerHTML = `<span class="material-symbols-outlined" id="icone-menu">menu</span>`;
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Pesquisar");
  const searchIcon = document.createElement("button");
  searchIcon.setAttribute("type", "submit");
  searchIcon.setAttribute("id", "btn-search");
  searchIcon.innerHTML = `<span class="material-symbols-outlined">search</span>`;
  searchBar.appendChild(searchInput);
  searchBar.appendChild(searchIcon);
  logoMenu.appendChild(openSideNav);
  logoMenu.appendChild(logo);
  logoMenu.appendChild(searchBar);
  html.appendChild(logoMenu);

  const headerMenu = document.createElement("div");
  headerMenu.classList.add("header-menu");
  const botaoAdd = document.createElement("button");
  botaoAdd.innerHTML = `<span class="material-symbols-outlined" id="icone-add">add</span>`;
  const botaoNotificacao = document.createElement("button");
  botaoNotificacao.innerHTML = `<span class="material-symbols-outlined" id="icone-notificacao">notifications</span>`;
  const botaoPerfil = document.createElement("button");
  botaoPerfil.innerHTML = `<span class="material-symbols-outlined" id="icone-perfil">person</span>`;

  headerMenu.appendChild(botaoTema);
  headerMenu.appendChild(botaoAdd);
  headerMenu.appendChild(botaoNotificacao);
  headerMenu.appendChild(botaoPerfil);

  html.appendChild(logoMenu);
  html.appendChild(headerMenu);

  return html;
};

export default header;
