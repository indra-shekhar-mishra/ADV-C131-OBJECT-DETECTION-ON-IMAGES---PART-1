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
function modelLoaded(){
    console.log('Model Loded !')
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
  console.log(results);
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}
