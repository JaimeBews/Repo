	
	
	//4400, -600, a power up spot
	//FirstDoorspot x=5100, -400
	//SecondDoor spot
	//ground[330].X=5400;
	//ground[330].Y=display.height- -900;
	
	
	function Level_two(){
		ClearAllArrays();
		test.X=500
		test.Y=372
		enemy.X=8000;
		enemy.Y=500;
		emerald.Sprite.src="images/LevelOne/L1Background.png";
		emerald.H=1900;
		emerald.X=0;
		emerald.Y=0;
		VFX_Background2.play();
		endDoor.X=5400;
		endDoor.Y= display.height+900;
		ExtraDoor.X=5200;
		ExtraDoor.Y= +900;
		for(i=0;i<1;i++){
			HealthPowerUp[i] = new Object("images/Asset/healthupgrade.png",4400,-600,50,50);
		}
		for (i=0; i<350; i++ ){
			ground[i] = new Object ("images/grass_tile.png", 100*i, display.height -100,100,100);
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
		 
			 for (i=0;i<120;i++){
				spikes[i] = new Object("images/spike.png",100+100*17,950,50,50);
			}
			
			spikes[101] = new Object("images/spikeFlip.png",100+100*10,630,50,50);
			spikes[102] = new Object("images/spikeFlip.png",100+100*13.5,630,50,50);			
			spikes[2] = new Object("images/spike.png",100+100*11.75,950,50,50);
			spikes[3] = new Object("images/spike.png",100+100*11.5,950,50,50);
			spikes[4] = new Object("images/spike.png",100+100*12,950,50,50);
			spikes[0] = new Object("images/spike.png",100+100*17,950,50,50);			
			spikes[5] = new Object("images/spike.png",100+100*16.5,950,50,50);
			spikes[6] = new Object("images/spike.png",100+100*16.75,950,50,50);
			
			spikes[7] = new Object("images/spike.png",100+100*20.1,1100,50,50);
			spikes[8] = new Object("images/spike.png",100+100*20.35,1100,50,50);
			spikes[9] = new Object("images/spike.png",100+100*20.60,1100,50,50);
			spikes[10] = new Object("images/spike.png",100+100*20.85,1100,50,50);
			spikes[11] = new Object("images/spike.png",100+100*21.1,1100,50,50);
			spikes[12] = new Object("images/spike.png",100+100*21.35,1100,50,50);
			spikes[13] = new Object("images/spike.png",100+100*21.60,1100,50,50);
			spikes[14] = new Object("images/spike.png",100+100*19.85,1100,50,50);			
			spikes[15] = new Object("images/spike.png",100+100*24.1,1100,50,50);
			spikes[16] = new Object("images/spike.png",100+100*24.35,1100,50,50);
			spikes[17] = new Object("images/spike.png",100+100*24.60,1100,50,50);
			spikes[18] = new Object("images/spike.png",100+100*24.85,1100,50,50);
			spikes[19] = new Object("images/spike.png",100+100*25.1,1100,50,50);
			spikes[20] = new Object("images/spike.png",100+100*25.35,1100,50,50);
			spikes[21] = new Object("images/spike.png",100+100*25.60,1100,50,50);
			spikes[22] = new Object("images/spike.png",100+100*23.85,1100,50,50);			
			spikes[23] = new Object("images/spike.png",100+100*29.1,1100,50,50);
			spikes[24] = new Object("images/spike.png",100+100*29.35,1100,50,50);
			spikes[25] = new Object("images/spike.png",100+100*29.60,1100,50,50);
			spikes[26] = new Object("images/spike.png",100+100*29.85,1100,50,50);
			spikes[27] = new Object("images/spike.png",100+100*30.1,1100,50,50);
			spikes[28] = new Object("images/spike.png",100+100*30.35,1100,50,50);
			spikes[29] = new Object("images/spike.png",100+100*30.60,1100,50,50);
			spikes[30] = new Object("images/spike.png",100+100*28.85,1100,50,50);
			spikes[31] = new Object("images/spike.png",100+100*34.85,1100,50,50);
			spikes[32] = new Object("images/spike.png",100+100*35.1,1100,50,50);
			spikes[33] = new Object("images/spike.png",100+100*35.35,1100,50,50);
			spikes[34] = new Object("images/spike.png",100+100*35.60,1100,50,50);
			spikes[35] = new Object("images/spike.png",100+100*35.85,1100,50,50);
			spikes[36] = new Object("images/spike.png",100+100*36.1,1100,50,50);
			spikes[37] = new Object("images/spike.png",100+100*36.35,1100,50,50);
			spikes[38] = new Object("images/spike.png",100+100*36.60,1100,50,50);			
			spikes[39] = new Object("images/spike.png",100+100*36.85,1100,50,50);
			spikes[40] = new Object("images/spike.png",100+100*37.1,1100,50,50);
			spikes[41] = new Object("images/spike.png",100+100*37.35,1100,50,50);
			spikes[42] = new Object("images/spike.png",100+100*37.60,1100,50,50);
			spikes[43] = new Object("images/spike.png",100+100*37.85,1100,50,50);
			spikes[44] = new Object("images/spike.png",100+100*38.1,1100,50,50);
			spikes[45] = new Object("images/spike.png",100+100*38.35,1100,50,50);
			spikes[46] = new Object("images/spike.png",100+100*38.60,1100,50,50);			
			spikes[47] = new Object("images/spike.png",100+100*44,1200,50,50);
			spikes[48] = new Object("images/spike.png",100+100*47,1200,50,50);
			spikes[49] = new Object("images/spike.png",100+100*44.35,1200,50,50);
			spikes[50] = new Object("images/spike.png",100+100*47.35,1200,50,50);
			
		 
		/*for (i=0; i<1; i++ ){
			fallAwayBlock[i] = new Object ("images/grass_tile.png", 500, display.height -150,100,100);
		}
		for (i=0; i<4; i++ ){
			iceBlock[i] = new Object ("images/grass_tile.png", 800+100*i, display.height- 300,100,100);
		}*/
	ground[220].Y=500;
	//var indexj = 0;
	/*for(j=220;j<250;j++){
		
		ground[j].X = 500+indexj*10;
		ground[j].Y = 500-indexj*14;
		indexj++;
	}
	*/		 
		 //Platform up
		 platform[4].X = 100;
		 platform[4].Y = 4400;
		 platform[4].W =32;
		 platform[4].H = 32;		
		 platform[0].X = 5400;
		 platform[0].Y = 4000;
		 platform[0].W =64;
		 platform[0].H = 32;
		  platform[1].X = 5850;
		 platform[1].Y = 5000;
		 platform[1].W =32;
		 platform[1].H = 32;
		  platform[2].X = 6000;
		 platform[2].Y = 450;
		 platform[2].W =32;
		 platform[2].H = 32;
		platform[3].X = 6150;
		 platform[3].Y = 400;
		 platform[3].W =32;
		 platform[3].H = 32;
		 
		 //Left and right
		 platformX[0].X = 4700;
		 platformX[0].Y = -400;
		 platformX[0].W =64;
		 platformX[0].H = 32;
		
		 
		for(i=0;i<platformX.length;i++){
		 	platformX[i].moveArrayX  = platformX[i].X - 120;
			platformX[i].moveArray2X = platformX[i].X + 120;
			}
		 	for(i=0;i<platform.length;i++){
			platform[i].moveArray= platform[i].Y - 120;
			platform[i].moveArray2 = platform[i].Y + 120;
		}
		//Not in used
		 ground[41].X=-0;
		 ground[40].X=-0;
	     ground[39].X=-0;
		 ground[38].X=-0;
		 ground[37].X=-0;
		 ground[36].X=-0;
		 ground[35].X=-0;
		 ground[34].X=-0;
		 ground[33].X=-0;
		 ground[32].X=-0;
		 ground[31].X=-0;
		 ground[30].X=-0;
		 ground[29].X=-0;
		 ground[28].X=-0;
		 ground[27].X=-0;
		 ground[26].X=-0;
		 ground[25].X=-0;
		 ground[24].X=-0;
		 ground[23].X=-0;
		 ground[22].X=-0;
		 ground[21].X=-0;
		 ground[20].X=-0;
		 ground[19].X=-0;
		 ground[18].X=-0;
		 ground[18].Y=display.height- 0;
		//Left walls 0-60
		 ground[17].X=-200;
		 ground[17].Y=display.height- 600;
		 ground[17].W=100
		 ground[17].H=100
		 
		 ground[16].X=-200;
		 ground[16].Y=display.height- 500;
		 ground[16].W=100
		 ground[16].H=100
		 ground[15].X=-200;
		 ground[15].Y=display.height- 400;
		 ground[15].W=100
		 ground[15].H=100
		 ground[14].X=-200;
		 ground[14].Y=display.height- 300;
		 ground[14].W=100
		 ground[14].H=100
		 ground[13].X=-200;
		 ground[13].Y=display.height- 200;
		 ground[13].W=100
		 ground[13].H=100
		 ground[12].X=-200;
		 ground[12].Y=display.height- 100;
		 ground[12].W=100
		 ground[12].H=100
		 
		 ground[11].X=-100;
		 ground[11].Y=display.height- 600;
		 ground[11].W=100
		 ground[11].H=100
		 
		 ground[10].X=-100;
		 ground[10].Y=display.height- 500;
		 ground[10].W=100
		 ground[10].H=100
		 ground[9].X=-100;
		 ground[9].Y=display.height- 400;
		 ground[9].W=100
		 ground[9].H=100
		 ground[8].X=-100;
		 ground[8].Y=display.height- 300;
		 ground[8].W=100
		 ground[8].H=100
		 ground[7].X=-100;
		 ground[7].Y=display.height- 200;
		 ground[7].W=100
		 ground[7].H=100
		 ground[6].X=-100;
		 ground[6].Y=display.height- 100;
		 ground[6].W=100
		 ground[6].H=100
		 ground[5].X=0;
		 ground[5].Y=display.height- 600;
		 ground[5].W=100
		 ground[5].H=100
		 ground[4].X=0;
		 ground[4].Y=display.height- 500;
		 ground[4].W=100
		 ground[4].H=100
		 ground[3].X=0;
		 ground[3].Y=display.height- 400;
		 ground[3].W=100
		 ground[3].H=100
		 ground[2].X=0;
		 ground[2].Y=display.height- 300;
		 ground[2].W=100
		 ground[2].H=100
		 ground[1].X=0;
		 ground[1].Y=display.height- 200;
		 ground[1].W=100
		 ground[1].H=100
		 ground[0].X=0;
		 ground[0].Y=display.height- 100;
		 ground[0].W=100
		 ground[0].H=100
		 
		 //Land 60-67
		 ground[60].X=100;
		 ground[60].Y=display.height- 100;
		 ground[61].X=200;
		 ground[61].Y=display.height- 100;
		 ground[62].X=300;
		 ground[62].Y=display.height- 100;
		 ground[63].X=400;
		 ground[63].Y=display.height- 100;
		 ground[64].X=500;
		 ground[64].Y=display.height- 100;
		 ground[65].X=600;
		 ground[65].Y=display.height- 100;
		 ground[66].X=700;
		 ground[66].Y=display.height- 100;
		 ground[67].X=800;
		 ground[67].Y=display.height- 100;
		
		//Fall 68-80, wall
		 ground[68].X=800;
		 //fill
		 ground[68].Y=display.height- 0;
		 ground[69].X=800;
		 ground[69].Y=display.height- -100;
		 ground[70].X=800;
		 ground[70].Y=display.height- -200;
		 ground[71].X=800;
		 ground[71].Y=display.height- -300;
		 ground[72].X=800;
		 ground[72].Y=display.height- -400;
		 
		 //fill
		 ground[259].X=700;
		 ground[259].Y=display.height- 0;
		 ground[260].X=700;
		 ground[260].Y=display.height- -100;
		 ground[261].X=700;
		 ground[261].Y=display.height- -200;
		 ground[262].X=700;
		 ground[262].Y=display.height- -300;
		 ground[263].X=700;
		 ground[263].Y=display.height- -400;
		 
		 //fill
		 ground[264].X=600;
		 ground[264].Y=display.height- 0;
		 ground[265].X=600;
		 ground[265].Y=display.height- -100;
		 ground[266].X=600;
		 ground[266].Y=display.height- -200;
		 ground[267].X=600;
		 ground[267].Y=display.height- -300;
		 ground[268].X=600;
		 ground[268].Y=display.height- -400;
		 
		 //fill
		 ground[269].X=500;
		 ground[269].Y=display.height- 0;
		 ground[270].X=500;
		 ground[270].Y=display.height- -100;
		 ground[271].X=500;
		 ground[271].Y=display.height- -200;
		 ground[272].X=500;
		 ground[272].Y=display.height- -300;
		 ground[273].X=500;
		 ground[273].Y=display.height- -400;
		 
		 //fill
		 ground[274].X=400;
		 ground[274].Y=display.height- 0;
		 ground[275].X=400;
		 ground[275].Y=display.height- -100;
		 ground[276].X=400;
		 ground[276].Y=display.height- -200;
		 ground[277].X=400;
		 ground[277].Y=display.height- -300;
		 ground[278].X=400;
		 ground[278].Y=display.height- -400;
		 
		 //fill
		 ground[279].X=2300;
		 ground[279].Y=display.height- -350;
		
		 ground[280].X=2400;
		 ground[280].Y=display.height- -350;
		 ground[281].X=2300;
		 ground[281].Y=display.height- -400;
		 ground[282].X=2400;
		 ground[282].Y=display.height- -400;
		 
		 //Walls 80-
		 ground[105].X=1400;
		 ground[105].Y=display.height- 600;
		 ground[104].X=1400;
		 ground[104].Y=display.height- 600;
		 ground[103].X=1400;
		 ground[103].Y=display.height- 500;
		 ground[102].X=1400;
		 ground[102].Y=display.height- 400;
		 ground[101].X=1400;
		 ground[101].Y=display.height- 300;
		 ground[100].X=1400;
		 ground[100].Y=display.height- 200;
		 ground[99].X=1400;
		 ground[99].Y=display.height- 100;
		 ground[98].X=1300;
		 ground[98].Y=display.height- 600;
		 ground[97].X=1100;
		 ground[97].Y=display.height- 600;
		 ground[96].X=1100;
		 ground[96].Y=display.height- 500;
		 ground[95].X=1100;
		 ground[95].Y=display.height- 400;
		 ground[94].X=1100;
		 ground[94].Y=display.height- 300;
		 ground[93].X=1100;
		 ground[93].Y=display.height- 200;
		 ground[92].X=1100;
		 ground[92].Y=display.height- 100;
		 ground[91].X=1200;
		 ground[91].Y=display.height- 600;
		 ground[90].X=1200;
		 ground[90].Y=display.height- 500;
		 ground[89].X=1200;
		 ground[89].Y=display.height- 400;
		 ground[88].X=1200;
		 ground[88].Y=display.height- 300;
		 ground[87].X=1200;
		 ground[87].Y=display.height- 200;
		 ground[86].X=1200;
		 ground[86].Y=display.height- 100;
		 ground[85].X=1200;
		 ground[85].Y=display.height- 600;
		 ground[84].X=1300;
		 ground[84].Y=display.height- 500;
		 ground[83].X=1300;
		 ground[83].Y=display.height- 400;
		 ground[82].X=1300;
		 ground[82].Y=display.height- 300;
		 ground[81].X=1300;
		 ground[81].Y=display.height- 200;
		 ground[80].X=1300;
		 ground[80].Y=display.height- 100;

		 
		 //Land 110-
		 ground[110].X=900;
		 ground[110].Y=display.height- -400;
		 ground[111].X=1000;
		 ground[111].Y=display.height- -400;
		 ground[112].X=1100;
		 ground[112].Y=display.height- -400;
		 ground[113].X=1200;
		 ground[113].Y=display.height- -400;
		 ground[114].X=1300;
		 ground[114].Y=display.height- -400;
		 ground[115].X=1400;
		 ground[115].Y=display.height- -400;
		 ground[116].X=1500;
		 ground[116].Y=display.height- -400;
		 ground[117].X=1600;
		 ground[117].Y=display.height- -400;
		 
		 ground[118].X=1700;
		 ground[118].Y=display.height- -400;
		 ground[119].X=1800;
		 ground[119].Y=display.height- -400;
		 
		 ground[124].X=1900;
		 ground[124].Y=display.height- -400;
		 
		 ground[127].X=2000;
		 ground[127].Y=display.height- -400;
		 //Jumps
		 ground[120].X=1700;
		 ground[120].Y=display.height- -350;
		 ground[121].X=1800;
		 ground[121].Y=display.height- -350;
		 ground[122].X=1200;
		 ground[122].Y=display.height- -350;
		 ground[123].X=1300;
		 ground[123].Y=display.height- -350;
		 ground[125].X=1900;
		 ground[125].Y=display.height- -300;
		 ground[126].X=2000;
		 ground[126].Y=display.height- -300;

		 //Land 128-137
		 ground[128].X=2300;
		 ground[128].Y=display.height- -300;
		 ground[128].W=100
		 ground[128].H=50
		 ground[129].X=2400;
		 ground[129].Y=display.height- -300;
		 ground[129].W=100
		 ground[129].H=50
		 ground[130].X=2700;
		 ground[130].Y=display.height- -300;
		 ground[131].X=2800;
		 ground[131].Y=display.height- -300;
		 ground[132].X=2900;
		 ground[132].Y=display.height- -300;
		 
		 ground[136].X=3200;
		 ground[136].Y=display.height- -400;
		 ground[136].W=100
		 ground[136].H=100
		 ground[137].X=3300;
		 ground[137].Y=display.height- -400;
		 ground[137].W=100
		 ground[137].H=100
		 //Fill 133-135
		 ground[133].X=2800;
		 ground[133].Y=display.height- -400;
		 ground[134].X=2700;
		 ground[134].Y=display.height- -400;
		 ground[135].X=2900;
		 ground[135].Y=display.height- -400;
		 
		 //walls 138-240
		 ground[138].X=3100;
		 ground[138].Y=display.height- 600;
		 ground[139].X=3100;
		 ground[139].Y=display.height- 600;
		 ground[140].X=3100;
		 ground[140].Y=display.height- 500;
		 ground[141].X=3100;
		 ground[141].Y=display.height- 400;
		 ground[142].X=3100;
		 ground[142].Y=display.height- 300;
		 ground[143].X=3100;
		 ground[143].Y=display.height- 200;
		 ground[144].X=3100;
		 ground[144].Y=display.height- 100;
		 ground[145].X=3200;
		 ground[145].Y=display.height- 600;
		 ground[145].X=3200;
		 ground[146].Y=display.height- 600;
		 ground[147].X=3200;
		 ground[147].Y=display.height- 500;
		 ground[148].X=3200;
		 ground[148].Y=display.height- 400;
		 ground[149].X=3200;
		 ground[149].Y=display.height- 300;
		 ground[150].X=3200;
		 ground[150].Y=display.height- 200;
		 ground[151].X=3200;
		 ground[151].Y=display.height- 100;
		 ground[152].X=3300;
		 ground[152].Y=display.height- 600;
		 ground[153].X=3300;
		 ground[153].Y=display.height- 500;
		 ground[154].X=3300;
		 ground[154].Y=display.height- 400;
		 ground[155].X=3300;
		 ground[155].Y=display.height- 300;
		 ground[156].X=3300;
		 ground[156].Y=display.height- 200;
		 ground[157].X=3300;
		 ground[157].Y=display.height- 100;
		 ground[158].X=3300;
		 ground[158].Y=display.height- 600;
		 ground[159].X=3400;
		 ground[159].Y=display.height- 500;
		 ground[160].X=3400;
		 ground[160].Y=display.height- 400;
		 ground[161].X=3400;
		 ground[161].Y=display.height- 300;
		 ground[162].X=3400;
		 ground[162].Y=display.height- 200;
		 ground[163].X=3400;
		 ground[163].Y=display.height- 100;
		 ground[164].X=3500;
		 ground[164].Y=display.height- 200;
		 ground[165].X=3500;
		 ground[165].Y=display.height- 100;
		 ground[166].X=3600;
		 ground[166].Y=display.height- 200;
		 ground[167].X=3600;
		 ground[167].Y=display.height- 100;
		 ground[168].X=3700;
		 ground[168].Y=display.height- 200;
		 
		 //Land
		 ground[169].X=3400;
		 ground[169].Y=display.height- -300;
		 ground[170].X=3500;
		 ground[170].Y=display.height- -300;
		 
		 //Wall
		 ground[171].X=3700;
		 ground[171].Y=display.height- 100;
		 ground[172].X=3700;
		 ground[172].Y=display.height- 200;
		 ground[173].X=3800;
		 ground[173].Y=display.height- 100;
		 ground[174].X=3800;
		 ground[174].Y=display.height- 200;
		 
		 //Fill
		 ground[180].X=3400;
		 ground[180].Y=display.height- -400;
		 ground[180].W=100
		 ground[180].H=100
		 ground[181].X=3500;
		 ground[181].Y=display.height- -400;
		 ground[181].W=100
		 ground[181].H=100
		 ground[200].X=3500;
		 ground[200].Y=display.height- 300;
		 ground[201].X=3600;
		 ground[201].Y=display.height- 300;
		 ground[202].X=3700;
		 ground[202].Y=display.height- 300;
		 ground[203].X=3800;
		 ground[203].Y=display.height- 300;
		 ground[204].X=3900;
		 ground[204].Y=display.height- 100;
		 ground[205].X=3900;
		 ground[205].Y=display.height- 200;
		 ground[206].X=3900;
		 ground[206].Y=display.height- 300;
		 ground[207].X=4000;
		 ground[207].Y=display.height- 100;
		 ground[208].X=4000;
		 ground[208].Y=display.height- 200;
		 ground[209].X=4000;
		 ground[209].Y=display.height- 300;
		 ground[210].X=4100;
		 ground[210].Y=display.height- 100;
		 ground[211].X=4100;
		 ground[211].Y=display.height- 200;
		 ground[212].X=4100;
		 ground[212].Y=display.height- 300;
		 ground[213].X=4200;
		 ground[213].Y=display.height- 200;
		 ground[214].X=4200;
		 ground[214].Y=display.height- 300;
		 ground[215].X=4300;
		 ground[215].Y=display.height- 200;
		 ground[216].X=4300;
		 ground[216].Y=display.height- 300;
		 ground[217].X=4400;
		 ground[217].Y=display.height- 200;
		 ground[218].X=4400;
		 ground[218].Y=display.height- 300;
		 ground[219].X=4500;
		 ground[219].Y=display.height- 200;
		 ground[220].X=4500;
		 ground[220].Y=display.height- 300;
		 ground[221].X=4600;
		 ground[221].Y=display.height- 200;
		 ground[222].X=4600;
		 ground[222].Y=display.height- 300;
		 
		 //Land
		 ground[182].X=3700;
		 ground[182].Y=display.height- -200;
		 ground[182].W=100
		 ground[182].H=50
		 ground[183].X=3800;
		 ground[183].Y=display.height- -200;
		 ground[183].W=100
		 ground[183].H=50
		 ground[184].X=4000;
		 ground[184].Y=display.height- -300;
		 
		 ground[185].X=4000;
		 ground[185].Y=display.height- -400;
		 ground[186].X=4000;
		 ground[186].Y=display.height- -500;
		
  		 ground[187].X=4000;
		 ground[187].Y=display.height- -600;
		 ground[188].X=4100;
		 ground[188].Y=display.height- -400;
		 ground[221].X=4100;
		 ground[221].Y=display.height- -500;
		 ground[222].X=4100;
		 ground[222].Y=display.height- -600;
		 ground[223].X=4200;
		 ground[223].Y=display.height- -500;
		 ground[224].X=4200;
		 ground[224].Y=display.height- -600;
		 ground[225].X=4300;
		 ground[225].Y=display.height- -500;
		 ground[226].X=4300;
		 ground[226].Y=display.height- -600;
		 ground[227].X=4400;
		 ground[227].Y=display.height- -500;
		 ground[228].X=4400;
		 ground[228].Y=display.height- -600;
		 
		 //End to this part/Gap
		 ground[229].X=4900;
		 ground[229].Y=display.height- -500;
		 ground[230].X=4900;
		 ground[230].Y=display.height- -600;
		 ground[231].X=5000;
		 ground[231].Y=display.height- -500;
		 ground[232].X=5000;
		 ground[232].Y=display.height- -600;
		 ground[233].X=5100;
		 ground[233].Y=display.height- -500;
		 ground[234].X=5100;
		 ground[234].Y=display.height- -600;
		 
		 //Doorspot x=5100, -400
		 ground[235].X=5200;
		 ground[235].Y=display.height- -500;
		 ground[236].X=5200;
		 ground[236].Y=display.height- -600;
		 
		 //Final walls
		 ground[237].X=5300;
		 ground[237].Y=display.height- -100;
		 ground[238].X=5300;
		 ground[238].Y=display.height- -200;
		 ground[239].X=5300;
		 ground[239].Y=display.height- -300;
		 ground[240].X=5300;
		 ground[240].Y=display.height- -400;
		 ground[241].X=5300;
		 ground[241].Y=display.height- -500;
		 ground[242].X=5300;
		 ground[242].Y=display.height- -600;
		 ground[243].X=5300;
		 ground[243].Y=display.height- 0;
		 
		 ground[245].X=5400;
		 ground[245].Y=display.height- -100;
		 ground[246].X=5400;
		 ground[246].Y=display.height- -200;
		 ground[247].X=5400;
		 ground[247].Y=display.height- -300;
		 ground[248].X=5400;
		 ground[248].Y=display.height- -400;
		 ground[249].X=5400;
		 ground[249].Y=display.height- -500;
		 ground[250].X=5400;
		 ground[250].Y=display.height- -600;
		 ground[251].X=5400;
		 ground[251].Y=display.height- 0;
		 
		 ground[252].X=5500;
		 ground[252].Y=display.height- -100;
		 ground[253].X=5500;
		 ground[253].Y=display.height- -200;
		 ground[254].X=5500;
		 ground[254].Y=display.height- -300;
		 ground[255].X=5500;
		 ground[255].Y=display.height- -400;
		 ground[256].X=5500;
		 ground[256].Y=display.height- -500;
		 ground[257].X=5500;
		 ground[257].Y=display.height- -600;
		 ground[258].X=5500;
		 ground[258].Y=display.height- 0;
		 
		 
		 
		 ground[283].X=4900;
		 ground[283].Y=display.height- -1000;
		 ground[284].X=4900;
		 ground[284].Y=display.height- -1100;
		 ground[285].X=5000;
		 ground[285].Y=display.height- -1000;
		 ground[286].X=5000;
		 ground[286].Y=display.height- -1100;
		 ground[287].X=5100;
		 ground[287].Y=display.height- -1000;
		 ground[288].X=5100;
		 ground[288].Y=display.height- -1100;
		 
		 //Doorspot x=5200
		 ground[289].X=5200;
		 ground[289].Y=display.height- -1000;
		 ground[290].X=5200;
		 ground[290].Y=display.height- -1100;
		 
		 //Final walls2
		 ground[291].X=5300;
		 ground[291].Y=display.height- -1000;
		 ground[292].X=5300;
		 ground[292].Y=display.height- -1100;
		 ground[293].X=5300;
		 ground[293].Y=display.height- -1000;
		 ground[294].X=5300;
		 ground[294].Y=display.height- -1100;
		 ground[295].X=5300;
		 ground[295].Y=display.height- -1000;
		 ground[296].X=5300;
		 ground[296].Y=display.height- -1100;
		 ground[297].X=5300;
		 ground[297].Y=display.height- 0;
		 
		 ground[298].X=5400;
		 ground[298].Y=display.height- -1000;
		 ground[299].X=5400;
		 ground[299].Y=display.height- -1100;
		 ground[300].X=5400;
		 ground[300].Y=display.height- -1000;
		 ground[301].X=5400;
		 ground[301].Y=display.height- -1100;
		 ground[302].X=5400;
		 ground[302].Y=display.height- -1000;
		 ground[303].X=5400;
		 ground[303].Y=display.height- -1100;
		 ground[304].X=5400;
		 ground[304].Y=display.height- 0;
		 
		 ground[305].X=5500;
		 ground[305].Y=display.height- -600;
		 ground[306].X=5500;
		 ground[306].Y=display.height- -700;
		 ground[307].X=5500;
		 ground[307].Y=display.height- -800;
		 ground[308].X=5500;
		 ground[308].Y=display.height- -900;
		 ground[309].X=5500;
		 ground[309].Y=display.height- -1000;
		 ground[310].X=5500;
		 ground[310].Y=display.height- -1100;
		 ground[311].X=5500;
		 ground[311].Y=display.height- 0;
		 
		 //Going backwards
		 ground[312].X=4800;
		 ground[312].Y=display.height- -1000;
		 ground[313].X=4800;
		 ground[313].Y=display.height- -1100;
		 ground[314].X=4700;
		 ground[314].Y=display.height- -1000;
		 ground[315].X=4700;
		 ground[315].Y=display.height- -1100;
		 ground[316].X=4600;
		 ground[316].Y=display.height- -1000;
		 ground[317].X=4600;
		 ground[317].Y=display.height- -1100;
		 ground[318].X=4500;
		 ground[318].Y=display.height- -1000;
		 ground[319].X=4500;
		 ground[319].Y=display.height- -1100;
		 ground[320].X=4400;
		 ground[320].Y=display.height- -1000;
		 ground[321].X=4400;
		 ground[321].Y=display.height- -1100;
		 ground[322].X=4400;
		 ground[322].Y=display.height- -900;
		 ground[323].X=4400;
		 ground[323].Y=display.height- -800;
		 ground[324].X=4400;
		 ground[324].Y=display.height- -700;
		 
		 ground[325].X=4500;
		 ground[325].Y=display.height- -600;
		 
		 ground[326].X=4800;
		 ground[326].Y=display.height- -600;
		 
		 
		 
		 
}