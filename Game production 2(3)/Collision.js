function Collision(){
	if(test.isColl(endDoor)){
		tutorial();
	}
	if (test.isColl(enemy)&&hasnotbeenhit&&!attacking){
		lives-=1;
		hasnotbeenhit = false;
		setTimeout(wasHit,1500)
	}
	function wasHit(){
		hasnotbeenhit=true;
	}
	
	if (test.X <= 205){
		test.X =205;
	}
	if (test.X >= display.width - test.W-200){
		test.X =display.width-test.W-200;	
	}
	for(i=0;i<ground.length; i++){
		if(test.isColl(ground[i])){	
			test.Y=ground[i].Y-test.H;
			onground = true;
		}
	}
		for(i=0;i<platform.length; i++){
		if(test.isColl(platform[i])){	
			test.Y=platform[i].Y-test.H;
			onground = true;
		}
	}
		for(i=0;i<platformX.length; i++){
		if(test.isColl(platformX[i])){	
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
	if (flagRight&&test.X>= display.width-test.W-205&&D&&!attacking){
		endDoor.X-=8;
		enemy.X-=8;
		WASD.X-=8
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].X-=8;
		}
		for(i=0; i<spikes.length; i++){	
			spikes[i].X-=8;
		}
	for(i=0;i<ground.length; i++){
			
			ground[i].X -=8;
			
			emerald.X-=.01;
	}
	for(i=0;i<platform.length; i++){
			platform[i].X-=8;
			
		}
	for(i=0;i<platformX.length; i++){
			platformX[i].X-=8;
			moveArrayX[i]-=8
			moveArray2X[i]-=8
		}
	}
	if (flagLeft&&test.X<= 205&&A&&!attacking){
		endDoor.X+=8;
		enemy.X+=8;
		WASD.X+=8
		for(i=0; i<fakeGround.length; i++){	
			fakeGround[i].X+=8;
		}
		for(i=0; i<spikes.length; i++){	
			spikes[i].X+=8;
		}
	for(i=0;i<ground.length; i++){
		
			ground[i].X +=8;
			emerald.X+=.01;
		
	}
	for(i=0;i<platform.length; i++){
			platform[i].X+=8;
			
		}
	for(i=0;i<platformX.length; i++){
			platformX[i].X+=8;
			moveArrayX[i]+=8
			moveArray2X[i]+=8
		}
	}

}
