import "./about.css";
import JimmyPic from "../../img/Jimmy.jpg";
import JennyPic from "../../img/Jenny.jpg";


export default function AboutDiv() {

  const container = document.createElement('div');
  container.id = "about-div";
  
  const historyCard = document.createElement('div');
  historyCard.classList.add('card', 'history');
  container.appendChild(historyCard);

  // ** CREATE THE HISTORY SECTION **
  const history = document.createElement('h2');
  history.textContent = "Our History";
  historyCard.appendChild(history);

  let p = document.createElement('p');
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta odit velit nihil nobis, doloribus suscipit rerum obcaecati at perferendis, doloremque, repellat accusantium blanditiis! Itaque repudiandae maxime ratione? Nam, molestiae.";
  historyCard.appendChild(p);

  p = document.createElement('p');
  p.textContent = "This is another, totally unrelated paragraph - but made with the same createElement call. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta odit velit nihil nobis, doloribus suscipit rerum obcaecati at perferendis, doloremque, repellat accusantium blanditiis! Itaque repudiandae maxime ratione? Nam, molestiae.";
  historyCard.appendChild(p);

  // ** CREATE THE PEOPLE SECTION **
  const peopleDiv = document.createElement('div');
  peopleDiv.classList.add('card', 'people');
  container.appendChild(peopleDiv);
  const people = document.createElement('h2');
  people.textContent = "Our People";
  peopleDiv.appendChild(people);

  const peopleGridBox = document.createElement('div');
  peopleGridBox.classList.add('people-grid');
  peopleDiv.appendChild(peopleGridBox);

  // Create first person
  const person1 = document.createElement('div');
  person1.classList.add('person-cell');
  peopleGridBox.appendChild(person1);
  let personName = document.createElement('h3');
  personName.textContent = "Jimmy";
  person1.appendChild(personName);
  let personPic = document.createElement('img');
  personPic.classList.add('profile-pic');
  personPic.src = JimmyPic;
  person1.appendChild(personPic);
  let personBio = document.createElement('p');
  personBio.textContent = "Jimmy is a person who does some things at our shop. He was born at some time and in some place. Now he is here and he couldn't be happier.";
  person1.appendChild(personBio);

  // Create second person
  const person2 = document.createElement('div');
  person2.classList.add('person-cell');
  peopleGridBox.appendChild(person2);
  personName = document.createElement('h3');
  personName.textContent = "Jenny";
  person2.appendChild(personName);
  personPic = document.createElement('img');
  personPic.classList.add('profile-pic');
  personPic.src = JennyPic;
  person2.appendChild(personPic);
  personBio = document.createElement('p');
  personBio.textContent = "Jenny is another person. She doesn't really do anything actually but she was assigned to this group project so she's still going to get credit for it. Thanks Jenny!";
  person2.appendChild(personBio);




  return container;
}