
function goToTheTarget(){
     console.log("=====================START===============");
     clock = setInterval(chooseMovement, 1000);
     console.log("stop");
}

diffPath = [];
GOTO = "";

function chooseMovement(){
     needle = false;
     console.log("---"+GOTO);
     
     
     if ( GOTO ==  "DiaUpRight" ) {
          goDiaUpRight();
          needle = true;
	 }
     if ( GOTO ==  "DiaUpLeft" ) {
          goDiaUpLeft();
          needle = true;
	 }
          if ( GOTO ==  "DiaDownRight" ) {
          goDiaDownRight();
          needle = true;
	 }
     if ( GOTO == "DiaDownLeft" ) {
          console.log("T_diadownleft");
          goDiaDownLeft();
          needle = true;
	 }
               if ( GOTO ==  "Right" ) {
          goRight();
          GOTO = "";
          needle = true;
	 }
          if ( GOTO ==  "Left" ) {
          goLeft();
          needle = true;
	 }
          if ( GOTO ==  "Down" ) {
          goDown();
          needle = true;
	 }
          if ( GOTO ==  "Up" ) {
          goUp();
          got= "addf";
          needle = true;
	 }
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
          if ( goX < stopX && needle == false && GOTO == "" ) {
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
                     goLeft(); 
                     needle = true;
          }
     if ( goX == stopX && goY == stopY ) {
          clearInterval(clock);
     }
     
     returnId = ( goX + v + goY );
     if ( diffPath.indexOf( goX + v + goY ) == -1) {
     console.log(returnId+"deja dans array");
     }
     else{
          diffPath.push( returnId );
     }
}