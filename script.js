/* Iteration 4: Make the Canvas App Functional */

let backgroundButton = document.querySelector('#background-btn');
let background = document.getElementById('background');
backgroundButton.oninput = () => {
  let colorCode = backgroundButton.value;
  background.style.fill = colorCode;
}
let socksButton = document.querySelector('#socks-btn');
let socks = document.getElementById('socks');
socksButton.oninput = () => {
  let colorCode = socksButton.value;
  socks.style.fill = colorCode;
}
let shirtButton = document.querySelector('#shirt-btn');
let shirt = document.getElementById('shirt');
shirtButton.oninput = () => {
  let colorCode = shirtButton.value;
  shirt.style.fill = colorCode;
}
let pantButton = document.querySelector('#pant-btn');
let pant = document.getElementById('pant');
pantButton.oninput = () => {
  let colorCode = pantButton.value;
  pant.style.fill = colorCode;
}
let shoesButton = document.querySelector('#shoes-btn');
let shoes = document.getElementById('shoes');
shoesButton.oninput = () => {
  let colorCode = shoesButton.value;
  shoes.style.fill = colorCode;
}
let glovesButton = document.querySelector('#gloves-btn');
let gloves = document.getElementById('gloves');
glovesButton.oninput = () => {
  let colorCode = glovesButton.value;
  gloves.style.fill = colorCode;
}
let jacketButton = document.querySelector('#jacket-btn');
let jacket = document.getElementById('jacket');
jacketButton.oninput = () => {
  let colorCode = jacketButton.value;
  jacket.style.fill = colorCode;
}
let faceButton = document.querySelector('#face-btn');
let face = document.getElementById('face');
faceButton.oninput = () => {
  let colorCode = faceButton.value;
  face.style.fill = colorCode;
}
let hairButton = document.querySelector('#hair-btn');
let hair = document.getElementById('hair');
hairButton.oninput = () => {
  let colorCode = hairButton.value;
  hair.style.fill = colorCode;
}
let hatButton = document.querySelector('#hat-btn');
let hat = document.getElementById('hat');
hatButton.oninput = () => {
  let colorCode = hatButton.value;
  hat.style.fill = colorCode;
}