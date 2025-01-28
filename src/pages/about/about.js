import "./about.css"

export default function AboutDiv() {

  const container = document.createElement('div');
  container.className = 'about-test';
  
  container.textContent = 'THIS IS THE ABOUT PAGE';

  return container;
}