//A bundle of functions to gor Right, Left, Up , Down and in diagonal
//a first jet.
//because border of the map is not implemented.

	function goRight(){
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 0;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaUpRight(){
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaDownRight(){
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goLeft(){
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 0;
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaUpLeft(){
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaDownLeft(){
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goUp(){
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goDown(){
		Id( goX + v + goY ).className = "floor";
		goX += ;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}