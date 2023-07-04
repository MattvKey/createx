
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Убираем прокрутку страницы
}

var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
  }
}

// Переключение на форму регистрации
document.getElementById('switch-to-register').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('login-form').classList.remove('active');
  document.getElementById('register-form').classList.add('active');
  document.getElementById('login-form').reset(); // Сброс значений полей формы входа
});

// Переключение на форму входа
document.getElementById('switch-to-login').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('register-form').classList.remove('active');
  document.getElementById('login-form').classList.add('active');
  document.getElementById('register-form').reset(); // Сброс значений полей формы регистрации
});
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.documentElement.style.overflow = "hidden"; // Убираем прокрутку страницы
}

var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  document.documentElement.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.documentElement.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
  }
}


function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var registerPasswordInput = document.getElementById("register_passwordInput");
  var registerPasswordConfirm = document.getElementById("register_passwordConfirm");

  toggleVisibility(passwordInput);
  toggleVisibility(registerPasswordInput);
  toggleVisibility(registerPasswordConfirm);
}

function toggleVisibility(element) {
  if (element.type === "password") {
    element.type = "text";
  } else {
    element.type = "password";
  }
}

  





