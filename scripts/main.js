var x=0
var y=0
function preload() {
	muneda=loadSound("coin.wav")
	salto=loadSound("jump.wav")
	aplastar=loadSound("kick.wav")
	perder_vida=loadSound("mariodie.wav")
	pobreMario=loadSound("gameover.wav")
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas=createCanvas(gameConfig.screenX,gameConfig.screenY);
	canvas.parent("juego")
	video=createCapture(VIDEO)
	video.parent("console")
	video.size(300,160)
	felipe=ml5.poseNet(video,ready)
	felipe.on("pose",escaner)
	instializeInSetup(mario);
	// playBGMusic();
}
function ready() {
	console.log("Estoy listo calipsto tururu")
}
function escaner(cordenadas) {
	if (cordenadas[0]) {
		x=cordenadas[0].pose.nose.x
		y=cordenadas[0].pose.nose.y
		
		
		
	}
}
function draw() {
	game()
}






