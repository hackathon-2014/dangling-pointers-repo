window.ondevicemotion = function(event){
   var accelerationY = event.acceleration.y;
   if(accelerationY > 10){
     console.log("Moving");
     hndlr()
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

function getInfo() {
  var jqxhr = $.get( "http://www.davykelly.com/splendrink/getDrinkDetails.php?id=15&format=json", function() {
    alert( "success" );
  })
    .done(function() {
      alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "finished" );
    });


}
