var faceLeft;
var faceRight;
var onground = false;
var flagRight= true;
var flagLeft= true;
function player(){
	onground = false;
	flagTop=false;
	flagRight= true;
	flagLeft = true;
	test.Y += VelY;
	
	Collision();
	if(test.Y > 750){
		gameover=true;
		VelY = gravity;
	}
	if(flagTop){	
		VelY=gravity;
	}
		
	if(onground){		
		VelY = 0;
	}else{
		VelY += gravity;
	}
	if(W && onground){
		VelY = -12;
		onground = false;
	}
	if(attacking){
		playerSpeed=0;
		//setTimeout(StopMoving,1000)
	}else
		playerSpeed=8;//remove this when needed put in StopMoving
	if(A&&flagLeft){				
		test.X -= playerSpeed;
		faceRight=false;
		faceLeft=true;
	}
		
	if(D&&flagRight){
		test.X += playerSpeed;
		faceLeft=false;
		faceRight=true;

	}						
	if (lives== 0){
		gameover= true;
		lives = 3;
	}
		if(attacking&&test.isColl(enemy)){
				enemy.X-=20000;
				endDoor.Y = 372;
		}
	
}