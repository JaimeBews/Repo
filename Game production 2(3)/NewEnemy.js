
function NewEnemyfunc(){
	var E_Speed = 1;
	for(i=0;i<newEnemy.length;i++){
		newEnemy[i].E_onground = false;
		newEnemy[i].E_flagTop=false;
		newEnemy[i].E_flagRight= true;
		newEnemy[i].E_flagLeft = true;
		newEnemy[i].Y += newEnemy[i].E_VelY;

	
		if (test.isCollBot(newEnemy[i])&&hasnotbeenhit&&!attacking){
			wasHit();
		}
	}
	NewE_Collision();
	
	for(i=0;i<newEnemy.length;i++){
	if(newEnemy[i].E_onground){		
			newEnemy[i].E_VelY = 0;
		}else{
			newEnemy[i].E_VelY += gravity;
		}
		
		if(newEnemy[i].E_flagRight&&newEnemy[i].X< test.X){
			
			newEnemy[i].X+=E_Speed;
		}
		if(newEnemy[i].E_flagLeft&&newEnemy[i].X> test.X){
			newEnemy[i].X-=E_Speed;
		}
	}
	function wasHit(){
		VFX_NormalHit.volume = 0.5;			
		VFX_NormalHit.play();
		lives-=1;
		hasnotbeenhit = false;
		setTimeout(resetHit,1500)
	}
	function resetHit(){
		hasnotbeenhit=true;
	}
	
}
function NewE_Collision(){
	for(j=0;j<newEnemy.length;j++){
		for(i=0;i<ground.length; i++){
			if(newEnemy[j].isCollRight(ground[i])){
				
				newEnemy[j].E_flagRight= false;
			}	
		}			
	}
	for(j=0;j<newEnemy.length;j++){
		for(i=0;i<ground.length; i++){
			if(newEnemy[j].isCollBot(ground[i])){	
			
				newEnemy[j].Y=ground[i].Y-newEnemy[j].H;
				newEnemy[j].E_onground = true;
			}
		}
	}
	for(j=0;j<newEnemy.length;j++){
		for(i=0;i<ground.length; i++){
			if(newEnemy[j].isCollLeft(ground[i])){
				newEnemy[j].E_flagLeft=false;
			}	
		}		
	}
}