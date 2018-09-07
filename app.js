let sec = 0;
let msec = 0;
let start = false;

document.getElementById('no1').addEventListener('click', watchControl);

document.getElementById('no2').addEventListener('click', reset);

document.getElementById('no3').addEventListener('click', record);


document.addEventListener('keydown', function(event){
  switch(event.which) {
    case 82:
      reset();
      break;
    case 83:
      watchControl();
      break;
    case 84:
      record();
      break;
    default:
      break;
  }
});
function watchControl(){

if (start=== false){
        start = true;
  var interval = setInterval(count, 10);

} else {
  start = false;
  clearInterval(interval);
}

};

function count(){
    msec++;
    if (msec == 100) {
    sec++; msec = 0;
  }

  document.getElementById('count').innerHTML = `${sec}.${msec}`;
}
function reset() {
  location.reload();
}
function record() {
let rTime = document.createElement('p');
rTime.innerHTML = `${sec}.${msec}`;
  document.getElementById('PT').appendChild(rTime);

}
