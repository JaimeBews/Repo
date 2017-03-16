function powerUp(){
	for (i=0; i<HealthPowerUp.length; i++){
		if (test.isColl(HealthPowerUp[i])){
			HealthPowerUp.splice(i,1)
			lives++;
			var temp = new Object("images/heart.png", 50, 0, 50, 50);
			Health.push(temp);
			
		}
	}
	
}