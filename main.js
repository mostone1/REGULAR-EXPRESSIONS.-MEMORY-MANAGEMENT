//task 1

function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      return "String starts with uppercase character";
    } else {
      return "String does not start with uppercase character";
    }
  }
  
  console.log(upperCase('regexp'));
  console.log(upperCase('RegExp'));

//task 2

function checkEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  console.log(checkEmail("Qmail2@gmail.com"));

  //task 3

  function swapSubstrings(text, substring1, substring2) {
    let regex = new RegExp("(" + substring1 + ").*?(" + substring2 + ")", "g");
    let swappedText = text.replace(regex, "$2, $1");
    return swappedText;
  }
  
  let inputString = "Java Script";
  let outputString = swapSubstrings(inputString, "Java", "Script");
  console.log(outputString);

//task 4

function validateCreditCardNumber(cardNumber) {
    let regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
  }
  
  console.log(validateCreditCardNumber("9999-9999-9999-9999"));

//task 5

function checkEmail(email) {
    let regex = /^[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  
  console.log(checkEmail('my_mail@gmail.com'));
  console.log(checkEmail('#my_mail@gmail.com'));
  console.log(checkEmail('my_ma--il@gmail.com'));

  //task 6

  function checkLogin(login) {
    let regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    let numbers = login.match(/\d+(\.\d+)?/g);
    
    if (regex.test(login)) {
      if (numbers) {
        return numbers;
      } else {
        return "No numbers found.";
      }
    } else {
      return false;
    }
  }
  
  console.log(checkLogin('ee1.1ret3'));
  console.log(checkLogin('ee1*1ret3'));

  //task 7

  let form = document.getElementById('myForm');
  let fullNameInput = document.getElementById('fullName');
  let emailInput = document.getElementById('email');
  let phoneInput = document.getElementById('phone');
  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('confirmPassword');
  let agreementCheckbox = document.getElementById('flexCheckDefault');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!validateFullName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateConfirmPassword() || !validateAgreement()) {
          return;
      }
      form.submit();
  });

  function validateFullName() {
    if (fullNameInput.value.trim() === '') {
        fullNameInput.classList.add('is-invalid');
        return false;
    } else {
        fullNameInput.classList.remove('is-invalid');
        return true;
    }
}

function validateEmail() {
    let email = emailInput.value.trim();
    let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email === '' || !emailPattern.test(email)) {
        emailInput.classList.add('is-invalid');
        return false;
    } else {
        emailInput.classList.remove('is-invalid');
        return true;
    }
}

function validatePhone() {
    let phone = phoneInput.value.trim();
    let phonePattern = /^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$/;

    if (phone === '' || !phonePattern.test(phone)) {
        phoneInput.classList.add('is-invalid');
        return false;
    } else {
        phoneInput.classList.remove('is-invalid');
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('is-invalid');
        return false;
    } else {
        passwordInput.classList.remove('is-invalid');
        return true;
    }
}

function validateConfirmPassword() {
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();

    if (confirmPassword === '' || confirmPassword !== password) {
        confirmPasswordInput.classList.add('is-invalid');
        return false;
    } else {
        confirmPasswordInput.classList.remove('is-invalid');
        return true;
    }
}

function validateAgreement() {
    if (!agreementCheckbox.checked) {
        agreementCheckbox.classList.add('is-invalid');
        return false;
    } else {
        agreementCheckbox.classList.remove('is-invalid');
        return true;
    }
}