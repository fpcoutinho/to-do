import "./css/reset.css";
import "./css/index.css";
import Default from "./pages/default.js";
import Header from "./pages/header.js";
import Sidenav from "./pages/sidenav.js";
import { checkUserPreference } from "./functions/tema.js";

checkUserPreference();
const main = document.querySelector("main");
main.appendChild(Header());
