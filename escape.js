
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var description = document.getElementById("description");
var hasKey = false;

optionTwo.addEventListener ("click", escape);

function escape() {
  if (hasKey === false) {
    description.textContent = "The door is locked.";
  } else {
    description.textContent = "Sparks fly from the shiny key as you unlock the door. As you open the door you slowly begin to contemplate the meaning life.  Suddenly, you hear noises in the hallway.";
  }
}

optionOne.addEventListener ("click", grabKey);

function grabKey () {
  hasKey = true;

    description.textContent = "You swiftly grab the shiny key.";
}
