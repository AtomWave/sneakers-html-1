import { createBurgerMenu } from "./modules/burger-menu.js";
import { auth } from "./modules/auth/auth.js";
// import { data } from "./data/data.js";

document.addEventListener("DOMContentLoaded", () => {
  // setTimeout(() => {
  //   data.map((el) => { return el })
  // }, 2000);
  createBurgerMenu();
  auth();
})
