// Import stylesheets
import './style.css';

// import { getGroups, getMetrics } from './metaList';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// const groups = getGroups('NODE', 'Overview');
// const metrics = getMetrics(groups);
// console.log('getGroups==>', groups);
// console.log('getGroups==>', metrics);

const showTimes = [
  {
    status: 1,
    text: '10:00',
  },
  {
    status: 1,
    text: '12:00',
  },
  {
    status: 1,
    text: '14:00',
  },
];
