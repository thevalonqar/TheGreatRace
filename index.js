


var k = document.getElementById('kirby');
var p = document.getElementById('poppy');



function race() {
  var posK = 0;
  var posP = 0;
  resetImages();
  var timer = setInterval(frame, 100);

  function frame (){
    if (posK > 500 || posP > 500 ){
      clearInterval(timer);
      posK > posP ? kirbyWins() : poppyWins();
    } else {
      var rdmK = Math.floor(Math.random() * 20);
      var rdmP = Math.floor(Math.random() * 20);
      posK += rdmK;
      posP += rdmP;
      k.style.left = posK + 'px';
      p.style.left = posP + 'px';

    }
  }
}
function resetImages() {
  document.getElementById('kirbyImg').src = "kirby_bomb.png";
  document.getElementById('poppyImg').src = "poppy_bomb.png";
}
function kirbyWins(){
  document.getElementById('kirbyImg').src = "kirby_wins.png";
  alert('kirby');
}
function poppyWins(){
  document.getElementById('poppyImg').src = "poppy_wins.png";
}
