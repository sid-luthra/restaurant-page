import './style.css';
import Background from './assets/skulls.jpg';
import { pageLoad } from './pageLoad';
import { goHome } from './homePage';
import { goMenu } from './menuPage';



pageLoad();

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener('click',goHome);

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener('click',goMenu);