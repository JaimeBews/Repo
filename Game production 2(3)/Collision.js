var level = 0

function Collision(){
	powerUp();
	if(CreditsBG.Y<-1200){
		CreditsBG.Y=800;
		mainmenu=true
		CreditsScreen = false;
		level=0;
	}		
	if(test.isColl(endDoor)&& level == 0){
		level++
		sound.pause();
		Level2();
	}
	if((test.isColl(endDoor)||test.isColl(ExtraDoor))&& level == 1){
		level++
		VFX_Background2.pause();
		StoneBossfight();
	}
	if(test.isColl(endDoor)&& level == 2){
		level++
		sound.pause();
		//Level3();
		BossBattle = false;
		Level3();
	}
	if(test.isColl(endDoor)&& level == 3){
		level++
		sound.pause();
		Level4();
	}
	if(test.isColl(endDoor)&& level == 4){
		level++
		sound.pause();
		Bossfight();
	}
	if(test.isColl(endDoor)&& level == 5){
		Credits();
	}
	if (test.X <= 205&&!BossBattle){
		test.X =205;
	}
	if (test.X >= display.width - test.W-200&&!BossBattle){
		test.X =display.width-test.W-200;	
	}
	if (test.X >= display.width-test.W&&BossBattle){
		test.X =display.width-test.W;
	}
	if (test.X <= 0&&BossBattle){
		test.X =0;
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
			
			test.Y=ground[i].Y+ground[i].H;
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
			test.Y+=3;
			onground=true;
			onjumpwall= true;
		
		}		
	}
		for(i=0;i<jumpwalls.length; i++){
			if(test.isCollLeft(jumpwalls[i])){
			flagLeft= true;
			test.Y+=3;
			onground=true;
			onjumpwall= true;
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
	
	Boundaries();
}
