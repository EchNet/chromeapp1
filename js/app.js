var theButton = document.querySelector('#the_button');
var theSpan = document.querySelector("#the_span");

function errorHandler(e) {
  console.error(e);
}

function buttonPressed() {
  theSpan.textContent = "Look, something happened!";
  console.log("button pressed");
  console.info("button pressed");
}

theButton.addEventListener('click', function(e) {
  try {
    buttonPressed();
  }
  catch (e) {
    errorHandler(e);
  }
});
