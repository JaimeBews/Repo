var delayR = 0;
var delayL= 0;
var delay=0;
var animRow = 0;
var animCol = 0;
var animHeight=0;
var animWidth=0;
var recently_Attacked = false;
function Animate(){ //needs a if(D&&A)
	if(D&&onground&&!attacking){
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
	 if(A&&onground&&!attacking){
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