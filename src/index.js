import "./css/reset.css";
import "./css/index.css";
import Default from "./pages/default.js";
import Header from "./pages/header.js";
import Sidenav from "./pages/sidenav.js";
import { toggleNav } from "./functions/togglenav";
import { checkUserPreference } from "./functions/tema.js";
import { lista, itemFactory } from "./functions/tasks.js";

checkUserPreference();
const main = document.querySelector("main");
main.appendChild(Header());
main.appendChild(Sidenav());
//main.appendChild(Default());

const sidenav = document.querySelector(".sidenav");
const menuBtn = document.querySelector("#icone-menu");
menuBtn.addEventListener("click", () => {
  toggleNav(sidenav);
});

const addBtn = document.querySelector("#icone-add");
addBtn.addEventListener("click", () => {
  console.log("add!");
});
