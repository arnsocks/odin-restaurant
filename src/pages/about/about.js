import "./about.css";
import JimmyPic from "../../img/Jimmy.jpg";
import JennyPic from "../../img/Jenny.jpg";


export default function AboutDiv() {

  const container = document.createElement('div');
  container.id = "about-div";

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

  // ** CREATE THE HISTORY SECTION **
  const historyCard = document.createElement('div');
  historyCard.classList.add('card', 'history');
  container.appendChild(historyCard);
  const history = document.createElement('h2');
  history.textContent = "Our History";
  historyCard.appendChild(history);

  let p = document.createElement('p');
  p.textContent = "Sea raven--rudd Pacific herring, candiru pipefish collared carpetshark coley. Baikal oilfish mola mola sunfish. Pearlfish chub daggertooth pike conger, minnow banded killifish rock cod yellowfin tuna. Climbing gourami; cutthroat trout, 'longnose whiptail catfish European minnow convict blenny European perch rockweed gunnel cutthroat eel Razorback sucker.' Cherry salmon loach bull trout, Molly Miller yellowtail snapper, man-of-war fish, mummichog. Cherubfish dragon goby convict blenny, California halibut filefish mooneye tope porbeagle shark brown trout barracudina powen.";
  historyCard.appendChild(p);

  p = document.createElement('p');
  p.textContent = "Hillstream loach elver Alaska blackfish, shell-ear snailfish sea catfish prowfish longfin escolar threadfin Indian mul cornetfish. Pacific herring; cutlassfish, gray mullet white marlin alooh white marlin snipefish ilisha. Barracudina common carp ayu cod prickly shark Reef triggerfish riffle dace, glass knifefish duckbill eel bonytongue, 'dojo loach gray mullet.' Pencil catfish yellowfin surgeonfish yellow bass mud catfish pigfish banjo catfish. Atka mackerel Hammerjaw mud minnow sauger minnow giant wels shrimpfish blackchin sturgeon boafish dartfish silverside Blacksmelt tui chub steelhead silver driftfish spiny eel. Stoneroller minnow Black sea bass striped burrfish; hoki denticle herring stream catfish. Shortnose chimaera platyfish barracudina rockfish whale catfish rough scad ling cod saw shark. Archerfish pelagic cod, 'carpsucker chimaera pike characid armorhead catfish elephantnose fish eucla cod medusafish northern anchovy bent-tooth gray eel-catfish Red salmon sailfin silverside swamp-eel.'";
  historyCard.appendChild(p);

 




  return container;
}