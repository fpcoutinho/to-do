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
const itemFactory = (name, detalhes, data, prioridade) => {
  let done = false;
  let id = new Date().getTime();

  const toHtml = () => {
    const html = document.createElement("div");
    html.classList.add("item-container");
    html.setAttribute("id", getId());
    if (getDone()) html.classList.add("done");
    const nome = document.createElement("p");
    nome.classList.add("nomeItem");
    nome.textContent = name;

    const checkDone = document.createElement("button");
    checkDone.classList.add("checkDone");
    checkDone.innerHTML = `<span class="material-icons">check_circle</span>`;

    const detalhesItem = document.createElement("button");
    detalhesItem.classList.add("detalhesItem");
    detalhesItem.innerHTML = `<span class="material-icons">info</span>`;

    const data = document.createElement("p");
    data.classList.add("dataItem");
    data.textContent = getData();

    const editar = document.createElement("button");
    editar.classList.add("editarItem");
    editar.innerHTML = `<span class="material-icons">edit</span>`;

    const excluir = document.createElement("button");
    excluir.classList.add("excluirItem");
    excluir.innerHTML = `<span class="material-icons">remove_circle</span>`;

    html.appendChild(checkDone);
    html.appendChild(nome);
    html.appendChild(detalhesItem);
    html.appendChild(data);
    html.appendChild(editar);
    html.appendChild(excluir);
    return html;
  };
  const getDone = () => done;
  const getName = () => name;
  const getData = () => data;
  const getId = () => id;
  const getDetalhes = () => detalhes;
  const getPrioridade = () => prioridade;

  //seters
  const toggleDone = () => (done ? (done = false) : (done = true));
  const setName = (value) => (name = value);
  const setData = (value) => (data = value);
  const setDetalhes = (value) => (detalhes = value);
  const setPrioridade = (value) => (prioridade = value);

  return {
    toHtml,
    getName,
    getData,
    getDone,
    toggleDone,
    getId,
    getDetalhes,
    getPrioridade,
    setName,
    setData,
    setDetalhes,
    setPrioridade,
  };
};

export { lista, itemFactory };
