let imgMars
let imgSpace
let unitsY = 0
let unitsSpaceY = 0
let frames = 155

function setup() {
  createCanvas(700, 700, WEBGL);
  imgMars = loadImage("/mars.jpg");
  imgSpace = loadImage("/space.jpg")
}

function keyPressed() {
  if (key === 's') {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif('marsSketch', frames, options);
  }
}

function draw() {
  background(0);

  //Animates rotation background photo of space
  unitsSpaceY += .01
  rotate(radians(unitsSpaceY))

  image(imgSpace, -500, -500, 1000, 1000)
  texture(imgMars)

  //Animates rotation of planet
  unitsY += .5
  rotateY(radians(unitsY))

  pointLight(250, 250, 250, 218, -200, 300)
  pointLight(250, 250, 250, -218, 270, -50)

  noStroke()
  sphere(130);
}
