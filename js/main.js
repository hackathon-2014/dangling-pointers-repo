window.ondevicemotion = function(event) {

  var accelerationY = event.acceleration.y,
    seconds = secondsPassed();
  if (seconds < 5) {
    if (accelerationY > 10) {
      console.log("Moving");
      hndlr()
    } else {
      console.log("Still");
    }
  }
}


function secondsPassed() {
  var date = new Date(),
    s = date.getSeconds();
  return s;
}

function hndlr(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    // in production code, item.htmlTitle should have the HTML entities escaped.
    document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
  }
}
