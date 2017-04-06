var faceLeft;
var playerSpeed=8;
var faceRight;
var onground = false;
var onIce = false;
var flagRight= true;
var flagLeft= true;
var IceSpeed=2;
var JumpWallSpeed = 3;
var flying= false
var VelY=0;
var gravity = 0.5;
var lives=4;
function player(){

	test.isCollRight= function(obj){
				if (obj.X > this.X + this.W-30) return false;//objects left is further right than this's right side
				if (obj.X + obj.W < this.X+this.W)return false//objects right side is further left than this's left side
				if (obj.Y > this.Y + this.H-15)return false;//this's bottom
				if (obj.Y + obj.H < this.Y+15)return false;
				return true;
	}
	test.isCollLeft= function(obj){
				if (obj.X > this.X ) return false;//objects left is further right than this's right side
				if (obj.X + obj.W < this.X+30)return false//objects right side is further left than this's left side
				if (obj.Y > this.Y + this.H-15)return false;
				if (obj.Y + obj.H < this.Y+15)return false;
				return true;
	}
	test.isCollTop = function(obj){
				if (obj.X > this.X + this.W-43) return false;
				if (obj.X + obj.W < this.X+43)return false;
				if (obj.Y > this.Y )return false;//obj top lower than this top
				if (obj.Y + obj.H < this.Y)return false;//obj bottom is higher than this top
				return true;
	}
	if(faceRight){
		
		test.isCollBot = function(obj)
			{
				if (obj.X > this.X + this.W-43) return false;
				if (obj.X + obj.W < this.X+18)return false;
				if (obj.Y > this.Y + this.H)return false;
				if (obj.Y + obj.H < this.Y+this.H-5)return false;
				return true;
		}
	}
	if(faceLeft){

		test.isCollBot = function(obj)
			{
				if (obj.X > this.X + this.W-18) return false;
				if (obj.X + obj.W < this.X+43)return false;
				if (obj.Y > this.Y + this.H)return false;
				if (obj.Y + obj.H < this.Y+this.H-5)return false;
				return true;
		}
	}
	test.isUnder = function(obj)
			{
				if (obj.X > this.X + this.W) return false;
				if (obj.X + obj.W < this.X)return false;

				return true;
			}
	onIce = false;
	onground = false;
	
	flagTop=false;
	flagRight= false;
	flagLeft = false;
	onjumpwall = false;
	test.Y += VelY;

	Collision();

	if(flagTop){	
		VelY=gravity;
	}
		
	if(onground||CreditsScreen){		
		VelY = 0;
	}else{
		VelY += gravity;
	}
	if(onIce){
		IcePhysics();
		
	}
	function IcePhysics(){
		if (faceRight){
			test.X += IceSpeed;
		}
		if (faceLeft){
			test.X-=IceSpeed;
		}
		IceSpeed *=0.97;
		if(A||D){
			IceSpeed=2;
		}
	}	
	if(W&& flying){//flying
			
		VelY = -12;
		onground = false;
	}
	
	if(W && onground){
		
			VelY = -12;
			onground = false;
	}
	if(attacking){
		playerSpeed=0;
		//setTimeout(StopMoving,1000)
	}else 
		playerSpeed =8;
	
	if(faceRight&&A&&!D){
		test.X-=40;
	}
	if(faceLeft&&D&&!A){
		test.X+=40;
	}
	if(A&&!flagLeft&&!D){	
		test.X -= playerSpeed;			
		faceRight=false;
		faceLeft=true;
	}
		
	if(D&&!flagRight&&!A){
		test.X += playerSpeed;	
		faceLeft=false;
		faceRight=true;
	}	
	if (!(D||A)){
		
		playerSpeed = 0;
	}	
	if (lives== 0){
		gameover= true;
		
		lives = 3;
	}
	if (test.Y>=GroundBarrier.Y){
		console.log("lower than Gbarrier");
		gameover = true
	}
		if(attacking&&test.isColl(enemy)&&level == 0){
				enemy.X-=20000;
				endDoor.Y = 272;
		}
	for (i=0;i<newEnemy.length;i++){
		if(attacking&&test.isColl(newEnemy[i])){
			VFX_JumpLanded.play();
			newEnemy.splice(i,1);
		}
	}
}

	