
// Set Variables For Register
var nameReg = document.querySelector("#nameRegInput");
var emailReg = document.querySelector("#emailRegInput");
var passReg = document.querySelector("#passRegInput");
var btnReg = document.querySelector("#btnReg");

// Set variables For login
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

function addUser() {
  var newUsers = {
    userName: nameReg.value,
    userEmail: emailReg.value,
    userPass: passReg.value,
  };

  if (isExists(newUsers.userName, newUsers.userEmail)) {
    existInput.removeAttribute("hidden");
    return;
  }
  users.push(newUsers);
  localStorage.setItem("newUsers", JSON.stringify(users));
  clear();
  // displayUsers(users);
  window.location.href = "login.html";
}

function clear() {
  nameReg.value = "";
  emailReg.value = "";
  passReg.value = "";
}

// function displayUsers(arr) {
//   var tableContent = ``;
//   for (var i = 0; i < arr.length; i++) {
//     tableContent += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${arr[i].userName}</td>
//             <td>${arr[i].userEmail}</td>
//             <td>${arr[i].userPass}</td>
//         </tr>
//         `;
//   }
//   tableBody.innerHTML = tableContent;
// }

function isExists(name, email) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].userEmail === email || users[i].userName === name) {
      return true;
    }
  }
  return false;
}

btnReg.addEventListener("click", function () {
  addUser();
  clear();
  // displayUsers();
});



// function loginUser() {
//   var enteredEmail = emailLogin.value;
//   var enteredPass = passLogin.value;

//   console.log("Entered Email:", enteredEmail);
//   console.log("Entered Password:", enteredPass);
//   console.log("Users:", users);

//   var loggedInUser = users.find(function (user) {
//     return (
//       user.userEmail.toLowerCase() === enteredEmail.toLowerCase() &&
//       user.userPass === enteredPass
//     );
//   });

//   if (loggedInUser) {
//     window.location.href = "Home.html";
//   } else {
//     error.removeAttribute("hidden");
//   }
// }

// btnLogin.addEventListener("click", function (event) {
//   event.preventDefault();
//   loginUser();
// });
