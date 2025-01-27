import "./styles.css";
import HomeDiv from "./pages/home/home.js";

console.log('This is a wobbery!');

const contentDiv = document.querySelector("#content");
// console.log('contentDiv: ' + contentDiv);

const loadContent = (component) => {
  contentDiv.textContent = '';
  contentDiv.appendChild(component);

};

//Initial Page Load
loadContent(HomeDiv());