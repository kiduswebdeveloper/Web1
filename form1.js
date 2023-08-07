//then lets try to handle the form validation
var el = document.getElementById("registration-form");
el.onsubmit = formSubmitChecker;
function formSubmitChecker(e) {
  
  // Psudo code
  // think like what we went to happen in the registration form
  // declare a variable array, to collect errors

  // CHECK IF the value of the f Name is empty
  // use value property to find the entered value
  // If this is empty, add to the error array
  // What message (add to this to the array)
  // use innerHTML on errorsDisplay
  // Use  getElementById to choose the element

  // CHECK IF the value of the password is less than 5 char
  // use value property to find the entered value
  // If this is less than 5 (use length property), add to the error array
  // What message (message )
  // use innerHTML on errorsDisplay
  // Use  getElementById to choose the element

  // if error is empty submit
  // else
  // Stop the default behavior of the HTML from submitting the form
  // using preventDefault()

  // iterate through the error array and display each message on the errorsDisplay
  //   use innerHTML on errorsDisplay

  // Put elements in variable
  var errors = [];
  // then lets try to handdle the error part as html
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  elErrorsDisplay.innerHTML = "";
  //select element
  var elFirstName = document.getElementsByName("first-name");
  var ellastName = document.getElementsByName("last-name");
  var elPassword = document.getElementsByName("password");
  // Get their values
  var elFirstNameValue = elFirstName[0].value;
  var elPasswordValue = elPassword[0].value;
  var ellastNameValue = ellastName[0].value;
  if (!elFirstNameValue) {
    errors.push("Either First name or lastname field is required");
  } else if (!ellastNameValue) {
    errors.push("Either First name or lastname field is required");
  } else {
    elErrorsDisplay.style.display = "none";
  }
  if (!elPasswordValue) {
    errors.push("Password is empty");
  } else if (elPasswordValue.length < 5) {
    errors.push("Password not strong enough");
  } else {
    elErrorsDisplay.style.display = "none";
  }
  if (errors.length > 0) {
    e.preventDefault(); // Stops the form from submitting
    elErrorsDisplay.style.display = "block";
    for (var i = 0; i < errors.length; i++) {
      elErrorsDisplay.innerHTML += errors[i] + "<br>";
    }
  } else {
    alert("Submitted");
  }
}
