	//emerald.Sprite.src = "images/wasd.png";
	function tutorial(){
		var sound = new Audio("Sounds/BackgroundMusic1.mp3");
		sound.volume = 0.5;
		sound.play();
		test.X=500
		test.Y=372
		enemy.X=8300;
		enemy.Y=300;
		endDoor.X=8300;
		endDoor.Y= -2372;
		
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
			ground[i] = new Object ("images/LevelTutorial/TutGrass.png", 100*i, display.height -100,100,100);
		}
			for (i=0;i<2;i++){
			shooter[i] = new Object("images/test.png",500,300,100,100)
		}
		shooter[1].X=300;
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
		//for(i=0;i<1;i++){
	//		fakeGround[i] = new Object("images/LevelTutorial/TutGrass.png",-1000,372,100,100);
		//}
		//for(i=0;i<1;i++){
	//		jumpwalls[i] = new Object("images/LevelTutorial/TutGrass.png",300,320-100*i,100,100)
	//	}
		for(i=0;i<5;i++){
			spikes[i] = new Object("images/LevelTutorial/TutSpike.png",3100+i*75,490,50,50);
		}
		/*for (i=0; i<10; i++ ){
			fallAwayBlock[i] = new Object ("images/grass_tile.png", 500+100*i, display.height -250,100,100);
			fallAwayBlock[i].toBeDeleted= false;
		}*/
		for (i=0; i<4; i++ ){
			iceBlock[i] = new Object ("images/icetile3.png", 800+100*i, display.height- 300,100,100);
		}
	ground[220].Y=500;
	//var indexj = 0;
	/*for(j=220;j<250;j++){
		
		ground[j].X = 500+indexj*10;
		ground[j].Y = 500-indexj*14;
		indexj++;
	}
	*/		 
		 platform[4].X = 2120;
		 platform[4].Y = 450;
		 platform[4].W =32;
		 platform[4].H = 32;		
		 platform[0].X = 5400;
		 platform[0].Y = 300;
		 platform[0].W =64;
		 platform[0].H = 32;
		  platform[1].X = 5850;
		 platform[1].Y = 300;
		 platform[1].W =32;
		 platform[1].H = 32;
		  platform[2].X = 6000;
		 platform[2].Y = 350;
		 platform[2].W =32;
		 platform[2].H = 32;
		platform[3].X = 6150;
		 platform[3].Y = 400;
		 platform[3].W =32;
		 platform[3].H = 32;
		 
		platformX[0].X = 3250;
		 platformX[0].Y = 420;
		 platformX[0].W =64;
		 platformX[0].H = 32;
		platformX[1].X = 4800;
		 platformX[1].Y = 500;
		 platformX[1].W =180;
		 platformX[1].H = 32;
		platformX[2].X = 5100;
		 platformX[2].Y = 400;
		 platformX[2].W =64;
		 platformX[2].H = 32;	
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
		
		
		 ground[39].X= 0;
			ground[39].Y= display.height-300;
			ground[42].X= 0;
			ground[42].Y= display.height-350;
			ground[37].X= 1600;
			ground[37].Y= display.height-100;
			
			ground[119].X= 4200;
			ground[119].Y= display.height-100;
			ground[119].W=50
			ground[119].H=50
			ground[118].X= 4000;
			ground[118].Y= display.height-100;
			ground[118].W=100
			ground[118].H=50
			ground[117].X= 3800;
			ground[117].Y= display.height-100;
			ground[116].X= 9700;
			ground[116].Y= display.height-300;
			ground[115].X= 9700;
			ground[115].Y= display.height-200;
			ground[114].X= 9600;
			ground[114].Y= display.height-100;
			
			ground[113].X= 8700;
			ground[113].Y= display.height-300;
			ground[112].X= 8700;
			ground[112].Y= display.height-200;
			ground[111].X= 8600;
			ground[111].Y= display.height-100;
			
			ground[110].X= 8600;
			ground[110].Y= display.height-300;
			ground[109].X= 8600;
			ground[109].Y= display.height-200;
			ground[108].X= 8500;
			ground[108].Y= display.height-100;
			ground[100].X= 7700;
			ground[100].Y= display.height-300;
			ground[102].X= 7700;
			ground[102].Y= display.height-200;
			ground[103].X= 7700;
			ground[103].Y= display.height-200;
			ground[104].X= 7700;
			ground[104].Y= display.height-100;
			ground[105].X= 7600;
			ground[105].Y= display.height-200;
			ground[106].X= 7600;
			ground[106].Y= display.height-100;
			ground[107].X= 7500;
			ground[107].Y= display.height-100;
			ground[201].X= 6800;
			ground[201].Y= display.height-100;
			
			ground[210].X= 6300;
			ground[210].Y= display.height-200;
			ground[202].X= 6300;
			ground[202].Y= display.height-200;
			
			ground[68].X= 6300;
			ground[68].Y= display.height-100;
			ground[67].X= 5630;
			ground[67].Y= display.height-400;
			ground[67].H=50
			ground[67].W=150

			ground[63].X= 4500;
			ground[63].Y= display.height-100;
			ground[62].X= 4500;
			ground[62].Y= display.height-150;
			ground[61].X= 4400;
			ground[61].Y= display.height-100;
			ground[60].X= 4600;
			ground[60].Y= display.height-100;
			ground[59].X= 4500;
			ground[59].Y= display.height-250;
			ground[58].X= 4400;
			ground[58].Y= display.height-200;
			ground[57].X= 3800;
			ground[57].Y= display.height-400;
			ground[55].X= 3600;
			ground[55].Y= display.height-300;
			ground[56].X= 3400;
			ground[56].Y= display.height-100;
			ground[54].X= 3500;
			ground[54].Y= display.height-300;
			ground[53].X= 3500;
			ground[53].Y= display.height-200;
			ground[35].X= 3500;
			ground[35].Y= display.height-100;
			
			ground[28].X= 2800;
			ground[28].Y= display.height-150;
			ground[27].X= 2700;
			ground[27].Y= display.height-200;	
			ground[26].X= 2600;
			ground[26].Y= display.height-250;	
			ground[25].X= 2500;
			ground[25].Y= display.height-300;	
			ground[24].X= 2400;
			ground[24].Y= display.height-350;	
			
			ground[52].X= 2300;
			ground[52].Y= display.height-400;	
			ground[51].X= 2200;
			ground[51].Y= display.height-400;	
			
			
			ground[50].X= 2300;
			ground[50].Y= display.height-300;	
			ground[49].X= 2200;
			ground[49].Y= display.height-300;	
			
			ground[48].X= 2300;
			ground[48].Y= display.height-200;	
			ground[47].X= 2200;
			ground[47].Y= display.height-200;	

			ground[210].X= 1550;
			ground[210].Y= display.height-300;
			ground[210].W=50
			ground[210].H=50
			ground[46].X= 1900;
			ground[46].Y= display.height-300;
			ground[46].W=50
			ground[46].H=50
			ground[45].X= 2000;
			ground[45].Y= display.height-150;				
			
			ground[44].X= 1400;
			ground[44].Y= display.height-100;	
			ground[43].X= 1400;
			ground[43].Y= display.height-150;		
	
			ground[14].X= 1300;
			ground[14].Y= display.height-100;
			ground[13].X= 1300;
			ground[13].Y= display.height-200;
			ground[12].X= 1200;
			ground[12].Y= display.height-200;
			ground[11].X= 1100;
			ground[11].Y= display.height-200;
			ground[10].X= 1000;
			ground[10].Y= display.height-200;
			ground[9].X= 900;
			ground[9].Y= display.height-200;
			ground[8].X= 800;
			ground[8].Y= display.height-200;
		
			ground[36].X= 100;
			ground[36].Y= display.height-150;
			ground[40].X= 700;
			ground[40].Y= display.height-200;
			ground[41].X= 600;
			ground[41].Y= display.height-150;
			ground[38].X= 0;
			ground[38].Y= display.height-200;
		}