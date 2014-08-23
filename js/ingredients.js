//get the ingredients 

var theList = ['one', 'two', 'three'],
    txt3 = document.createElement("b"),
    theMix = document.getElementById("theMix");




var getIngreds = function(){
  var mix1 = "<div class='col-md-12 column'><h2 class='text-center'> ingredient 1: " + theList[0] +  "</h2></div>";
  var mix2 = "<div class='col-md-12 column'><h2 class='text-center'> ingredient 1: " + theList[1] +  "</h2></div>";
  $(theMix).append(mix1 + mix2);
  }   