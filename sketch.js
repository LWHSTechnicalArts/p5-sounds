function preload() {
  dog = loadSound('dogBark.wav');
    mozart = loadSound('mozart.wav');
    birds = loadSound('birds.wav');
}

function setup() {
  dog.setVolume(0.2);

  //    mySound = loadSound('dogBark.wav');
}

function stopAll(dog,mozart,birds){
    dog.stop();
    mozart.stop();
    birds.stop();
}

function playDog(dog) {
    dog.play();
    
}

function playBirds(birds) {
    birds.play();
    
}
function playMozart(mozart) {
    mozart.play();
}