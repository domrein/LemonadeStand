// game variables
var chanceOfRain;
var cash;
var day;
var crowd;

// GUI variables
var textDiv = document.getElementById("text");
var dayDiv = document.getElementById("day");
var cashDiv = document.getElementById("cash");

init();

// initialize variables
function init() {
  chanceOfRain = 0;
  cash = 0;
  day = 0;
  crowd = 0;
  
  updateText("Welcome to Lemonade Stand");
  updateCash(20);
  updateDay(0);
}



displayDay();

function updateText(text) {
  textDiv.innerHTML = text;
}

function updateCash(changeAmount) {
  cash += changeAmount;
  cashDiv.innerHTML = "Cash: $" + cash;
}

function updateDay(changeAmount) {
  day += changeAmount;
  dayDiv.innerHTML = "Day: " + day + 1;
}

function displayDay() {
}

function advanceDay() { 
}
