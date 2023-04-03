import "../css/sidenav.css";

const sidenav = () => {
  const html = document.createElement("div");
  html.classList.add("sidenav");

  const inbox = document.createElement("div");
  inbox.classList.add("sidenav-item");
  inbox.setAttribute("id", "inbox");
  inbox.innerHTML = `<span class="material-symbols-outlined">inbox</span> Caixa de Entrada`;
  html.appendChild(inbox);

  const hoje = document.createElement("div");
  hoje.classList.add("sidenav-item");
  hoje.setAttribute("id", "hoje");
  hoje.innerHTML = `<span class="material-symbols-outlined">today</span> Hoje`;
  html.appendChild(hoje);

  const semana = document.createElement("div");
  semana.classList.add("sidenav-item");
  semana.setAttribute("id", "semana");
  semana.innerHTML = `<span class="material-symbols-outlined">calendar_today</span> Esta semana`;
  html.appendChild(semana);

  const favoritos = document.createElement("div");
  favoritos.classList.add("sidenav-item");
  favoritos.setAttribute("id", "favoritos");
  favoritos.innerHTML = `<span class="material-symbols-outlined">star</span> Favoritos`;
  html.appendChild(favoritos);

  const projetos = document.createElement("div");
  projetos.classList.add("sidenav-dropdown");
  projetos.setAttribute("id", "projetos");
  projetos.innerHTML = `<span class="material-symbols-outlined">folder</span> Projetos`;
  html.appendChild(projetos);

  return html;
};

export default sidenav;
