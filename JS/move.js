
function goToTheTarget(){
     console.log("=====================START===============");
     clock = setInterval(chooseMovement, 1000);
               if ( goY < stopY && goX < stopX ) {
			MUSTGOTO = "DIA_UP_RIGHT";
          }
          if ( goY > stopY && goX < stopX ) {
				MUSTGOTO = "DIA_DOWN_RIGHT";
          }
          if ( goY < stopY && goX > stopX ) {
				MUSTGOTO = "DIA_UP_LEFT";
          }
          if ( goY > stopY && goX > stopX ) {
				MUSTGOTO = "DIA_DOWN_LEFT";
          }
          if ( goX < stopX ) {
				MUSTGOTO = "RIGHT";
          }
          if ( goY < stopY ){
				GOTO = "LEFT";
          }
          if ( goX < stopX ){
                MUSTGOTO = "UP";
          }
          if ( goY > stopY ){
				MUSTGOTO = "DOWN";
          }

     console.log("stop");
}

diffPath = [];
GOTO = "";

function chooseMovement(){
     needle = false;
          if ( goY < stopY && goX < stopX  && needle == false ) {
                      goDiaUpRight();
                      needle = true;
          }
          if ( goY > stopY && goX < stopX  && needle == false ) {
                      goDiaDownRight();
                      needle = true;
          }
          if ( goY < stopY && goX > stopX  && needle == false ) {
                      goDiaUpLeft();
                      needle = true;
          }
          if ( goY > stopY && goX > stopX  && needle == false ) {
                      goDiaDownLeft();
                      needle = true;
          }
          if ( goX < stopX && needle == false ) {
                     goRight();
                     needle = true;
          }
          if ( goY < stopY  && needle == false ){
                     goUp();
                     needle = true;
             
          
          }
          if ( goY > stopY && needle == false ){
                     goDown(); 
                     needle = true;
          }
          if ( goX > stopX && needle == false ){
                     LEFT(); 
                     needle = true;
          }
     if ( goX == stopX && goY == stopY ) {
          clearInterval(clock);
     }
     
     returnId = ( goX + v + goY );
     if ( diffPath.indexOf( ( goX + v + goY) ) >= 0) {
          console.log(returnId+"deja dans array");
     }
     else{
          diffPath.push( returnId );
     }

}