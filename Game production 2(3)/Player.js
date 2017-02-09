var faceLeft;
var playerSpeed=8;
var faceRight;
var onground = false;
var onIce = false;
var flagRight= true;
var flagLeft= true;
function player(){
	
	test.isCollRight= function(obj){
				if (obj.X > this.X + this.W-35) return false;//objects left is further right than this's right side
				if (obj.X + obj.W < this.X+this.W)return false//objects right side is further left than this's left side
				if (obj.Y > this.Y + this.H-15)return false;//this's bottom
				if (obj.Y + obj.H < this.Y+15)return false;
				return true;
	}
	test.isCollLeft= function(obj){
				if (obj.X > this.X ) return false;//objects left is further right than this's right side
				if (obj.X + obj.W < this.X+35)return false//objects right side is further left than this's left side
				if (obj.Y > this.Y + this.H-15)return false;
				if (obj.Y + obj.H < this.Y+15)return false;
				return true;
	}
	test.isCollTop = function(obj){
				if (obj.X > this.X + this.W-8-35) return false;
				if (obj.X + obj.W < this.X+8+35)return false;
				if (obj.Y > this.Y )return false;//obj top lower than this top
				if (obj.Y + obj.H < this.Y)return false;//obj bottom is higher than this top
				return true;
	}
	test.isCollBot = function(obj)
			{
				if (obj.X > this.X + this.W-43) return false;
				if (obj.X + obj.W < this.X+8+35)return false;
				if (obj.Y > this.Y + this.H)return false;
				if (obj.Y + obj.H < this.Y+this.H-5)return false;
				return true;
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
	flagRight= true;
	flagLeft = true;
	test.Y += VelY;
	
	Collision();
	if(test.Y > 750){
		gameover=true;
		VelY = gravity;
	}
	if(flagTop){	
		VelY=gravity;
	}
		
	if(onground){		
		VelY = 0;
	}else{
		VelY += gravity;
	}
	if(onIce){
		IcePhysics();
	}
	function IcePhysics(){
		if (faceRight){
			test.X += 2;
		}
		if (faceLeft){
			test.X-=2;
		}
		
	}	
	if(W && onground){
	//	if(W){//flying
		VelY = -12;
		onground = false;
	}
	if(attacking){
		playerSpeed=0;
		//setTimeout(StopMoving,1000)
	}else
		playerSpeed=8;//remove this when needed, put in StopMoving
	if(A&&flagLeft){				
		test.X -= playerSpeed;
		faceRight=false;
		faceLeft=true;
	}
		
	if(D&&flagRight){
		test.X += playerSpeed;
		faceLeft=false;
		faceRight=true;

	}						
	if (lives== 0){
		gameover= true;
		lives = 3;
	}
		if(attacking&&enemy.isColl(test)){
				enemy.X-=20000;
				endDoor.Y = 272;
		}
	
}