function Collision(){
	if(test.isColl(endDoor)){
		Level_One();
	}
	
	
	if (test.X <= 205){
		test.X =205;
	}
	if (test.X >= display.width - test.W-200){
		test.X =display.width-test.W-200;	
	}
	if (test.Y<190){
		test.Y =190;
	}
	if (test.Y >= 450){
		test.Y =450;	
	}
	
	for(i=fallAwayBlock.length-1;i>=0;i--){
		if(test.isCollBot(fallAwayBlock[i])){	
			test.Y=fallAwayBlock[i].Y-test.H;
			onground = true;
			if (fallAwayBlock[i].toBeDeleted ==false){
			
				fallAwayTimer(i);
				fallAwayBlock[i].toBeDeleted = true;
			}
			//console.log(i);
		}

	}
		for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollTop(fallAwayBlock[i])){	
			
			flagTop = true;
		}
	}
	for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollRight(fallAwayBlock[i])){
		flagRight= true;
		
		}		
	}

	for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollLeft(fallAwayBlock[i])){
		flagLeft=true;

		}			
	}
	for(i=0;i<iceBlock.length; i++){
		if(test.isCollBot(iceBlock[i])){	
			test.Y=iceBlock[i].Y-test.H;
			onIce = true;
			onground= true;
			
		}
	}
		for(i=0;i<iceBlock.length; i++){
		if(test.isCollTop(iceBlock[i])){	
			
			flagTop = true;
		}
	}
	for(i=0;i<iceBlock.length; i++){
		if(test.isCollRight(iceBlock[i])){
		flagRight= true;
		
		}		
	}
	for(i=0;i<iceBlock.length; i++){
		if(test.isCollLeft(iceBlock[i])){
		flagLeft=true;

		}			
	}
		for(i=0;i<platform.length; i++){
		if(test.isCollBot(platform[i])){	
			test.Y=platform[i].Y-test.H;
			onground = true;
		}
	}
		for(i=0;i<platformX.length; i++){
		if(test.isCollBot(platformX[i])){	
			test.Y=platformX[i].Y-test.H;
			onground = true;
		}
	}
	for(i=0;i<ground.length; i++){
		if(test.isCollBot(ground[i])){	
			test.Y=ground[i].Y-test.H;
			onground = true;
		}
	}
	for(i=0;i<ground.length; i++){
		if(test.isCollTop(ground[i])){	
			test.Y+=4;
			flagTop = true;
		}
	}
	for(i=0;i<ground.length; i++){
		if(test.isCollRight(ground[i])){
		flagRight= true;
		
		}		
	}

	for(i=0;i<ground.length; i++){
		if(test.isCollLeft(ground[i])){
		flagLeft=true;

		}			
	}
	for(i=0;i<platformS.length; i++){
		if(test.isCollBot(platformS[i])){	
			test.Y=platformS[i].Y-test.H;
			onground = true;
		}
	}
	for(i=0;i<platformS.length; i++){
		if(test.isCollTop(platformS[i])){	
			test.Y+=5;
			flagTop = true;
		}
	}
	for(i=0;i<platformS.length; i++){
		if(test.isCollRight(platformS[i])){
		flagRight= true;
		
		}		
	}

	for(i=0;i<platformS.length; i++){
		if(test.isCollLeft(platformS[i])){
		flagLeft=true;

		}			
	}
	for(i=0;i<jumpwalls.length; i++){
		if(test.isCollRight(jumpwalls[i])){
		flagRight= true;
		onground=true;
		test.Y+=3;
		}		
	}
		for(i=0;i<jumpwalls.length; i++){
		if(test.isCollLeft(jumpwalls[i])){
		flagLeft= true;
		onground=true;
		test.Y+=3;
		}		
	}
		for(i=0;i<jumpwalls.length; i++){
		if(test.isCollBot(jumpwalls[i])){	
			test.Y=jumpwalls[i].Y-test.H;
			onground = true;
		}
	}
	for(i=0;i<jumpwalls.length; i++){
		if(test.isCollTop(jumpwalls[i])){	
			flagTop = true;
		}
	}
	//screen bounds
if ((!flagRight)&&test.X>= display.width-test.W-205&&!attacking&& (D || onIce) ){
		if(onIce &&!D){
			playerSpeed=IceSpeed;
		}
		for(i=0;i< platformS.length;i++){
	platformS[i].X-=playerSpeed;
	}
	PlatformStart-=playerSpeed;
	for(i=0;i<jumpwalls.length; i++){
		jumpwalls[i].X-=playerSpeed;
	}
		endDoor.X-=playerSpeed;
		fire.X-=playerSpeed;
		enemy.X-=playerSpeed;
		emerald.X-=0.5*playerSpeed;	
		WASD.X-=playerSpeed;
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].X-=playerSpeed;
		}
		for(i=0;i<bullet.length;i++){
			bullet[i].X-=playerSpeed;
		}
		for(i=0;i<shooter.length;i++){
			shooter[i].X-=playerSpeed;
		}
		for(i=0; i<spikes.length; i++){	
			spikes[i].X-=playerSpeed;
		}
		for(i=0; i<fallingSpikes.length; i++){	
			fallingSpikes[i].X-=playerSpeed;
		}
		for(i=0;i<ground.length; i++){			
			ground[i].X -=playerSpeed;			
		}
		for(i=0;i<platform.length; i++){
			platform[i].X-=playerSpeed;
			
		}
		for(i=0;i<platformX.length; i++){
			platformX[i].X-=playerSpeed;
			platformX[i].moveArrayX-=playerSpeed;
			platformX[i].moveArray2X-=playerSpeed;
		}
		for(i=0;i<fallAwayBlock.length; i++){
			fallAwayBlock[i].X-=playerSpeed;
		}
		for(i=0;i<iceBlock.length; i++){
			iceBlock[i].X-=playerSpeed;
		}
	}
	if ((!flagLeft)&&test.X<= 205&&!attacking&& (A|| onIce)){
		if(onIce&&!A){
			playerSpeed=IceSpeed;
		}
			for(i=0;i< platformS.length;i++){
	platformS[i].X+=playerSpeed;
	}
	PlatformStart+=playerSpeed;
	for(i=0;i<jumpwalls.length; i++){
		jumpwalls[i].X+=playerSpeed;
	}
		endDoor.X+=playerSpeed;
		fire.X+=playerSpeed;
		enemy.X+=playerSpeed;
		WASD.X+=playerSpeed;
		emerald.X+=0.5*playerSpeed;
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].X+=playerSpeed;
		}
		for(i=0;i<bullet.length;i++){
			bullet[i].X+=playerSpeed;
		}
		for(i=0;i<shooter.length;i++){
			shooter[i].X+=playerSpeed;
		}
		for(i=0; i<spikes.length; i++){	
			spikes[i].X+=playerSpeed;
		}
		for(i=0; i<fallingSpikes.length; i++){	
			fallingSpikes[i].X+=playerSpeed;
		}
		for(i=0;i<ground.length; i++){
		
			ground[i].X +=playerSpeed;
		
		}
		for(i=0;i<platform.length; i++){
			platform[i].X+=playerSpeed;
			
		}
		for(i=0;i<platformX.length; i++){
			platformX[i].X+=playerSpeed;
			platformX[i].moveArrayX+=playerSpeed;
			platformX[i].moveArray2X+=playerSpeed;
		}
		for(i=0;i<fallAwayBlock.length; i++){
			fallAwayBlock[i].X+=playerSpeed;
		}
		for(i=0;i<iceBlock.length; i++){
			iceBlock[i].X+=playerSpeed;
		}
	}
	if (test.Y<200){
		for(i=0;i< platformS.length;i++){
		platformS[i].Y+=Math.abs(VelY);
	}
	PlatformStartY+=Math.abs(VelY);
	for(i=0;i<jumpwalls.length; i++){
		jumpwalls[i].Y+=Math.abs(VelY);
	}
		endDoor.Y+=Math.abs(VelY);
		fire.Y+=Math.abs(VelY);
		enemy.Y+=Math.abs(VelY);
		WASD.Y+=Math.abs(VelY);
		emerald.Y+=Math.abs(VelY);
		for(i=0;i<ground.length; i++){
			ground[i].Y +=Math.abs(VelY);		
		}
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].Y+=Math.abs(VelY);
		}
		for(i=0;i<bullet.length;i++){
			bullet[i].Y+=Math.abs(VelY);
		}
		for(i=0;i<shooter.length;i++){
			shooter[i].Y+=Math.abs(VelY);
		}
		for(i=0; i<spikes.length; i++){	
			spikes[i].Y+=Math.abs(VelY);
		}
		for(i=0; i<fallingSpikes.length; i++){	
			fallingSpikes[i].Y+=Math.abs(VelY);
		}
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
		for(i=0;i<fallAwayBlock.length; i++){
			fallAwayBlock[i].Y+=Math.abs(VelY);
		}
		for(i=0;i<iceBlock.length; i++){
			iceBlock[i].Y+=Math.abs(VelY);
		}
	}
		if (test.Y>440){
			for(i=0;i< platformS.length;i++){
				platformS[i].Y-=Math.abs(VelY);
			}
			PlatformStartY-=Math.abs(VelY);
			for(i=0;i< jumpwalls.length;i++){
				jumpwalls[i].Y-=Math.abs(VelY);
			}
			endDoor.Y-=Math.abs(VelY);
			fire.Y-=Math.abs(VelY);
			enemy.Y-=Math.abs(VelY);
			WASD.Y-=Math.abs(VelY);
			emerald.Y-=Math.abs(VelY);
			for(i=0; i<fakeGround.length; i++){	
				fakeGround[i].Y-=Math.abs(VelY);
			}
			for(i=0;i<bullet.length;i++){
				bullet[i].Y-=Math.abs(VelY);
			}
			for(i=0;i<shooter.length;i++){
				shooter[i].Y-=Math.abs(VelY);
			}
			for(i=0; i<spikes.length; i++){	
				spikes[i].Y-=Math.abs(VelY);
			}
			for(i=0; i<fallingSpikes.length; i++){	
				fallingSpikes[i].Y-=Math.abs(VelY);
			}
			for(i=0;i<ground.length; i++){
			
				ground[i].Y -=Math.abs(VelY);
				
			
			}
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
			for(i=0;i<fallAwayBlock.length; i++){
				fallAwayBlock[i].Y-=Math.abs(VelY);
			}
			for(i=0;i<iceBlock.length; i++){
				iceBlock[i].Y-=Math.abs(VelY);

			}
		}
}
