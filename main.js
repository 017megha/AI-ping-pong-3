function setup()
{
  canvas = createCanvas(1240,336);
  canvas.parent('canvas');
  canvas.center();

  video = createCapture(VIDEO);
  video.size(800,400);
  video.parent('game_console');

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
	console.log('Model Loaded!');
}

function draw()
{
  image(vedio, 0 ,0 ,800 ,400);
}