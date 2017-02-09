function Collision(){
	if(test.isColl(endDoor)){
		tutorial();
	}
	
	
	if (test.X <= 205){
		test.X =205;
	}
	if (test.X >= display.width - test.W-200){
		test.X =display.width-test.W-200;	
	}
	for(i=0;i<ground.length; i++){
		if(test.isCollBot(ground[i])){	
			test.Y=ground[i].Y-test.H;
			onground = true;
		}
	}
	for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollBot(fallAwayBlock[i])){	
			test.Y=fallAwayBlock[i].Y-test.H;
			onground = true;
			
			setTimeout(function() { fallAwayTimer(fallAwayBlock[i]);}, 500)
		}
	}
		for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollTop(fallAwayBlock[i])){	
			
			flagTop = true;
		}
	}
	for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollRight(fallAwayBlock[i])){
		flagRight= false;
		
		}		
	}

	for(i=0;i<fallAwayBlock.length; i++){
		if(test.isCollLeft(fallAwayBlock[i])){
		flagLeft=false;

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
		flagRight= false;
		
		}		
	}
	for(i=0;i<iceBlock.length; i++){
		if(test.isCollLeft(iceBlock[i])){
		flagLeft=false;

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
		if(test.isCollTop(ground[i])){	
			
			flagTop = true;
		}
	}
	for(i=0;i<ground.length; i++){
		if(test.isCollRight(ground[i])){
		flagRight= false;
		
		}		
	}

	for(i=0;i<ground.length; i++){
		if(test.isCollLeft(ground[i])){
		flagLeft=false;

		}			
	}
	
	//screen bounds
if (flagRight&&test.X>= display.width-test.W-205&&!attacking&&( D || onIce)){
		
		endDoor.X-=playerSpeed;
		enemy.X-=playerSpeed;
		emerald.X-=0.5*playerSpeed;	
		WASD.X-=playerSpeed;
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].X-=playerSpeed;
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
			moveArrayX[i]-=playerSpeed
			moveArray2X[i]-=playerSpeed
		}
		for(i=0;i<fallAwayBlock.length; i++){
			fallAwayBlock[i].X-=playerSpeed;
		}
		for(i=0;i<iceBlock.length; i++){
			iceBlock[i].X-=playerSpeed;
		}
	}
	if (flagLeft&&test.X<= 205&&!attacking&&(A || onIce)){
		
		endDoor.X+=playerSpeed;
		enemy.X+=playerSpeed;
		WASD.X+=playerSpeed;
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].X+=playerSpeed;
		}
		for(i=0; i<spikes.length; i++){	
			spikes[i].X+=playerSpeed;
		}
		for(i=0; i<fallingSpikes.length; i++){	
			fallingSpikes[i].X+=playerSpeed;
		}
		for(i=0;i<ground.length; i++){
		
			ground[i].X +=playerSpeed;
			emerald.X+=.01/8*playerSpeed;
		
		}
		for(i=0;i<platform.length; i++){
			platform[i].X+=playerSpeed;
			
		}
		for(i=0;i<platformX.length; i++){
			platformX[i].X+=playerSpeed;
			moveArrayX[i]+=playerSpeed;
			moveArray2X[i]+=playerSpeed;
		}
		for(i=0;i<fallAwayBlock.length; i++){
			fallAwayBlock[i].X+=playerSpeed;
		}
		for(i=0;i<iceBlock.length; i++){
			iceBlock[i].X+=playerSpeed;
		}
	}

}
