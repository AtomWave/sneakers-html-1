import { createBurgerMenu } from "./modules/burger-menu.js";
import { auth } from "./modules/auth/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  createBurgerMenu();
  auth();
})
