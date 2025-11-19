// Run after DOM is ready
$(function () {
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);
});

// Pet object
var pet_info = {
  name: "Michi",
  weight: 10,
  happiness: 10,
  energy: 7
};

// Treat button
function clickedTreatButton() {
  pet_info.happiness += 1;
  pet_info.weight += 1;

  showPetMessage("Michi chirps happily after the seeds!");
  checkAndUpdatePetInfoInHtml();
}

// Play button
function clickedPlayButton() {
  pet_info.happiness += 2;
  pet_info.weight -= 1;
  pet_info.energy -= 2;

  showPetMessage("Michi shreds the cardboard box with joy!");
  checkAndUpdatePetInfoInHtml();
}

// Exercise button
function clickedExerciseButton() {
  pet_info.happiness -= 1;
  pet_info.weight -= 2;
  pet_info.energy += 1;

  showPetMessage("Michi flies laps around the house!");
  checkAndUpdatePetInfoInHtml();
}

// Nap button
function clickedNapButton() {
  pet_info.energy += 3;
  pet_info.happiness += 1;

  showPetMessage("Michi takes a cozy nap on your shoulder.");
  checkAndUpdatePetInfoInHtml();
}

// Update and clamp stats
function checkAndUpdatePetInfoInHtml() {
  if (pet_info.weight < 0) pet_info.weight = 0;
  if (pet_info.happiness < 0) pet_info.happiness = 0;
  if (pet_info.energy < 0) pet_info.energy = 0;

  if (pet_info.happiness > 10) pet_info.happiness = 10;
  if (pet_info.energy > 10) pet_info.energy = 10;

  updatePetInfoInHtml();
}

// Write stats to HTML
function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(pet_info.energy);
}

// Show message with jQuery effects
function showPetMessage(message) {
  var $msg = $('#pet-message');
  $msg.text(message);

  // fadeIn and fadeOut are the two new jQuery methods
  $msg.fadeIn(200);
  setTimeout(function () {
    $msg.fadeOut(400);
  }, 1000);
}
