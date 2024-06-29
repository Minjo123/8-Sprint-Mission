import { checkValid } from "./checkValid.js";

export function activeBtnByInputsValid(button, inputs) {

  const isAllInputValid = [...inputs].every(input => checkValid(input));
  button.classList.toggle('enabled', isAllInputValid);

  console.log(isAllInputValid);
  if(isAllInputValid){
    button.disabled = false;
    console.log(button.disabled);
  }else{
    button.disabled = true;
    console.log(button.disabled);
  }
} 