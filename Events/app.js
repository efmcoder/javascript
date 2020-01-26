var btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number+1));
}


function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

//btn.onclick = bgChange;
//btn.onfocus = bgChange;//changes color when you go back to screen
btn.ondblclick = bgChange;
//btn.onclick = bgChange;
//btn.onclick = bgChange;
//btn.onclick = bgChange;
//btn.onclick = bgChange;
//btn.onclick = bgChange;




