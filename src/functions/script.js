//modulo de lista de items
const lista = (() => {
  const lista = [];

  const add = (item) => {
    lista.unshift(item);
  };
  const remove = (itemId) => {
    return lista.splice(lista.indexOf(findItem(itemId)), 1)[0];
  };
  const moveToEnd = (itemId) => {
    const item = remove(itemId);
    lista.push(item);
  };

  const getLista = () => lista;

  //getlista by id
  const findItem = (id) => {
    return lista.find((item) => item.getId() === id);
  };

  const toHtml = () => {
    //return join de todos os itens em html
    const html = document.createElement("div");
    html.classList.add("lista-container");

    lista.map((item) => {
      html.appendChild(item.toHtml());
    });

    return html;
  };
  return {
    add,
    remove,
    toHtml,
    getLista,
    findItem,
    moveToEnd,
  };
})();

// factory de item
const itemFactory = (name, quantity) => {
  let done = false;
  let id = 0;
  if (!(lista.getLista().length === 0))
    id = lista.findItem(lista.getLista().length - 1).getId() + 1;

  if (quantity < 1) quantity = 1;

  const toHtml = () => {
    const html = document.createElement("div");
    html.classList.add("item-container");
    html.setAttribute("id", getId());
    if (getDone()) html.classList.add("done");
    html.textContent = `${getQuantity()}× ${getName()}`;
    html.addEventListener("click", () => {
      if (!getDone()) {
        html.classList.add("done");
        lista.moveToEnd(getId());
      } else {
        html.classList.remove("done");
      }
      toggleDone();
      refreshMain();
    });
    const excluir = document.createElement("button");
    excluir.classList.add("excluirItem");
    excluir.innerHTML = `<span class="material-icons">remove_circle</span>`;
    excluir.addEventListener("click", () => {
      lista.remove(getId());
      refreshMain();
    });
    html.appendChild(excluir);
    return html;
  };
  const getDone = () => done;
  const toggleDone = () => {
    done ? (done = false) : (done = true);
  };
  const getName = () => name;
  const getQuantity = () => quantity;
  const getId = () => id;

  return { toHtml, getName, getQuantity, getDone, toggleDone, getId };
};

const main = document.querySelector("main");
const container = document.querySelector(".container");
const addItem = document.querySelector(".addItem");
const formItem = document.querySelector(".formItem");

formItem.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nome").value;
  const quantity = document.getElementById("quantidade").value;
  const item = itemFactory(name, quantity);
  lista.add(item);
  refreshMain();
  formItem.reset();
});

//refresh main
const refreshMain = () => {
  container.innerHTML = "";
  container.appendChild(lista.toHtml());
};

//checa tema preferido do sistema do usuário
function checkUserTheme() {
  const root = document.documentElement;
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (prefersDarkMode) {
    root.className = "dark";
  } else {
    root.className = "light";
  }
}

window.onload = () => {
  checkUserTheme();
};
