let sec = 0;
let msec = 0;
let start = false;

document.getElementById('no1').addEventListener('click', watchControl);

document.getElementById('no2').addEventListener('click', function(){
});

document.getElementById('no2').addEventListener('click', function(){
});


document.addEventListener('keypress', function(){
});
function watchControl(){
  if (start == false) {
    start = true;
  var watch = setInterval(count, 10);

} else {
  start = false;
  clearInterval(watch);
}

};

function count(){
    msec++;
    if (msec == 100) {
    sec++; msec = 0;
  }

  document.getElementById('count').innerHTML = `${sec}.${msec}`;
}
