
function GameOver(){
	var RestartButton = new Object("images/L12Boss/Shield.png", 10000000 , display.height-100,300,200);
	var MainMenuButton = new Object("images/L12Boss/Shield.png", 10000000 , display.height-100,300,200);
	if(p2rectCheck(canvasMouseX,canvasMouseY,RestartButton.X,RestartButton.Y,RestartButton.W,RestartButton.H)==0){
		
	}
	if(p2rectCheck(canvasMouseX,canvasMouseY,MainMenuButton.X,MainMenuButton.Y,MainMenuButton.W,MainMenuButton.H)==0){
		level=0;
		mainmenu= true;
	}
}