<<<<<<< HEAD
function RightScreen(temp){
	for(i=0;i<temp.length;i++){
		temp[i].X-=playerSpeed;
	}
}
function LeftScreen(temp){
	for(i=0;i<temp.length;i++){
		temp[i].X+=playerSpeed;
	}
}
function TopScreen(temp){
	for(i=0;i<temp.length;i++){
		temp[i].Y+=Math.abs(VelY);
	}	
}
function BotScreen(temp){
	for(i=0;i< temp.length;i++){
		temp[i].Y-=Math.abs(VelY);
	}
}

function Boundaries(){
	if ((!flagRight)&&test.X>= display.width-test.W-205&&!attacking&& (D || onIce)&&!BossBattle ){
		if(onIce &&!D){
			playerSpeed=IceSpeed;
		}

		PlatformStart-=playerSpeed;		
		endDoor.X-=playerSpeed;
		ExtraDoor.X-=playerSpeed;
		fire.X-=playerSpeed;
		enemy.X-=playerSpeed;
		emerald.X-=0.5*playerSpeed;	
		WASD.X-=playerSpeed;	
		RightScreen(newEnemy);
		RightScreen(HealthPowerUp);
		RightScreen(fakeGround);
		RightScreen(bullet);		
		RightScreen(shooter);
		RightScreen(spikes);
		RightScreen(fallingSpikes);
		RightScreen(ground);
		RightScreen(platform);
		RightScreen(fallAwayBlock);
		RightScreen(iceBlock);
		RightScreen(jumpwalls);
		RightScreen(platformS);
		for(i=0;i<platformX.length; i++){
			platformX[i].X-=playerSpeed;
			platformX[i].moveArrayX-=playerSpeed;
			platformX[i].moveArray2X-=playerSpeed;
		}
	}
	
	
	
	
	if ((!flagLeft)&&test.X<= 205&&!attacking&& (A|| onIce)&&!BossBattle){

		if(onIce&&!A){
			playerSpeed=IceSpeed;
		}
		PlatformStart+=playerSpeed;
		endDoor.X+=playerSpeed;
		ExtraDoor.X+=playerSpeed;
		fire.X+=playerSpeed;
		enemy.X+=playerSpeed;
		WASD.X+=playerSpeed;
		emerald.X+=0.5*playerSpeed;
		
		LeftScreen(newEnemy);
		LeftScreen(HealthPowerUp);
		LeftScreen(fakeGround);
		LeftScreen(bullet);		
		LeftScreen(shooter);
		LeftScreen(spikes);
		LeftScreen(fallingSpikes);
		LeftScreen(ground);
		LeftScreen(platform);
		LeftScreen(fallAwayBlock);
		LeftScreen(iceBlock);
		LeftScreen(jumpwalls);
		LeftScreen(platformS);
	
		for(i=0;i<platformX.length; i++){
			platformX[i].X+=playerSpeed;
			platformX[i].moveArrayX+=playerSpeed;
			platformX[i].moveArray2X+=playerSpeed;
		}
		
	}
	
	
	if (test.Y<200){
		
		PlatformStartY+=Math.abs(VelY);
		endDoor.Y+=Math.abs(VelY);
		ExtraDoor.Y+=Math.abs(VelY);
		fire.Y+=Math.abs(VelY);
		enemy.Y+=Math.abs(VelY);
		WASD.Y+=Math.abs(VelY);
		emerald.Y+=Math.abs(VelY);
		
		TopScreen(newEnemy);
		TopScreen(HealthPowerUp);
		TopScreen(fakeGround);
		TopScreen(bullet);		
		TopScreen(shooter);
		TopScreen(spikes);
		TopScreen(fallingSpikes);
		TopScreen(ground);
		TopScreen(fallAwayBlock);
		TopScreen(iceBlock);
		TopScreen(jumpwalls);
		TopScreen(platformS);
		
		for(i=0;i<platform.length; i++){
			platform[i].Y+=Math.abs(VelY);
			platform[i].moveArray+=Math.abs(VelY);
			platform[i].moveArray2+=Math.abs(VelY);
		}
		for(i=0;i<platformX.length; i++){
			platformX[i].Y+=Math.abs(VelY);
			platformX[i].moveArrayX+=Math.abs(VelY);
			platformX[i].moveArray2X+=Math.abs(VelY);
		}
	
	}
		if (test.Y>440){
			
			PlatformStartY-=Math.abs(VelY);		
			endDoor.Y-=Math.abs(VelY);
			ExtraDoor.Y-=Math.abs(VelY);
			fire.Y-=Math.abs(VelY);
			enemy.Y-=Math.abs(VelY);			
			WASD.Y-=Math.abs(VelY);
			emerald.Y-=Math.abs(VelY);
			
			BotScreen(newEnemy);
			BotScreen(HealthPowerUp);
			BotScreen(fakeGround);
			BotScreen(bullet);		
			BotScreen(shooter);
			BotScreen(spikes);
			BotScreen(fallingSpikes);
			BotScreen(ground);
			BotScreen(fallAwayBlock);
			BotScreen(iceBlock);
			BotScreen(jumpwalls);
			BotScreen(platformS);
		
			for(i=0;i<platform.length; i++){
				platform[i].Y-=Math.abs(VelY);
				platform[i].moveArray-=Math.abs(VelY);
				platform[i].moveArray2-=Math.abs(VelY);
			}
			for(i=0;i<platformX.length; i++){
				platformX[i].Y-=Math.abs(VelY);
				platformX[i].moveArrayX-=Math.abs(VelY);
				platformX[i].moveArray2X-=Math.abs(VelY);
			}
		
		}
=======
function RightScreen(temp){
	for(i=0;i<temp.length;i++){
		temp[i].X-=playerSpeed;
	}
}
function LeftScreen(temp){
	for(i=0;i<temp.length;i++){
		temp[i].X+=playerSpeed;
	}
}
function TopScreen(temp){
	for(i=0;i<temp.length;i++){
		temp[i].Y+=Math.abs(VelY);
	}	
}
function BotScreen(temp){
	for(i=0;i< temp.length;i++){
		temp[i].Y-=Math.abs(VelY);
	}
}

function Boundaries(){
	if ((!flagRight)&&test.X>= display.width-test.W-205&&!attacking&& (D || onIce)&&!BossBattle ){
		if(onIce &&!D){
			playerSpeed=IceSpeed;
		}

		PlatformStart-=playerSpeed;		
		endDoor.X-=playerSpeed;
		fire.X-=playerSpeed;
		enemy.X-=playerSpeed;
		emerald.X-=0.5*playerSpeed;	
		WASD.X-=playerSpeed;	
		
		RightScreen(newEnemy);
		RightScreen(HealthPowerUp);
		RightScreen(fakeGround);
		RightScreen(bullet);		
		RightScreen(shooter);
		RightScreen(spikes);
		RightScreen(fallingSpikes);
		RightScreen(ground);
		RightScreen(platform);
		RightScreen(fallAwayBlock);
		RightScreen(iceBlock);
		RightScreen(jumpwalls);
		RightScreen(platformS);
		for(i=0;i<platformX.length; i++){
			platformX[i].X-=playerSpeed;
			platformX[i].moveArrayX-=playerSpeed;
			platformX[i].moveArray2X-=playerSpeed;
		}
	}
	
	
	
	
	if ((!flagLeft)&&test.X<= 205&&!attacking&& (A|| onIce)&&!BossBattle){

		if(onIce&&!A){
			playerSpeed=IceSpeed;
		}
		PlatformStart+=playerSpeed;
		endDoor.X+=playerSpeed;
		fire.X+=playerSpeed;
		enemy.X+=playerSpeed;
		WASD.X+=playerSpeed;
		emerald.X+=0.5*playerSpeed;
		
		LeftScreen(newEnemy);
		LeftScreen(HealthPowerUp);
		LeftScreen(fakeGround);
		LeftScreen(bullet);		
		LeftScreen(shooter);
		LeftScreen(spikes);
		LeftScreen(fallingSpikes);
		LeftScreen(ground);
		LeftScreen(platform);
		LeftScreen(fallAwayBlock);
		LeftScreen(iceBlock);
		LeftScreen(jumpwalls);
		LeftScreen(platformS);
	
		for(i=0;i<platformX.length; i++){
			platformX[i].X+=playerSpeed;
			platformX[i].moveArrayX+=playerSpeed;
			platformX[i].moveArray2X+=playerSpeed;
		}
		
	}
	
	
	if (test.Y<200){
		
		PlatformStartY+=Math.abs(VelY);
		endDoor.Y+=Math.abs(VelY);
		fire.Y+=Math.abs(VelY);
		enemy.Y+=Math.abs(VelY);
		WASD.Y+=Math.abs(VelY);
		emerald.Y+=Math.abs(VelY);
		
		TopScreen(newEnemy);
		TopScreen(HealthPowerUp);
		TopScreen(fakeGround);
		TopScreen(bullet);		
		TopScreen(shooter);
		TopScreen(spikes);
		TopScreen(fallingSpikes);
		TopScreen(ground);
		TopScreen(fallAwayBlock);
		TopScreen(iceBlock);
		TopScreen(jumpwalls);
		TopScreen(platformS);
		
		for(i=0;i<platform.length; i++){
			platform[i].Y+=Math.abs(VelY);
			platform[i].moveArray+=Math.abs(VelY);
			platform[i].moveArray2+=Math.abs(VelY);
		}
		for(i=0;i<platformX.length; i++){
			platformX[i].Y+=Math.abs(VelY);
			platformX[i].moveArrayX+=Math.abs(VelY);
			platformX[i].moveArray2X+=Math.abs(VelY);
		}
	
	}
		if (test.Y>440){
			
			PlatformStartY-=Math.abs(VelY);		
			endDoor.Y-=Math.abs(VelY);
			fire.Y-=Math.abs(VelY);
			enemy.Y-=Math.abs(VelY);			
			WASD.Y-=Math.abs(VelY);
			emerald.Y-=Math.abs(VelY);
			
			BotScreen(newEnemy);
			BotScreen(HealthPowerUp);
			BotScreen(fakeGround);
			BotScreen(bullet);		
			BotScreen(shooter);
			BotScreen(spikes);
			BotScreen(fallingSpikes);
			BotScreen(ground);
			BotScreen(fallAwayBlock);
			BotScreen(iceBlock);
			BotScreen(jumpwalls);
			BotScreen(platformS);
		
			for(i=0;i<platform.length; i++){
				platform[i].Y-=Math.abs(VelY);
				platform[i].moveArray-=Math.abs(VelY);
				platform[i].moveArray2-=Math.abs(VelY);
			}
			for(i=0;i<platformX.length; i++){
				platformX[i].Y-=Math.abs(VelY);
				platformX[i].moveArrayX-=Math.abs(VelY);
				platformX[i].moveArray2X-=Math.abs(VelY);
			}
		
		}
>>>>>>> origin/master
}