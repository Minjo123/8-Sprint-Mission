import {
  createErrorMessage,
  deleteErrorMessage,
} from "./author_js/errorMessage.js";
import { activeBtnByInputsValid } from "./author_js/activeBtnByInputsValid.js";
import { checkValid } from "./author_js/checkValid.js";

const loginForm = document.querySelector(".login-form");
const inputs = document.querySelectorAll(`.login-form input`);
const button = document.querySelector(".login-form button");

function inputManager(e) {
  const target = e.target;
  const valid = checkValid(target);
  console.log("유효성검사 : " + valid);

  if (valid) {
    target.classList.remove("wrong-value");
    deleteErrorMessage(target, valid);
    activeBtnByInputsValid(button, inputs);
    return;
  }

  target.classList.add("wrong-value");
  createErrorMessage(target, valid);
}

loginForm.addEventListener("focusout", inputManager);
