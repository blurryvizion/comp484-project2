// Wait until the page is ready
$(function () {
  // Show the starting values
  checkAndUpdatePetInfoInHtml();

  // Hook up the buttons
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
});

// Pet info object
var pet_info = {
  name: "Michi",
  weight: 10,      // numbers, not strings
  happiness: 10
};

// --- Button functions ---

function clickedTreatButton() {
  // Give a treat: happier & heavier
  pet_info.happiness += 1;
  pet_info.weight += 1;
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Play: much happier, a little lighter
  pet_info.happiness += 2;
  pet_info.weight -= 1;
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Exercise: a bit less happy, lighter
  pet_info.happiness -= 1;
  pet_info.weight -= 2;
  checkAndUpdatePetInfoInHtml();
}

// --- Helper functions ---

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Keep values in a reasonable range
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
  if (pet_info.happiness > 10) {
    pet_info.happiness = 10;
  }
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(p_info.happiness);
}
