$(document).ready(function() {
  $("#saveHyperfixation").on("click", function() {
    let statusText = underConstruction("not ready");
    $("#saveHyperfixation").text("not yet working").prop("disabled", true);
  });

  function underConstruction(status) {
    return "not yet ready";
  }
});

document.body.style.backgroundColor = "#FFFF99";

$(document).ready(function() {
  let loggedIn = false;
  let userName = "";

  // Handle login form submission
  $("#loginForm").on("submit", function(e) {
    e.preventDefault();

    userName = $("#username").val();
    if (userName.trim() !== "") {
      $("#loginButton").text(`Logout (${userName})`);
      $("#loginModal").modal('hide');
      loggedIn = true;
    }
  });

  // Toggle login/logout
  $("#loginButton").on("click", function() {
    if (loggedIn) {
      loggedIn = false;
      userName = "";
      $("#loginButton").text("Login");
    }
  });
});
