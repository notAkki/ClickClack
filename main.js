//Global Variables
let started = false; //Switch to check if the test has begun or not

let origCount = 10; //Overall test time
let count = origCount; //Time Remaining

let clicks = 0; //Clicks done
let clicksDone = "___"; //Output for clicks done

let cps = "____";
let upTime = 0;

let timerHelper; //Setinterval method for the timer
let cpsHelper;

document.getElementById("timer").innerHTML = count; //Accessor for timer
document.getElementById("clicks").innerHTML = clicksDone; //Accessor for clicks
document.getElementById("cps").innerHTML = cps; //Accessor for cps

//Timer runs down to 0 from origCount with if statement to determine when to end the test
function timer() {
  count--;
  document.getElementById("timer").innerHTML = count;
  if (count <= 0) {
    end();
  }
}

function getCps() {
  upTime += 0.01;
  cps = (clicks / upTime).toFixed(2);
  document.getElementById("cps").innerHTML = cps;
}

//This begins the test after button press. It sets the switch, clicks, and begins the timer
function start() {
  started = true;
  clicks = 1;
  clicksDone = 1;
  document.getElementById("clicks").innerHTML = clicksDone;

  timerHelper = setInterval(timer, 1000);
  cpsHelper = setInterval(getCps, 10);
}

//When the timer reaches 0, resets all the value, prepares all the data, and runs the modal
function end() {
  document.getElementById("finalCPS").innerHTML = (clicks / origCount).toFixed(
    2
  );
  document.getElementById("finalClicks").innerHTML = clicks;
  document.getElementById("doneTime").innerHTML = origCount;

  clearInterval(timerHelper);
  clearInterval(cpsHelper);
  clicksDone = "___";
  count = origCount;
  upTime = 0;
  started = false;
  cps = "____";

  //Accessors for final data
  document.getElementById("timer").innerHTML = count;
  document.getElementById("clicks").innerHTML = clicksDone;
  document.getElementById("cps").innerHTML = cps;

  clicks = 0;

  //runs modal using jQuery
  $("#resultsModal").modal();
}

//Checks for button press and checks the switch. If the test is started, then it only increments
//the clicks value, otherwise, it begins the test through the start() method.
document.getElementById("button").onclick = function () {
  if (started) {
    clicks++;
    clicksDone = clicks;
    document.getElementById("clicks").innerHTML = clicksDone;
  } else {
    start();
  }
};

// Sets the test time depending on what button the user presses in the time selector modal
document.getElementById("1sec").onclick = function () {
  origCount = 1;
  count = origCount;
  document.getElementById("timer").innerHTML = count; //Accessor for timer
};

document.getElementById("5sec").onclick = function () {
  origCount = 5;
  count = origCount;
  document.getElementById("timer").innerHTML = count; //Accessor for timer
};

document.getElementById("10sec").onclick = function () {
  origCount = 10;
  count = origCount;
  document.getElementById("timer").innerHTML = count; //Accessor for timer
};

document.getElementById("60sec").onclick = function () {
  origCount = 60;
  count = origCount;
  document.getElementById("timer").innerHTML = count; //Accessor for timer
};
