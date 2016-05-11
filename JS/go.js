//A bundle of functions to gor Right, Left, Up , Down and in diagonal
//a first jet.
//because border of the map is not implemented.



	function goRight(){
		console.log("goR");
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 0;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX -= 1;
					goY += 0;
					console.log("wall");
					GOTO = "DiaDownRight";
        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaUpRight(){
		console.log("goDiaUR");
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 1;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX -= 1;
					goY -= 1;
					GOBACKWALL = true;
					console.log("wall");
					GOTO = "DiaUpLeft";
        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaDownRight(){
		console.log("goDiaR");
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY -= 1;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX -= 1;
					goY += 1;		
					console.log("wall");
				//	GOTO = "DiaDownLeft";

        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}
	
		
	function goLeft(){
	console.log("goL");
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 0;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX += 1;
					goY += 0;
					console.log("wall");
					console.log(GOTO);
					GOTO = "DiaDownLeft";
        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaUpLeft(){
		console.log("goDiaUL");
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 1; 
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX += 1;
					goY -= 1;
					console.log("wall");
					GOTO = "Left";
        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaDownLeft(){
		console.log("goDiaD");
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY -= 1;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX += 1;
					goY += 1;
					console.log("wall");
					GOTO = "Down";
        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}
	function goUp(){
		console.log("goU");
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY += 1;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX += 0;
					goY -= 1;
					console.log("wall");
					GOTO = "DiaUpRight";

        }else{
			GOTO = "";
		}
		
		Id( goX + v + goY ).className = "unit";
	}
	function goDown(){
		console.log("goD");
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY -= 1;
		block = Id( goX + v + goY ).className;
		if ( block == "wall") {
            		goX += 0;
					goY += 1;
					console.log("wall");
					GOTO = "DiaDownRight";

        }else{
			GOTO = "";
		}
		Id( goX + v + goY ).className = "unit";
	}