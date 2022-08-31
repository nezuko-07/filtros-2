function preload(){

}

function setup(){
 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);//es la funcion que nos ayuda a acceder a la camara
 video.size(300,300);
 video.hide();
 poseNet = ml5.poseNet(video,modelloaded);
 poseNet.on('pose',gotposes);
}

function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
save('foto.png')
}

function modelloaded(){
    console.log("poseNet esta inicializado");  
}function gotposes(results)
 { if(results.length > 0)
     { console.log(results);
     noseX = results[0].pose.nose.x-15;
     noseY = results[0].pose.nose.y-15;
     } }