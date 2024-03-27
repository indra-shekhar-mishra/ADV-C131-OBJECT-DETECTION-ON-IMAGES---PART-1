img = "";
function setup(){
    canvas = createCanvas(640,300);
    canvas.center();
}
function preload(){
    img = loadImage('A_Bottle.jpeg');
}
function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text('Bottle',285,115);
    noFill();
    stroke('#FF0000');
    rect(280,100,100,200);
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
