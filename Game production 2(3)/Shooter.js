var bullet= new Array();


function Shooter(){
	for (i=0;i<shooter.length;i++){
		createBullet(shooter[i].X,shooter[i].Y);
	}
}
function createBullet(shootX,shootY){
	console.log("Happening");
	
	bullet.push(new Object("images/wasd.png",shootX,shootY,50,50));
		CurrentBullet = bullet.length-1;
		bullet[CurrentBullet].xdist = test.X-shootX;
		bullet[CurrentBullet].ydist = test.Y-shootY;
		bullet[CurrentBullet].distance = Math.sqrt(bullet[CurrentBullet].xdist*bullet[CurrentBullet].xdist + bullet[CurrentBullet].ydist*bullet[CurrentBullet].ydist);
		bullet[CurrentBullet].Bspeed = bullet[CurrentBullet].distance/5;
		bullet[CurrentBullet].lifespan=300;
}
function updateBullet(){
	for(i=0;i<bullet.length;i++){
		bullet[i].X +=bullet[i].xdist/bullet[i].Bspeed;
		bullet[i].Y +=bullet[i].ydist/bullet[i].Bspeed;
		bullet[i].lifespan --;
		if (bullet[i].lifespan<=0){
			bullet.splice(bullet[i],1)
		}
	}
}


