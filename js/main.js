$(document).ready(function() {

/*var founder-pic-one = document.getElementById('fnd-one');
document.addEventListener("load", fade-in);

function fade-in (element) {
  var op = 0.1;  // initial opacity
  //element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
};*/

var fadeTime = 2000;

var imgsfade = function() {
  $("#fnd-one").fadeIn(fadeTime);
  $("#fnd-two").fadeIn(fadeTime);
  $("#fnd-three").fadeIn(fadeTime);
};

imgsfade();

//setTimeout(imgsfade, 1000);

});
