<<<<<<< HEAD
<<<<<<< HEAD
var ballDx;
var ballDy;

function Bossfight(){
	ClearAllArrays();
		test.X=500
		test.Y=372
		for (i=0; i<2; i++ ){
				Paddle[i] = new Object ("images/grass_tile.png", 100, display.height -100,20,100);
		}
		for (i=0; i<40; i++ ){
			ground[i] = new Object ("images/grass_tile.png", 100*i, display.height -100,100,100);
		}
		Paddle[0].X = 50;
		Paddle[1].X = screen.width - 50;
		Ball = new Object("images/grass_tile.png", 100, display.height -100,20,20);
}
function Boss(){
	
}
function Ball(){
	
	if (Ball.X<=0)
		ballDx= -ballDx;
	if (ball.X>= screen.width;)
		ballDx= -ballDx;
	if (Ball.Y<=0)
		ballDy= -ballDy;
	if (ball.Y>= screen.height;)
		ballDy= -ballDy;
	updateBall();
	
}
function updateBall(){
	Ball.X+=ballDx;
	Ball.Y +=ballDy;
=======
	
	function Level_One(){
		test.X=500
		test.Y=372
		enemy.X=8000;
		enemy.Y=500;
		endDoor.X=8300;
		endDoor.Y= -2372;
		for (i=0; i<250; i++ ){
			ground[i] = new Object ("images/grass_tile.png", 100*i, display.height -100,100,100);
		}
		for(i=0; i<5; i++){
			platform[i] = new Object ("images/platform.png");
		}
		for(i=0; i<3; i++){
			platformX[i] = new Object ("images/platform.png",3050,420,64,32);
		}
		/*for(i=0;i<5;i++){
			spikes[i] = new Object("images/spike.png",3100+i*75,490,50,50);
		}
		for (i=0; i<1; i++ ){
			fallAwayBlock[i] = new Object ("images/grass_tile.png", 500, display.height -150,100,100);
		}
		for (i=0; i<4; i++ ){
			iceBlock[i] = new Object ("images/grass_tile.png", 800+100*i, display.height- 300,100,100);
		}*/
	ground[220].Y=500;
	var indexj = 0;
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

		 
		 	for(i=0;i<platform.length;i++){
			moveArray[i] = platform[i].Y - 120;
			moveArray2[i] = platform[i].Y + 120;
			MaxArray[i]=true;
		}
			for(i=0;i<platformX.length;i++){
			moveArrayX[i] = platformX[i].X - 120;
			moveArray2X[i] = platformX[i].X + 120;
			MaxArrayX[i]=true;
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
		
		//Fall 68-80
		 ground[68].X=800;
		 ground[68].Y=display.height- 0;
		 ground[69].X=800;
		 ground[69].Y=display.height- -100;
		 ground[70].X=800;
		 ground[70].Y=display.height- -200;
		 ground[71].X=800;
		 ground[71].Y=display.height- -300;
		 ground[72].X=800;
		 ground[72].Y=display.height- -400;
		 
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
		 ground[136].H=50
		 ground[137].X=3300;
		 ground[137].Y=display.height- -400;
		 ground[137].W=100
		 ground[137].H=50
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
		 ground[180].H=50
		 ground[181].X=3500;
		 ground[181].Y=display.height- -400;
		 ground[181].W=100
		 ground[181].H=50
		 
		 
>>>>>>> fbbdee394b7cf01a691c018732de241821d97539
=======
<<<<<<< HEAD
var ballDx;
var ballDy;

function Bossfight(){
	ClearAllArrays();
		test.X=500
		test.Y=372
		for (i=0; i<2; i++ ){
				Paddle[i] = new Object ("images/grass_tile.png", 100, display.height -100,20,100);
		}
		for (i=0; i<40; i++ ){
			ground[i] = new Object ("images/grass_tile.png", 100*i, display.height -100,100,100);
		}
		Paddle[0].X = 50;
		Paddle[1].X = screen.width - 50;
		Ball = new Object("images/grass_tile.png", 100, display.height -100,20,20);
}
function Boss(){
	
}
function Ball(){
	
	if (Ball.X<=0)
		ballDx= -ballDx;
	if (ball.X>= screen.width;)
		ballDx= -ballDx;
	if (Ball.Y<=0)
		ballDy= -ballDy;
	if (ball.Y>= screen.height;)
		ballDy= -ballDy;
	updateBall();
	
}
function updateBall(){
	Ball.X+=ballDx;
	Ball.Y +=ballDy;
=======
	
	function Level_One(){
		test.X=500
		test.Y=372
		enemy.X=8000;
		enemy.Y=500;
		endDoor.X=8300;
		endDoor.Y= -2372;
		for (i=0; i<250; i++ ){
			ground[i] = new Object ("images/grass_tile.png", 100*i, display.height -100,100,100);
		}
		for(i=0; i<5; i++){
			platform[i] = new Object ("images/platform.png");
		}
		for(i=0; i<3; i++){
			platformX[i] = new Object ("images/platform.png",3050,420,64,32);
		}
		/*for(i=0;i<5;i++){
			spikes[i] = new Object("images/spike.png",3100+i*75,490,50,50);
		}
		for (i=0; i<1; i++ ){
			fallAwayBlock[i] = new Object ("images/grass_tile.png", 500, display.height -150,100,100);
		}
		for (i=0; i<4; i++ ){
			iceBlock[i] = new Object ("images/grass_tile.png", 800+100*i, display.height- 300,100,100);
		}*/
	ground[220].Y=500;
	var indexj = 0;
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

		 
		 	for(i=0;i<platform.length;i++){
			moveArray[i] = platform[i].Y - 120;
			moveArray2[i] = platform[i].Y + 120;
			MaxArray[i]=true;
		}
			for(i=0;i<platformX.length;i++){
			moveArrayX[i] = platformX[i].X - 120;
			moveArray2X[i] = platformX[i].X + 120;
			MaxArrayX[i]=true;
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
		
		//Fall 68-80
		 ground[68].X=800;
		 ground[68].Y=display.height- 0;
		 ground[69].X=800;
		 ground[69].Y=display.height- -100;
		 ground[70].X=800;
		 ground[70].Y=display.height- -200;
		 ground[71].X=800;
		 ground[71].Y=display.height- -300;
		 ground[72].X=800;
		 ground[72].Y=display.height- -400;
		 
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
		 ground[136].H=50
		 ground[137].X=3300;
		 ground[137].Y=display.height- -400;
		 ground[137].W=100
		 ground[137].H=50
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
		 ground[180].H=50
		 ground[181].X=3500;
		 ground[181].Y=display.height- -400;
		 ground[181].W=100
		 ground[181].H=50
		 
		 
>>>>>>> fbbdee394b7cf01a691c018732de241821d97539
>>>>>>> origin/master
}