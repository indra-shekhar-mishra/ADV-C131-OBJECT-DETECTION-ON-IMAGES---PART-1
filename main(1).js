img = "";
function setup(){
    canvas = createCanvas(640,300);
    canvas.center();
}
function preload(){
    img = loadImage('A_TV-under-an-air-conditioner.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text('TV',200,140);
    noFill();
    stroke('#FF0000');
    rect(190,120,250,150);
}