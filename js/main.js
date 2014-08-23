window.ondevicemotion = function(event) {

  var accelerationY = event.acceleration.y;
  if (accelerationY > 3) {
    console.log("Moving");
    event.target.removeEventListener('ondevicemotion');
  } else {
    console.log("Still");
  }
}




function hndlr(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    // in production code, item.htmlTitle should have the HTML entities escaped.
    document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
  }
}
