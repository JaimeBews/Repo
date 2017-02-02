var W, S, A, D, T,F,G,H;
function keyDown(e){
	if (String.fromCharCode(e.keyCode)== "W"){
		W = true;
	}
	if (String.fromCharCode(e.keyCode)=="S"){
		S= true;
	}
	if (String.fromCharCode(e.keyCode)=="A"){
		A= true;
	}
	if (String.fromCharCode(e.keyCode)=="D"){
		D= true;	
	}		
	if (String.fromCharCode(e.keyCode)== "T"){
		T = true;				
	}
	if (String.fromCharCode(e.keyCode)=="G"){
		G= true;
	}
	if (String.fromCharCode(e.keyCode)=="F"){
		F= true;
	}
	if (String.fromCharCode(e.keyCode)=="H"){
		H= true;
	}				
}
function keyUp(e){
	if (String.fromCharCode(e.keyCode)== "W"){
		W = false;
	}
	if (String.fromCharCode(e.keyCode)== "S"){
		S = false;
	}
	if (String.fromCharCode(e.keyCode)== "A"){
		A = false;
	}
	if (String.fromCharCode(e.keyCode)== "D"){
		D = false;
	}	
	if (String.fromCharCode(e.keyCode)== "T"){
		T = false;
	}
	if (String.fromCharCode(e.keyCode)=="G"){
		G= false;
	}
	if (String.fromCharCode(e.keyCode)=="F"){
		F= false;
	}
	if (String.fromCharCode(e.keyCode)=="H"){
		H= false;
	}				
}