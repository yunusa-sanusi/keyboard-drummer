var clap = document.getElementById('clap');
var hihat = document.getElementById('hihat');
var kick = document.getElementById('kick');
var openhat = document.getElementById('openhat');
var boom = document.getElementById('boom');
var ride = document.getElementById('ride');
var snare = document.getElementById('snare');
var tom = document.getElementById('tom');
var tink = document.getElementById('tink');

// var idArray = [clap, hihat, kick, openhat, boom, ride, snare, tom, tink]

document.body.addEventListener('keydown', function(e) {
  if(e.keyCode == 65){
    clap.style.border = '1px solid orange'
    clap.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/clap.wav');
    audio.play();
  } else if (e.keyCode == 83) {
    hihat.style.border = '1px solid orange'
    hihat.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/hihat.wav');
    audio.play();
  } else if(e.keyCode == 68) {
    kick.style.border = '1px solid orange'
    kick.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/kick.wav');
    audio.play();
  } else if(e.keyCode == 70) {
    openhat.style.border = '1px solid orange'
    openhat.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/openhat.wav');
    audio.play();
  } else if(e.keyCode == 71) {
    boom.style.border = '1px solid orange'
    boom.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/boom.wav');
    audio.play();
  } else if(e.keyCode == 72) {
    ride.style.border = '1px solid orange'
    ride.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/ride.wav');
    audio.play();
  } else if(e.keyCode == 74) {
    snare.style.border = '1px solid orange'
    snare.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/snare.wav');
    audio.play();
  } else if(e.keyCode == 75) {
    tom.style.border = '1px solid orange'
    tom.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/tom.wav');
    audio.play();
  } else if(e.keyCode == 76) {
    tink.style.border = '1px solid orange'
    tink.style.transform = 'scale(1.1)'
    var audio = new Audio('Drumset Audio Files/tink.wav');
    audio.play();
  }
})

document.body.addEventListener('keyup', function(e) {
  if(e.keyCode == 65){
    clap.style.border = '1px solid black'
    clap.style.transform = 'scale(1)'
  } else if (e.keyCode == 83) {
    hihat.style.border = '1px solid black'
    hihat.style.transform = 'scale(1)'
  } else if(e.keyCode == 68) {
    kick.style.border = '1px solid black'
    kick.style.transform = 'scale(1)'
  } else if(e.keyCode == 70) {
    openhat.style.border = '1px solid black'
    openhat.style.transform = 'scale(1)'
  } else if(e.keyCode == 71) {
    boom.style.border = '1px solid black'
    boom.style.transform = 'scale(1)'
  } else if(e.keyCode == 72) {
    ride.style.border = '1px solid black'
    ride.style.transform = 'scale(1)'
  } else if(e.keyCode == 74) {
    snare.style.border = '1px solid black'
    snare.style.transform = 'scale(1)'
  } else if(e.keyCode == 75) {
    tom.style.border = '1px solid black'
    tom.style.transform = 'scale(1)'
  } else if(e.keyCode == 76) {
    tink.style.border = '1px solid black'
    tink.style.transform = 'scale(1)'
  }
})