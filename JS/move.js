/* Class To mplement movements  */


/*

goXgoY et stopX et stop Y sont pas globale??
bouvle infinies

*/

//Vr = 10;
function beginbyright(){
            myLoop();
      	}
clock = 0;      
        
	function stop(){
            clearInterval( clock );
                        console.log(clock);
    }



function myLoop(){
goNxt = "again";

setTimeout( chooseMovement, 250);
 function chooseMovement(){

switch(goNxt){
case "again" :
            if ( goY != stopY ) {
                console.log("A");
            if ( goY < stopY) { goRight(); }
            if( goY > stopY ){ goLeft(); }
            if ( goY != stopY) { goNxt = "again"; }else{ if (goX != stopX) { goNxt = "again";
                                   }else{ goNxt = "stop";  } }   
}else{
            console.log("B");
            if ( goX < stopX) { goUp(); 
            }
            if ( goX > stopX) {  goDown(); 
            }
            if (goX != stopX) { goNxt = "again"; }else{ goNxt = "stop";  }           
}

break;                       
            case "stop" :
            console.log(goNxt);
           
            break;
            }
		}
}



  
		
		/*function beginbyleft(){
			if(goX !== stopX && goY !== stopY){
				if(goX < SIZE && goY < SIZE){
			setRight(4);
			setDiaUpRight(4);
            setDiaDownRight(4);
			setUp(3);
			setDown(3);
			setDiaUpLeft(2);
			setDiaDownLeft(2);
			setLeft(1);
			chooseNextCase();
				}
			}
		}

		function beginbytop(){
			if(goX !== stopX && goY !== stopY){
				if(goX < SIZE && goY < SIZE)
			setRight(3);
			setDiaUpRight(2);
            setDiaDownRight(4);
			setUp(1);
			setDown(3);
			setDiaUpLeft(2);
			setDiaDownLeft(4);
			setLeft(3);
			chooseNextCase();
				}
			}
		}
		function beginbydown(){
			if(goX !== stopX && goY !== stopY){
				if(goX < SIZE && goY < SIZE){
			setRight(3);
			setDiaUpRight(4);
            setDiaDownRight(2);
			setUp(4);
			setDown(1);
			setDiaUpLeft(4);
			setDiaDownLeft(2);
			setLeft(3);
			chooseNextCase();
				}
			}
		}

	function goXgoY(){
		goX = parseInt(g[0][0]);
		goY = parseInt(g[0][1]);
	}
	function stopXstopY(){
		stopX = parseInt(t[0]);
		stopY = parseInt(t[1]);
	}
	var F = [];

	function setDiaUpRight(ParPath){
		// C.X += 1; C.Y += 1;
		G = 14; 
		DiaUpRight = G + Vr*ParPath;
		F.push(DiaUpRight);
	}

	function setRight(ParPath){
		// C.X += 1; C.Y += 0;
		G = 10; 
			Right = G + Vr*ParPath ;
				F.push(Right);
	}
	
	function setDiaDownRight(ParPath){
		// C.X += 1 C.Y -= 1; 
		G = 14;
			DiaDownRight = G + Vr*ParPath ;
				F.push(DiaDownRight);
	}
	
	function setDiaUpLeft(ParPath){
		// C.X -= 1; C.Y += 1;
		G = 14;
			DiaUpLeft = G + Vr*ParPath ;
				F.push(DiaUpLeft);
	}
	
	function setLeft(ParPath){
		// C.X -= 1; C.Y += 0; 
		G = 10; 
			Left = G + Vr*ParPath ; 
				F.push(Left);
	}
    function setDiaDownLeft(ParPath){
		// C.X -= 1; C.Y -= 1;
		G = 14; 
			DiaDownLeft = G + Vr*ParPath ; 
				F.push(DiaDownLeft);
	}
	
	function setUp(ParPath){
		// C.X += 0; Y += 1;
		G = 10;
			Up = G + Vr*ParPath;
				F.push(Up);
	}
	
	function setDown(ParPath){
		// C.X += 0; Y -= 1;
		G = 10; 
			Down = G + Vr*ParPath ; 
				F.push(Down);
	}
	*/

	
	
	function goRight(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
		beginbyright()
	}
	
	function goDiaUpRight(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDiaDownRight(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goLeft(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX -= 0;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaUpLeft(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaDownLeft(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goUp(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY += 0;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goDown(){
		//goXgoY();
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 0;
		Id( goX + v + goY ).className = "unit";
	}
	/*
	function chooseNextCase(){
	var min = Math.min.apply(null, F);

	switch(min){
		case Right : goRight();

		break;
		case DiaUpRight : goDiaUpRight();
		break;
		case DiaDownRight : goDiaDownRight();
		break;
		case Left : goLeft();
		break;
		case DiaUpLeft : goDiaUpLeft();
		break;
		case DiaDownLeft : goDiaDownLeft();
		break;
		case Up : goUp;
		break;
		case Down : goDown();
		break;
	}
	}*/



