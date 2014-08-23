window.ondevicemotion = function(event){
   var accelerationY = event.accelerationIncludingGravity.y;
   if(accelerationY > 0){
     console.log("Moving");
   } else {
     console.log("Still");
   }
}
