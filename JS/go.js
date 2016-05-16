//A bundle of functions to gor Right, Left, Up , Down and in diagonal
//a first jet.
//because border of the map is not implemented.



	function r(){
		console.log("goR");
				goX += 1;
				goY += 0;
			right = true;
		if ( diffPath.indexOf( goX + v + goY )  >= 0 ) {
					goX -= 1;
					goY += 0;
					right = false;
		}
		if ( goX > SIZE ) {
			goX -= 1;
			right = false;
		}
			return right;
	}
	
	function dur(){
		goX += 1;
		goY += 1;
		diaUpRight = true
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX -= 1;
					goY -= 1;
					diaUpRight = false;
        }
		if ( goX > SIZE && goy  ) {
            		goX -= 1;
					goY -= 1;
					diaUpRight = false;
		}
		return diaUpRight;
	}
	
	function ddr(){
		console.log("goDiaR");
		goX += 1;
		goY -= 1;
		diaDownRight = true
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX -= 1;
					goY += 1;
					diaDownRight = false;
		}
		if ( goX > SIZE && goY < 1 ){
			goX -= 1;
			goY += 1;
			diaDownRight = false;
		}
		return diaDownRight;
	}
	
		
	function l(){
	console.log("goL");

		goX -= 1;
		goY += 0;
		left = true;
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX += 1;
					goY += 0;
					left = false;
        }
		if ( goX == 0 ) {
			goY += 1;
			left = false;
		}
		return left;
	}
	function dul(){
		console.log("goDiaUL");
		goX -= 1;
		goY += 1;
		diaUpLeft = true;
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {
            		goX += 1;
					goY -= 1;
					diaUpLeft = false;
        }
		return diaUpLeft;
	}
	function ddl(){
		console.log("goDiaD");

		goX -= 1;
		goY -= 1;
		diaDownLeft = true;
		if ( diffPath.indexOf( goX + v + goY ) >= 0) {	
            		goX += 1;
					goY += 1;
					diaDownLeft = false;
        }
		if (goX < 1 && goY < 1) {
		goX += 1;
		goY += 1;
		}
		return diaDownLeft;
	}
	
	function u(){
		goX += 0;
		goY += 1;
		up = true;
		if ( diffPath.indexOf( goX + v + goY ) >= 0 ) {
            		goX += 0;
					goY -= 1;
					up = false;
        }
		if ( goY > SIZE ) {
			goY -= 1;
			up = false;
		}
		return up;
	}
	
	function d(){
		console.log("goD");
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY -= 1;
		down = true;
		if ( diffPath.indexOf( goX + v + goY) >= 0) {
            		goX += 0;
					goY += 1;
					down = false;
        }
		if ( goY == 0 ) {
			goY += 1;
			down = false;
		} 
		return down;
	}