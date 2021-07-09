
NoseX = 0;

NoseY = 0;

Difference = 0;

LeftWristX = 0;

RightWristX = 0;

function setup() {

    canvas = createCanvas(600,500);
    
    canvas.position(560,120);
    
    video = createCapture(VIDEO);
    
    video.size(550, 500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    
    poseNet.on('pose', gotPoses);
    
    }
    
    function draw() {
    
    background('#3287a8');

    document.getElementById("font side").innerHTML = "The size of the text is = " + Difference +"px";

    textSize(Difference);

    text('Ashwanth Hariharan',280, 280);

    fill(255, 0, 0)

    }
    
    function modelLoaded() {
    
    console.log("PoseNet is Intialized!");
    
    }
    
    function gotPoses(results) {
    
    if(results.length > 0) {
    
    console.log(results);

    NoseX = results[0].pose.nose.x;

    NoseY = results[0].pose.nose.y;

    LeftWristX = results[0].pose.leftWrist.x;

    RightWristX = results[0].pose.rightWrist.x;

    Difference = floor(LeftWristX - RightWristX);

    console.log("Difference" + Difference + "LeftWrist" + LeftWristX + "RightWrist" + RightWristX);
    
    }
    
    }