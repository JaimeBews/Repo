var delayR = 0;
var delayAR = 0;
var delayL= 0;
var delay=0;
var animRow = 0;
var animCol = 75;
var animHeight=75;
var animWidth=50;
var counter =0;
var recently_Attacked = false;
var attacking = false;

function Animate(){ //needs a if(D&&A)

	if(D&&!attacking&&!A){
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

	 if(A&&!attacking&&!D){

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
		VFX_Sword.play();
		recently_Attacked=true;
		attacking = true;
		setTimeout(AttackDelay,2000);
		
	}
		if(attacking&&faceLeft){
			
		
			animCol= 150;
			animHeight=75;
			delay++;
			
			if(delay > 5){
				animWidth=75;
				counter++;
				animRow= 20;	//225
			}
			if(delay > 10){
				animWidth=75;
				counter++;
				animRow= 75;	//150
			}
			if(delay > 15){
				animWidth=75;
				counter++;
				animRow= 150;	//75
			}
			if(delay >= 20){
				animWidth=75;
				counter++;
				animRow= 225;	//20
				delay = 0;
				animCol= 0;
				animWidth= 50;
				animHeight=75;
				attacking = false;
			}
			
		}
			if(attacking&&faceRight){
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
}	
			
	function AttackDelay(){
		recently_Attacked = false;
	}
	//135H to 175H for attack left
	//0to 50, 50 to 120 120 to 190 190 to 250

		//ctx.drawImage(test.Sprite,animRow,animCol,test.W,test.H, test.X, test.Y, test.W, test.H);
		//method of drawing player

		
		
		//var fire = new Object("images/fire.png", 500, 200, 63.875, 127.75);

function FireAnim(timestamp){
	 setTimeout(function(){ //throttle requestAnimationFrame to 20fps
	 for(i=0;i<fire.length;i++){
		fire[i].animRow+=63.875;
		fire[i].fireCounter++;
		if(fire[i].fireCounter ==8){
			fire[i].fireResetCounter++;
			fire[i].fireCounter =0;
			fire[i].animRow=0;
			fire[i].animCol+=127.75;
		}
		if (fire[i].fireResetCounter==4){
			fire[i].fireResetCounter=0;
			fire[i].fireCounter=0;
			fire[i].animRow=0;
			fire[i].animCol=0
		}
	}
	requestAnimationFrame(FireAnim)
	 },1000/20)
}
	FireAnim();

	var enemyCounter=0;
	var enemyResetCounter =0;
	function EnemyAnim(timestamp){
	setTimeout(function(){ 
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
			setTimeout(function(){ 
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
		
		
		