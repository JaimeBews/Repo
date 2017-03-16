
function Presentation(){
	ClearAllArrays();
	sound.pause();
	test.X=500
	test.Y=372
	enemy.X=8300;
	enemy.Y=300;
	endDoor.X=8300;
	endDoor.Y= -2372;
	
	for (i=0;i<10;i++){
		newEnemy[i] = new Object("images/test_sheet.png", 5500+50*i, 350, 70, 50);
		newEnemy[i].animCol=0;
		newEnemy[i].animRow=0;
		newEnemy[i].animHeight=241;
		newEnemy[i].animWidth=329;
		newEnemy[i].E_VelY=0;
		newEnemy[i].enemyCounter=0;
		newEnemy[i].enemyResetCounter =0;
	}
	
	for(i=0;i<3;i++){
		HealthPowerUp[i] = new Object("images/Asset/healthupgrade.png",2500+200*i,300,50,50);
	}
	for (i=0; i<250; i++ ){
		ground[i] = new Object ("images/LevelTutorial/TutGrass.png", 300+100*i, display.height -100,100,100);
	}
		for (i=0;i<1;i++){
		shooter[i] = new Object("images/test.png",500,300,100,100)
	}
	for(i=0; i<5; i++){
		platform[i] = new Object ("images/LevelTutorial/TutPlatform.png",999,999,64,64);
		platform[i].MaxArray =true;
		platform[i].platformSpeed =1;
	}
	for(i=0; i<3; i++){
		platformX[i] = new Object ("images/LevelTutorial/TutPlatform.png",3050,420,64,32);
		platformX[i].MaxArrayX=true;
		platformX[i].platformSpeed=1;
	}
	for(i=0;i<1;i++){
		fallingSpikes[i] = new Object("images/LevelTutorial/TutSpike1.png",200,0,50,50);
		fallingSpikes[i].falling = false;
	}
	for(i=0;i<3;i++){
		fakeGround[i] = new Object("images/LevelTutorial/TutGrass.png",0+100*i,display.height -100,100,100);
	}
	for(i=0;i<2;i++){
		jumpwalls[i] = new Object("images/LevelTutorial/TutGrass.png",0,320-100*i,100,100)
	}
	for(i=0;i<5;i++){
		spikes[i] = new Object("images/LevelTutorial/TutSpike.png",3100+i*75,490,50,50);
	}
	for (i=0; i<3; i++ ){
		fallAwayBlock[i] = new Object ("images/grass_tile.png", 1800+100*i, display.height -200,100,100);
		fallAwayBlock[i].toBeDeleted= false;
	}
	for (i=0; i<20; i++ ){
		iceBlock[i] = new Object ("images/icetile3.png", 800+100*i, display.height -100,100,100);
		
	}
	ground[18].Y=-1000	
	ground[19].Y=-1000
	ground[20].Y=-1000
	
	iceBlock[10].Y=-1000
	iceBlock[11].Y=-1000
	iceBlock[12].Y=-1000
	for(i=0;i<platformX.length;i++){
		platformX[i].moveArrayX  = platformX[i].X - 120;
		platformX[i].moveArray2X = platformX[i].X + 120;
	}
	for(i=0;i<platform.length;i++){
		platform[i].moveArray= platform[i].Y - 120;
		platform[i].moveArray2 = platform[i].Y + 120;
	}
	
}