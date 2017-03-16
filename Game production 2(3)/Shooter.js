var bullet= new Array();


function Shooter(){						//maybe make it so each shooter keeps tracks of its current bullet count
	for (i=0;i<shooter.length;i++){
		shooter[i].xdist =test.X-shooter[i].X
		shooter[i].ydist = test.Y-shooter[i].Y;
		shooter[i].distance = Math.sqrt((shooter[i].xdist)*(shooter[i].xdist)+(shooter[i].ydist)*(shooter[i].ydist));
	
		if(shooter[i].distance<400&&bullet.length<1){
			VFX_Turret.play()
			createBullet(shooter[i].X,shooter[i].Y);
		}
	}
}
function createBullet(shootX,shootY){

	
	bullet.push(new Object("images/Asset/bullet.png",shootX,shootY,50,50));
		CurrentBullet = bullet.length-1;
		bullet[CurrentBullet].xdist = test.X-shootX;
		bullet[CurrentBullet].ydist = test.Y-shootY;
		bullet[CurrentBullet].distance = Math.sqrt(bullet[CurrentBullet].xdist*bullet[CurrentBullet].xdist + bullet[CurrentBullet].ydist*bullet[CurrentBullet].ydist);
		bullet[CurrentBullet].Bspeed = bullet[CurrentBullet].distance/5;
		bullet[CurrentBullet].lifespan=100;
}
function updateBullet(){
	for(i=0;i<bullet.length;i++){
		bullet[i].X +=bullet[i].xdist/bullet[i].Bspeed;
		bullet[i].Y +=bullet[i].ydist/bullet[i].Bspeed;
		bullet[i].lifespan --;
		if (bullet[i].lifespan<=0){
			bullet.splice(i,1)
		}
	}
}


