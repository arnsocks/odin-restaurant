import "./styles.css";
import HomeDiv from "./pages/home/home.js";
import MenuDiv from "./pages/menu/menu.js";
import AboutDiv from "./pages/about/about.js";

console.log('This is a wobbery!');

const contentDiv = document.querySelector("#content");
const nav = document.querySelector('nav');
// console.log('contentDiv: ' + contentDiv);

const loadContent = (component) => {
  contentDiv.textContent = '';
  contentDiv.appendChild(component);
};

nav.addEventListener("click", (e) => {
  // alert(`You click the ${e.target.id} button`);
  switch(e.target.id) {
    case "home-button":
      loadContent(HomeDiv());
      break;
    case "menu-button":
      loadContent(MenuDiv());
      break;
    case "about-button":
      loadContent(AboutDiv());
  }
})

//Initial Page Load
loadContent(HomeDiv());