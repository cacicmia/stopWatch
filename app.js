var Watch= {
  sec: 0,
  msec: 0,
  start: false,
  count: function(){
    if (Watch.start=== false){
      Watch.start = true;
      Watch.interval = setInterval(function() {
    Watch.msec++;
    if (Watch.msec == 100) {
      Watch.sec++;
      Watch.msec = 0;
  }
    document.getElementById('count').innerHTML = `${Watch.sec}.${Watch.msec}`;
  }, 10);

  } else {
    Watch.start = false;
    clearInterval(Watch.interval);
  }
},
reset: function(){
  location.reload();
},
record: function() {
  let rTime = document.createElement('p');
  rTime.innerHTML = `${Watch.sec}.${Watch.msec}`;
    document.getElementById('PT').appendChild(rTime);
}

};

document.getElementById('no1').addEventListener('click', Watch.count);

document.getElementById('no2').addEventListener('click', Watch.reset);

document.getElementById('no3').addEventListener('click', Watch.record);


document.addEventListener('keydown', function(event){
  switch(event.which) {
    case 82:
      Watch.reset();
      break;
    case 83:
      Watch.count();
      break;
    case 84:
      Watch.record();
      break;
    default:
      break;
  }
});
