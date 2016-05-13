//A bundle of functions to gor Right, Left, Up , Down and in diagonal
//a first jet.
//because border of the map is not implemented.



	function goRight(){
		console.log("goR");

		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 0;	
		if ( diffPath.indexOf( goX + v + goY )  >= 0 ) {
            		goX -= 1;
					goY += 0;
					console.log("wall");
					GOTO = "DiaDownRight";
        }
	if ( goX > SIZE ) {
		goX -= 1;
		alert("STOP");
	}
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaUpRight(){
		console.log("goDiaUR");
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 1;
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX -= 1;
					goY -= 1;
					GOBACKWALL = true;
					console.log("wall");
					GOTO = "DiaUpLeft";
        }
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaDownRight(){
		console.log("goDiaR");
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY -= 1;
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX -= 1;
					goY += 1;		
					console.log("wall");
				//	GOTO = "DiaDownLeft";

        }
		Id( goX + v + goY ).className = "unit";
	}
	
		
	function goLeft(){
	console.log("goL");
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 0;
		console.log(diffPath.indexOf( goX + v + goY )+"merde");
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX += 1;
					goY += 0;
					console.log("wall");
					console.log(GOTO);
					GOTO = "DiaDownLeft";
        }
		if ( goX == 0 ) {
			goY += 1;
			alert("STOP");
		}
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaUpLeft(){
		console.log("goDiaUL");
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 1; 
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX += 1;
					goY -= 1;
					console.log("wall");
					GOTO = "Left";
        }
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaDownLeft(){
		console.log("goDiaD");
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY -= 1;

		if ( diffPath.indexOf( goX + v + goY ) >= 0) {	
            		goX += 1;
					goY += 1;
					console.log("wall");
					GOTO = "Down";
        }

		Id( goX + v + goY ).className = "unit";
	}
	function goUp(){
		console.log("goU");
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY += 1;
		if ( diffPath.indexOf( goX + v + goY ) >= 0 ) {
            		goX += 0;
					goY -= 1;
					console.log("wall");
					GOTO = "DiaUpRight";

        }
		if ( goY > SIZE ) {
			goY -= 1;
			alert("STOP");
		}
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDown(){
		console.log("goD");
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY -= 1;
		if ( diffPath[ (goX + v + goY) ] >= 0) {
            		goX += 0;
					goY += 1;
					console.log("wall");
					GOTO = "DiaDownRight";
        }
		if ( goY == 0 ) {
			goY += 1;
			alert("STOP");
		}
		Id( goX + v + goY ).className = "unit";
	}