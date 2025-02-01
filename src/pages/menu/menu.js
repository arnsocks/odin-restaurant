import "./menu.css";
import rollPic from "../../img/roll.jpg";
import friesPic from "../../img/fries.jpg";
import shakePic from "../../img/shake.jpg";
import fishPic from "../../img/fish-chips.jpg";

const items = [
  {
    name: "Classic Lobster Roll",
    image: rollPic,
    description: "Our classic Maine lobster roll. Served cold with mayo because we're not monsters like those dillweeds in Connecticut",
  },
  {
    name: "Shoestring Fries",
    image: friesPic,
    description: "They're like good french fries, only cut much much thinner so they don't get any of that fluffy potato-ness that makes fries so good.",
  },
  {
    name: "Strawberry Milkshake",
    image: shakePic,
    description: "It's a strawberry milkshake. You're either allergic or you're going to really like it.",
  },
  {
    name: "Fish & Chips",
    image: fishPic,
    description: "For when you want seafood but are too poor for Lobster.",
  }
]

export default function menuDiv() {
  const container = document.createElement('div');
  container.id = "menu-div";

  const menuCard = document.createElement('div');
  menuCard.classList.add('card', 'menu');
  container.appendChild(menuCard);

  const menuHead = document.createElement('h2');
  menuHead.textContent = "Our Menu";
  menuCard.appendChild(menuHead);

  const menuGridBox = document.createElement('div');
  menuGridBox.classList.add('menu-grid');
  menuCard.appendChild(menuGridBox);
 

  for (const item of items) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-cell');
    menuGridBox.appendChild(menuItem);
    let itemTitle = document.createElement('h3');
    itemTitle.textContent = item.name;
    menuItem.appendChild(itemTitle);
    let itemImg = document.createElement('img');
    itemImg.src = item.image;
    itemImg.classList.add('menu-pic');
    menuItem.appendChild(itemImg);
    let itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;
    itemDesc.classList.add('menu-desc')
    menuItem.appendChild(itemDesc);
  }

  console.log(items);
  return container
}