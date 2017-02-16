
var speed = 1;
var timerS = 0;
//var d = 0;
var platformLimit = 6;
//var platformRight = 6
var platformS = new Array();
//var platformOG = new Array();



function move(){
/*if (platformS.length > platformRight)
{
right();
}*/
	for(i=0;i< platformS.length;i++){
	platformS[i].Y +=speed;
	}
	push();
	splice();
}

function push(){
	if (timerS > 100){
		platformS.push(platform = new Object ());
		platform.Sprite.src = "images/LevelTutorial/TutPlatform.png";
		platform.X = 320;
		platform.Y = 0;
		platform.W = 64;
		platform.H = 32;
		timerS = 0;
	}
timerS++;
}

function splice (){
	if (/*d > 500||*/platformS.length > platformLimit){
		platformS.shift();
	//	console.log('delete');
//d = 0;
	}
//d++;
}
/*function right()
{
for(i=0;i< platformS.length;i++){
platformS[i].X +=speed;
}
}*/

