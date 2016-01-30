window.onload = function() {

  function readTextFile(fileEntry, callback) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function() {
      callback(this.responseText);
    });
    req.open("GET", "file:///data/some.txt");
    req.send();
  }

  document.querySelector("#exitButton").addEventListener('click', function(e) {
    console.info("exit button pressed");
    window.close();
  });

  document.querySelector("#actionButton").addEventListener('click', function(e) {
    readTextFile("data/some.txt", function(text) {
      document.querySelector("#someText").textContent = text;
    });
  });
}
