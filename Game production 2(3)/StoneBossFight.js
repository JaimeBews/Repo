
function StoneBossfight(){
	ClearAllArrays();
	VFX_Background3.pause();
	StoneBoss = new Object("images/L12Boss/L2Boss.png", 10 , 0,300,600);
	StoneBoss.BossHealth = 10;
	shield = new Object("images/L12Boss/Shield.png", 10 , 0,300,600);
	emerald.Sprite.src="images/L12Boss/BossBackground.png";
	emerald.W = display.width;
	emerald.H = display.height;
	VFX_Boss_Music.play();
	emerald.X=0;
	emerald.Y=0;
	BossBattle = true;
	StoneBossBattle = true;
	test.X=500
	test.Y=372
	GroundBarrier.Y=display.height+100;
	for (i=0; i<40; i++ ){
			ground[i] = new Object ("images/L12Boss/BossPlatform.png", 100*i, display.height -100,100,100);
		}

}
function FallingStones(){
	
	if (fallingSpikes.length<5&&!delayingStones){
		fallingSpikes.push(new Object("images/L12Boss/ThrowableObject.png",Math.floor(Math.random()*display.width),0,50,50));
		for(i=0;i<fallingSpikes.length;i++){
			fallingSpikes[i].falling = true;
		}
		var delayingStones = true;
		setTimeout(DelayStoneTimer,1000);
		
	}
}
function DelayStoneTimer(){
	delayingStones = false;
}
function StoneBossfunc(){
	if(StoneBoss.BossHealth==0){
		StoneBossBattle=false;
		StoneBoss.X=-5000;
		shield.X=-5000;
		endDoor.X=display.width-100;
		 for(i=0;i<3;i++){
			HealthPowerUp[i] = new Object("images/Asset/healthupgrade.png",0+100*i,300,50,50);
		} 
	}
	
	if(test.isColl(StoneBoss)&&attacking&&!bossInvincibility){
			VFX_Pong.play();
			StoneBoss.BossHealth--;
			StoneBoss.Vulnerable = false;
			bossInvincibility = true
			setTimeout(BossIFrames,4500);
		}
	if(!bossInvincibility){
		shield.X= -500;
	}else{
		shield.X=10;
	}
	if(StoneBoss.BossHealth==0){
		shield.X=-5000;
	}
}