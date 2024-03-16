function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(480,430);
    canvas.position(650,70);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function modelloaded(){
    console.log("PoseNet is initialized.");
}

function draw(){
    background("#a3a3a3");
}