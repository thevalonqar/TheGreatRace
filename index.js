var k = document.getElementById('kirby');
var p = document.getElementById('poppy');
var posK = 0;
var posP = 0;


function race() {
  var timer = setInterval(frame, 100);

  function frame (){
    if (posK == 200 || posP == 200 ){
      clearInterval(timer);
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
