window.ondevicemotion = function(event){
   var accelerationY = event.acceleration.y;
   if(accelerationY > 0){
     console.log("Moving");
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
