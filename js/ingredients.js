//get the ingredients 

var theList = ['one', 'two', 'three'],
    txt3 = document.createElement("b"),
    theMix = document.getElementById("theMix");




var getIngreds = function(){
  var mix1 = "<h3>" + theList[0] +  "</b>";
  $(theMix).append(mix1);
  }   