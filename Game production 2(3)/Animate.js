var delayR = 0;
var delayL= 0;
var delay=0;
var animRow = 0;
var animCol = 75;
var animHeight=75;
var animWidth=50;
var recently_Attacked = false;
function Animate(){ //needs a if(D&&A)
	if(D&&onground&&!attacking&&!A){
		animCol= 75;
		delayR++;
		animWidth= 50;
		animHeight=75;
		if(delayR > 5){
			counter++;
			animRow= (75)*counter
			delayR = 0;
		}
		if (counter>=3){
			counter= 0;
		}
	}	
	 if(A&&onground&&!attacking&&!D){
		animCol= 0;
		delayL++;
		animWidth= 50;
		animHeight=75;
		if(delayL > 5){
			counter++;
			animRow= 75*counter
			delayL = 0;
		}
		if (counter>=3){
			counter= 0;
		}
	}
	if(T&&onground&&!recently_Attacked){
		recently_Attacked=true;
		attacking = true;
		setTimeout(AttackDelay,2000);
		
	}
		if(attacking&&faceLeft){
			
			console.log(attacking);
			animCol= 150;
			animHeight=75;
			delay++;
			
			if(delay > 5){
				animWidth=50;
				counter++;
				animRow= 20;	//50
			}
			if(delay > 10){
				animWidth=75;
				counter++;
				animRow= 75;	//70
			}
			if(delay > 15){
				animWidth=75;
				counter++;
				animRow= 150;	//70
			}
			if(delay >= 20){
				animWidth=75;
				counter++;
				animRow= 225;	//60
				delay = 0;
				animCol= 0;
				animWidth= 50;
				animHeight=75;
				attacking = false;
			}
			
		}
			if(attacking&&faceRight){
			console.log(attacking);
			animCol= 225;
			animHeight=75;
			delay++;
			
			if(delay > 5){
				animWidth=75;
				counter++;
				animRow= 0;	//50
			}
			if(delay > 10){
				animWidth=75;
				counter++;
				animRow= 75;	//70
			}
			if(delay > 15){
				animWidth=75;
				counter++;
				animRow= 150;	//70
			}
			if(delay >= 20){
				animWidth=75;
				counter++;
				animRow= 225;	//60
				delay = 0;
				
				animCol= 75;
				animWidth= 50;
				animHeight=75;
				attacking = false;
			}
			
		}
	
			
	function AttackDelay(){
		recently_Attacked = false;
	}
	//135H to 175H for attack left
	//0to 50, 50 to 120 120 to 190 190 to 250
}
		//ctx.drawImage(test.Sprite,animRow,animCol,test.W,test.H, test.X, test.Y, test.W, test.H);
		//method of drawing player

		
		
		//var fire = new Object("images/fire.png", 500, 200, 63.875, 127.75);
		var fireCounter=0;
		var fireResetCounter=0;
function FireAnim(timestamp){
	 setTimeout(function(){ //throttle requestAnimationFrame to 20fps
	fire.animRow+=63.875;
	fireCounter++;
	if(fireCounter ==8){
		fireResetCounter++;
		fireCounter =0;
		fire.animRow=0;
		fire.animCol+=127.75;
	}
	if (fireResetCounter==4){
		fireResetCounter=0;
		fireCounter=0;
		fire.animRow=0;
		fire.animCol=0;
	}
	requestAnimationFrame(FireAnim)
	 },1000/20)
}
	FireAnim();

	var enemyCounter=0;
	var enemyResetCounter =0;
	function EnemyAnim(timestamp){
	setTimeout(function(){ //throttle requestAnimationFrame to 20fps
		enemy.animRow+=329;
		enemyCounter++;
		if(enemyCounter ==10){
			enemyResetCounter++;
			enemyCounter =0;
			enemy.animRow=0;
			enemy.animCol+=241;
		}
		if (enemyResetCounter==3){
			enemyResetCounter=0;
			enemyCounter=0;
			enemy.animRow=0;
			enemy.animCol=0;
		}
		requestAnimationFrame(EnemyAnim)
	},1000/15)
}
	EnemyAnim();
function StartAnimation(){
		function NewEnemyAnim(timestamp){
			setTimeout(function(){ //throttle requestAnimationFrame to 20fps
				for(i=0;i<newEnemy.length;i++){
					newEnemy[i].animRow+=329;
					newEnemy[i].enemyCounter++;
					if(newEnemy[i].enemyCounter ==10){
						newEnemy[i].enemyResetCounter++;
						newEnemy[i].enemyCounter =0;
						newEnemy[i].animRow=0;
						newEnemy[i].animCol+=241;
					}
					if (newEnemy[i].enemyResetCounter==3){
						newEnemy[i].enemyResetCounter=0;
						newEnemy[i].enemyCounter=0;
						newEnemy[i].animRow=0;
						newEnemy[i].animCol=0;
					}
				}
					requestAnimationFrame(NewEnemyAnim)
			},1000/15)
		}

		NewEnemyAnim();

		//fire 65 width and 120 height
}
		
		
		