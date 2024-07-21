// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'sound-button'
  const buttons = document.querySelectorAll(".sound-button");

  // Iterate over each button
  buttons.forEach((button) => {
    // Add a click event listener to each button
    button.addEventListener("click", () => {
      // Get the value of the 'data-sound' attribute from the clicked button
      const soundFile = button.getAttribute("data-sound");
      // Play the sound associated with the button
      playSound(soundFile);
    });
  });

  // Function to play a sound file
  function playSound(soundFile) {
    // Create a new Audio object with the path to the sound file
    const audio = new Audio(`sounds/${soundFile}.wav`);
    // Play the sound
    audio.play();
  }
});
