document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sound-button");
  const keyToSoundMap = {};

  buttons.forEach((button) => {
    const soundFile = button.getAttribute("data-sound");
    const key = button.getAttribute("data-key");
    keyToSoundMap[key] = button;

    // Add click event listener to each button
    button.addEventListener("click", () => {
      playSound(soundFile);
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 200); // Remove 'active' class after 200ms
    });
  });

  function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}.wav`);
    audio.play();
  }

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (keyToSoundMap[key]) {
      const button = keyToSoundMap[key];
      playSound(button.getAttribute("data-sound"));
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 200); // Remove 'active' class after 200ms
    }
  });
});
