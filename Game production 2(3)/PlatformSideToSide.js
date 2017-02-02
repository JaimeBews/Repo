	var MaxArray =new Array();
	var platform = new Array();
	var moveArray = new Array();
	var moveArray2 = new Array();
		
	var MaxArrayX =new Array();
	var platformX = new Array();
	var moveArrayX = new Array();
	var moveArray2X = new Array();
	var platformSpeed=1;
function platFormX(){
	for (i=0;i<platformX.length;i++){
	if (platformX[i].X > moveArrayX[i] && MaxArrayX[i] == true){
		platformX[i].X += -platformSpeed; //move speed left
	}else 
		MaxArrayX[i] = false;
	if (platformX[i].X < moveArray2X[i] && MaxArrayX[i] == false){
		platformX[i].X += platformSpeed; //move speed right
	}else 
		MaxArrayX[i] = true;
	}
}

function platformY(){
	
	for (i=0;i<platform.length;i++){	
	if (platform[i].Y > moveArray[i] && MaxArray[i] == true){
		platform[i].Y -= 1; //move speed up
	}else 
		MaxArray[i] = false;
	if (platform[i].Y < moveArray2[i] && MaxArray[i] == false){
		platform[i].Y += 1; //move speed down
	}else 
		MaxArray[i] = true;
	}
}