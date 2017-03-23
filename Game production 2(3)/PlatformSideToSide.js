	var platformX = new Array();
	var platform = new Array();
function platFormX(){
	for (i=0;i<platformX.length;i++){
	if (platformX[i].X > platformX[i].moveArrayX && platformX[i].MaxArrayX){
		platformX[i].X += -platformX[i].platformSpeed; //move speed left
		
	}else 
		platformX[i].MaxArrayX = false;
	
	if (platformX[i].X < platformX[i].moveArray2X && platformX[i].MaxArrayX == false){
		platformX[i].X += platformX[i].platformSpeed; //move speed right
	}else 
		platformX[i].MaxArrayX = true;
	}
}

function platformY(){
		
	for (i=0;i<platform.length;i++){
	
	if (platform[i].Y > platform[i].moveArray && platform[i].MaxArray){
		platform[i].Y += -platform[i].platformSpeed; //move speed left
		
	}else 
		platform[i].MaxArray = false;
	if (platform[i].Y < platform[i].moveArray2 && platform[i].MaxArray == false){
		platform[i].Y += platform[i].platformSpeed; //move speed right
	}else 
		platform[i].MaxArray = true;
	}
}