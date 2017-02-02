
function Enemy(){
	E_onground = false;
	E_flagTop=false;
	E_flagRight= true;
	E_flagLeft = true;
	enemy.Y += E_VelY;
	var E_Speed = 1;
	E_Collision();
	
	if(E_onground){		
		E_VelY = 0;
	}else{
		E_VelY += gravity;
	}
	if(E_flagRight&&enemy.X< test.X)
		enemy.X+=E_Speed;

	if(E_flagLeft&&enemy.X> test.X)
		enemy.X-=E_Speed;
	
	for(i=0;i<spikes.length;i++){
		if(test.isColl(spikes[i]))
			gameover=true;
	}
}
function E_Collision(){
	for(i=0;i<ground.length; i++){
		if(enemy.isColl(ground[i])){	
			enemy.Y=ground[i].Y-enemy.H;
			E_onground = true;
		}
	}
	
	for(i=0;i<ground.length; i++){
		if(enemy.isCollRight(ground[i])){
		E_flagRight= false;
	
		}		
	}

	for(i=0;i<ground.length; i++){
		if(enemy.isCollLeft(ground[i])){
		E_flagLeft=false;
		}		
	}
	for(i=0;i<ground.length; i++){
		if(enemy.isCollRight(ground[i])){
		E_flagRight= false;
		
		}		
	}
	for(i=0;i<ground.length; i++){
		if(enemy.isCollLeft(ground[i])){
		E_flagLeft= false;
		
		}		
	}
}