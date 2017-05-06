
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var description = document.getElementById("description");
var hasKey = false;

optionTwo.addEventListener ("click", escape);

function escape() {
  if (hasKey === false) {
    description.textContent = "The door is locked.";
  } else {
    description.textContent = "Congratulations! You have escaped.";
  }
}

optionOne.addEventListener ("click", grabKey);

function grabKey () {
  hasKey = true;
  
    description.textContent = "You swiftly grab the shiny key.";
}



