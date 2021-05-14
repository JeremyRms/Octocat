/*
  p5.js is a JavaScript library to make coding accessible for artists, designers, educators, and beginners.

  You can read the documentation at https://p5js.org/reference/
  Check out examples at https://p5js.org/examples/
*/

import p5 from "p5.js";
import Octocat from "octocat.js";

let octocat;
let backgroundImg;
let grainyImg;
let x = 0;
let y = 0;
let mode
let speed = -20
let timer = 0; 
let offset = 0
let timer2 = -30
let textOverlay
 
p5.preload = () => {
  backgroundImg = loadImage("https://files.myoctocat.dev/production/users/gavinzanerafter/assets/download-1.jpg")
  grainyImg = loadImage("https://files.myoctocat.dev/production/users/gavinzanerafter/assets/download-2.png")
  textOverlay = loadImage("https://files.myoctocat.dev/production/users/gavinzanerafter/assets/download-3.jpg")
}

p5.setup = () => {
  createCanvas(300, 300);
  octocat = new Octocat();
  octocat.setMouth("Winking")
  octocat.setFacialHair("French Mustache")
  octocat.setHair("Soft Waves Short")
  octocat.setEyewear("Monocle")
  octocat.setEyes("Smirk")
  octocat.setTop("Business Suit")
  octocat.setBottom("Suit Pants")
  octocat.setProp("Baguette")
  octocat.setFootwear("Kraftwerk Shoes")
  octocat.setHairColor("#6F6F6F")
  octocat.setBodyColor({ primary: "#6B438C", underside: "#B7D5A5", suctions: "#E8D575" })
  octocat.blink()
  
  // put your cursor below the arrow to start editing and click on the paint brush!
  // ⬇️️️️️️️️️️️️️️️️️️️️️️️️⬇️⬇️⬇️⬇️
};

// ♻️ the draw method gets called repeatedly, you can make changes here to animate!
p5.draw = () => {
  timer += 1
  timer2 += 1
  if (timer2 > 0) {
    background("white");
    tint(255, 135);
    image(backgroundImg,0,offset,300,300)
    octocat.draw(0,offset);
  }
  if (timer2 > 60) {
    if (timer2 > 120) {
      timer2 = 0
    }
    tint(255, 255);
    fill("white")
    image(textOverlay,0,0,300,300)
    textSize(30)
    textAlign(CENTER)
    textFont("Times New Roman")
    text("Power\nto the\nBaguette!",0,100,300,300)
  }
  if (timer > 26) {
    y = (Math.floor(Math.random() * 200) + 1) * -1
    offset = (Math.floor(Math.random() * 5))
  }
  tint(255, 120);
  image(grainyImg,x,y,600,600)
  filter(GRAY);
};
