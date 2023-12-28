// home.js

document.addEventListener("DOMContentLoaded", function () {
  var usernameElement = document.getElementById("username");
  var logoutButton = document.querySelector(".btn-logout");

  var username = localStorage.getItem("loggedInUser");

  if (username) {
    usernameElement.textContent = "Welcome " + username;

    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        // Remove the user information from local storage
        localStorage.removeItem("loggedInUser");
        // Redirect to the login page
        window.location.href = "Login.html";
      });
    }
  } else {
    // Redirect to the login page if the user is not logged in
    window.location.href = "Login.html";
  }
});
