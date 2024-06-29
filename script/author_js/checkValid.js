
export function checkValid(target) {
  //타겟의 유형을 검사한다.
  
  const type = target.name;
  const value = target.value;

  if(type == 'email'){
    return emailValid(value);
  }
  if(type == 'password'){
    return passwordValid(value);
  }
  if(type == 'password-repeat'){
    return passwordRepeatValid(value);
  }
  if(type == 'nickname'){
    return nicknameValid(value);
  }
}

function emailValid(value){
  //이메일 정규 표현식이 맞으면 ture
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailRegex.test(value);
  return emailRegex.test(value);
}

function passwordValid(value){
// 8글자 이상이면 ture
  return value.length >= 8;
}

function passwordRepeatValid(value){
// password 랑 값이 같으면
  const password = document.querySelector('input[name="password"]');
  console.log(password.value === value);
  return password.value === value;
}

function nicknameValid(value){
// 값이 있으면
  return value !== '';

}