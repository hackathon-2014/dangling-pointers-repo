window.ondevicemotion = function(event){
   var accelerationY = event.acceleration.y;
   if(accelerationY > 0){
     console.log("Moving");
   } else {
     console.log("Still");
   }
}
