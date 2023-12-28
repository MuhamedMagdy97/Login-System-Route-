var emailLogin = document.querySelector("#emailLoginInput");
var passLogin = document.querySelector("#passLoginInput");
var btnLogin = document.querySelector("#btnLogin");
var tableBody = document.querySelector("#tableBody");
var existInput = document.querySelector("#existInput");
var error = document.querySelector("#error");

var users;

// Register
if (localStorage.getItem("newUsers")) {
  users = JSON.parse(localStorage.getItem("newUsers"));
  // displayUsers(users);
} else {
  users = [];
}

// Login

function loginUser() {
  var enteredEmail = emailLogin.value;
  var enteredPass = passLogin.value;

  console.log("Entered Email:", enteredEmail);
  console.log("Entered Password:", enteredPass);
  console.log("Users:", users);

  var loggedInUser = users.find(function (user) {
    return (
      user.userEmail.toLowerCase() === enteredEmail.toLowerCase() &&
      user.userPass === enteredPass
    );
  });

  if (loggedInUser) {
     localStorage.setItem("loggedInUser", loggedInUser.userName);
    window.location.href = "Home.html";
  } else {
    error.removeAttribute("hidden");
  }
}

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  loginUser();
});
