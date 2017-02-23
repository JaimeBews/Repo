
var speed = 1;
var timerS = 0;
var d = 0;
var platformLimit = 6;
var platformRight = 0;
var platformS = new Array();
var platformOG = new Array();
var bullet= new Array();


function move(){
if (platformS.length > platformRight){
	right();
}
	for(i=0;i< platformS.length;i++){
	platformS[i].Y +=speed;
	}
	push();
	splice();
}
var PlatformStart = 320;
var PlatformStartY = 0;
function push(){
	if (timerS > 100){
		platformS.push(platformScroll = new Object ("images/LevelTutorial/TutPlatform.png",PlatformStart,PlatformStartY,64,32));
		timerS = 0;
	}
timerS++;
}

function splice (){
	if (/*d > 500*/platformS.length > platformLimit){
		platformS.shift();
		//	console.log('delete');
		d = 0;
	}
d++;
}
function right(){
	for(i=0;i< platformS.length;i++){
		platformS[i].X +=speed;
	}
}

