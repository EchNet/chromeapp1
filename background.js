var statusWindow;
var displayWindow;

// Log messages go to the background page view.
console.log("background script running");

// How do you access page scripts from here?
// How do you make objects available to page scripts from here?

function createStatusWindow(launchData) {
  chrome.app.window.create('status.html', {
    'outerBounds': {
      'width': 400,
      'height': 500,
      'left': 100,
      'top': 100
    }
  }, function(win) {
    win.contentWindow.launchData = launchData;
    statusWindow = win;
  });
}

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  console.log("application launched");
  createStatusWindow(launchData);
});

console.log("background script finished");
