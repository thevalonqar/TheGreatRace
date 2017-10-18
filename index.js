


var k = document.getElementById('kirby');
var p = document.getElementById('poppy');



function race() {
  var posK = 0;
  var posP = 0;
  var timer = setInterval(frame, 100);

  function frame (){
    if (posK > 500 || posP > 500 ){
      clearInterval(timer);
      posK > posP ? alert('kirby') : alert('poppy');
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
