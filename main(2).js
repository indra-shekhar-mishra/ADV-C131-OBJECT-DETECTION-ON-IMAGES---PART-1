img = "";
function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
}
function preload(){
    img = loadImage('A_Dice.jpeg');
}
function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text('Dice',220,160);
    noFill();
    stroke('#FF0000');
    rect(210,140,200,210);
}