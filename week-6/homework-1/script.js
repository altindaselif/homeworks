window.onload = function () {
  // Ask for the user's name using a prompt dialog
  let name = prompt("Adın Nedir?");

  // Update an element on the page
  document.getElementById("myName").textContent = name;

  // Show time when the page loads
  showDateTime();
};

function showDateTime() {
  let now = new Date();

  // Get day, month, and year
  let day = now.getDate();
  let month = now.getMonth() + 1; // Months are zero-indexed, so we add 1
  let year = now.getFullYear();

  // Add leading zero to day and month if they are less than 10
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let dayOfWeek = daysOfWeek[now.getDay()]; // Get the name of the day of the week

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero to hours, minutes, and seconds if they are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format date and time
  let date = day + "/" + month + "/" + year + " " + dayOfWeek;
  let time = hours + ":" + minutes + ":" + seconds;

  // Combine date and time
  let dateTime = date + " " + time;

  // Update the HTML element
  document.getElementById("myClock").innerText = dateTime;

  // Repeat every second
  setTimeout(showDateTime, 1000);
}
