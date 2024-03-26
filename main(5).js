img = "";
function setup(){
    canvas = createCanvas(640,400);
    canvas.center();
}
function preload(){
    img = loadImage('A_fruit.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text('Fruit basket',60,70);
    noFill();
    stroke('#FF0000');
    rect(50,50,500,300);
}