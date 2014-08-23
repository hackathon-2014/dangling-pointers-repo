//get the ingredients 

var theList = ['one', 'two', 'three'],
    txt3 = document.createElement("b"),
    theMix = document.getElementById("theMix");




var getIngreds = function(){
  var mix1 = "<h3> ingredient 1: " + theList[0] +  "</b>";
  var mix2 = "<h3> ingredient 2: " + theList[1] +  "</b>";
  $(theMix).append(mix1 + mix2);
  }   