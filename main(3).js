img = "";
function setup(){
    canvas = createCanvas(640,300);
    canvas.center();
}
function preload(){
    img = loadImage('A_LAPTOP.jpeg');
}
function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text('Cup',420,160);
    noFill();
    stroke('#FF0000');
    rect(410,140,210,160);
}