
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var description = document.getElementById("description");
var hasKey = false;

optionTwo.addEventListener ("click", escape);

function escape() {
  if (hasKey === false) {
    description.textContent = "The door is locked.";
  } else {
    description.textContent = "As you open the door, you begin to contemplate the meaning of life.  You hear noises in the hallway.";
  }
}

optionOne.addEventListener ("click", grabKey);

function grabKey () {
  hasKey = true;

    description.textContent = "You swiftly grab the shiny key.";
}
