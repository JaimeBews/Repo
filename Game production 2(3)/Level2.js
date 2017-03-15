 function LevelUpdate(){
	 if(newEnemy.length ==0){
		 
	function tutorial(){
		emerald.Sprite.src="images/LevelThree/background.png";
		var sound = new Audio("Sounds/BackgroundMusic2AA.mp3");
		sound.volume = 0.5;
		sound.loop=true;
		sound.play();
		test.X=500
		test.Y=372
		enemy.X=8300;
		enemy.Y=300;
		endDoor.X=8300;
		endDoor.Y= -2372;
		BossBattle = true;
		
		for (i=0;i<10;i++){
			newEnemy[i] = new Object("images/test_sheet.png", 500+50*i, 350, 70, 50);
			newEnemy[i].animCol=0;
			newEnemy[i].animRow=0;
			newEnemy[i].animHeight=241;
			newEnemy[i].animWidth=329;
			newEnemy[i].E_VelY=0;
			newEnemy[i].enemyCounter=0;
			newEnemy[i].enemyResetCounter =0;
		}
		
		for(i=0;i<3;i++){
			HealthPowerUp[i] = new Object("images/wasd.png",500+50*i,300,50,50);
		}
		for (i=0; i<250; i++ ){
			ground[i] = new Object ("images/LevelTwo/L2Platform.png", 100*i, display.height -100,100,100);
		}
			for (i=0;i<1;i++){
			shooter[i] = new Object("images/test.png",1700,300,100,100)
		}
		for(i=0; i<5; i++){
			platform[i] = new Object ("images/LevelTwo/L2Grass.png",999,999,64,64);
			platform[i].MaxArray =true;
			platform[i].platformSpeed =1;
		}
		for(i=0; i<3; i++){
			platformX[i] = new Object ("images/LevelTwo/L2Grass.png",3050,420,64,32);
			platformX[i].MaxArrayX=true;
			platformX[i].platformSpeed=1;
		}
		/* for(i=0;i<1;i++){
			fallingSpikes[i] = new Object("images/LevelTutorial/TutSpike1.png",200,0,50,50);
			fallingSpikes[i].falling = false;
		} */
		//for(i=0;i<1;i++){
	//		fakeGround[i] = new Object("images/LevelTutorial/TutGrass.png",500,372,100,100);
		//}
		//for(i=0;i<1;i++){
	//		jumpwalls[i] = new Object("images/LevelTutorial/TutGrass.png",300,320-100*i,100,100)
	//	}
		/* for(i=0;i<5;i++){
			spikes[i] = new Object("images/LevelTutorial/TutSpike.png",3100+i*75,490,50,50);
		} */
		/*for (i=0; i<10; i++ ){
			fallAwayBlock[i] = new Object ("images/grass_tile.png", 500+100*i, display.height -250,100,100);
			fallAwayBlock[i].toBeDeleted= false;
		}*/
		/* for (i=0; i<4; i++ ){
			iceBlock[i] = new Object ("images/icetile3.png", 800+100*i, display.height- 300,100,100);
		} */
	ground[220].Y=500;
	//var indexj = 0;
	/*for(j=220;j<250;j++){
		
		ground[j].X = 500+indexj*10;
		ground[j].Y = 500-indexj*14;
		indexj++;
	}
	*/		 
		 	
			for(i=0;i<platformX.length;i++){
		 	platformX[i].moveArrayX  = platformX[i].X - 120;
			platformX[i].moveArray2X = platformX[i].X + 120;
			}
		 	for(i=0;i<platform.length;i++){
			platform[i].moveArray= platform[i].Y - 120;
			platform[i].moveArray2 = platform[i].Y + 120;
		}
		
		 ground[249].X=0;
		 ground[249].Y=display.height- 400;
		ground[249].W=50
		 ground[249].H=50
		
		 ground[1].X=100;
		 ground[1].Y=display.height- 100;
		 ground[1].W=100
		 ground[1].H=100
		
		
		 
		}