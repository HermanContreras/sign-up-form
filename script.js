function pwChecker(){
  let pw        = document.querySelector('#password'),
      confirmPw = document.querySelector('#confirmPassword');

  alert(pw.value === confirmPw.value ? true : false);
}