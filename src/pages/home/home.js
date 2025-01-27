import "./home.css"
import logoImg from "../../img/lobbo_logo.png";

export default function HomeDiv() {
  const HoursList = {
    sunday: "Sunday: Closed",
    monday: "Monday: 10-4",
    tuesday: "Tuesday: 10-4",
    wednesday: "Wednesday: 10-4",
    thursday: "Thursday: 10-4",
    friday: "Friday: 10-10",
    saturday: "Saturday: 10-10"
  }
  const container = document.createElement('div');

  const logo = document.createElement('img');
  logo.src=logoImg;
  logo.id="logo";
  container.appendChild(logo);

  const greeting = document.createElement('h2');
  greeting.className = "greeting";
  greeting.textContent = "Now Open!";
  container.appendChild(greeting);

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('card', 'hours');
  container.appendChild(hoursDiv);
  const hours = document.createElement('h3');
  hours.textContent = 'Hours';
  hoursDiv.appendChild(hours);

  // Add the hours Dynamically from the HoursList
  for (const day in HoursList) {
    const newDay = document.createElement('p');
    newDay.textContent = HoursList[day];
    hoursDiv.appendChild(newDay);
  }

  return container;
}