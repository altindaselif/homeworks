document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'sound-button'
  const buttons = document.querySelectorAll(".sound-button");

  // Create a map to associate keys with button elements
  const keyToSoundMap = {};

  // Populate the map with key-to-button associations
  buttons.forEach((button) => {
    const soundFile = button.getAttribute("data-sound");
    const key = button.getAttribute("data-key");
    keyToSoundMap[key] = button;

    // Add a click event listener to each button
    button.addEventListener("click", () => {
      // Play the sound associated with the button
      playSound(soundFile);

      // Add 'active' class to the button to trigger visual feedback
      button.classList.add("active");

      // Remove 'active' class after 200ms to reset the visual effect
      setTimeout(() => button.classList.remove("active"), 200);
    });
  });

  // Function to play a sound file
  function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}.wav`);
    audio.play();
  }

  // Add a keydown event listener to the document
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase(); // Get the key pressed and convert to lowercase

    // Check if the key is mapped to a button
    if (keyToSoundMap[key]) {
      const button = keyToSoundMap[key];

      // Play the sound associated with the button
      playSound(button.getAttribute("data-sound"));

      // Add 'active' class to the button to trigger visual feedback
      button.classList.add("active");

      // Remove 'active' class after 200ms to reset the visual effect
      setTimeout(() => button.classList.remove("active"), 200);
    }
  });
});
