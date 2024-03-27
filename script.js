console.log("Hello");

//let colour = "yellow";

// this function swaps the value of colour between tomato and teal
// then it sets the background of the page to be that colour
// is THIS magic?!
//function changeBG() {
// if (document.body.style.background == "yellow") {
//   colour = "teal";
//} else {
// colour = "yellow";
//}
//document.body.style.backgroundColor = colour;
//}

//let changeInterval = setInterval(changeBG, 4000);

//function stop() {
//  clearInterval(changeInterval);
//}

//🎯 Create an event handler that makes visible a message that is hidden by default

const button = document.getElementById("messagebtn");
const message = document.getElementById("message");

function showMessage() {
  message.classList.remove("hide");

  setTimeout(function () {
    message.classList.add("hide");
  }, 5000);
}

messagebtn.addEventListener("click", showMessage);

//🎯 Use setTimeout to hide the message after 5 seconds

//function threaten() {
//console.log("Long have I waited...");
//}

//setTimeout(threaten, 6000);
