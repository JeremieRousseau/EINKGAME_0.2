
function beginbyright(){
   sleep();
if ( goY !== stopY && goX !== stopX  ) {

                              chooseMovement();
                              
}else{
   console.log("STOPA");
}

}
function chooseMovement(){
needle = false;

if ( goY < stopY && goX < stopX  && needle == false ) {
           goDiaUpRight();
            needle = true;
}
if ( goY < stopY && goX > stopX  && needle == false ) {
           goDiaDownRight();
            needle = true;
}
if ( goY > stopY && goX < stopX  && needle == false ) {
           goDiaUpLeft();
            needle = true;
}
if ( goY > stopY && goX > stopX  && needle == false ) {
           goDiaDownLeft();
            needle = true;
}
if ( goY < stopY && needle == false ) {
           oRight();
            needle = true;
}
if ( goX < stopX && needle == false ){
           goUp(); 
            needle = true;
}
if ( goX > stopX && needle == false ){
           goDown(); 
            needle = true;
}
if ( goY > stopY && needle == false ){
           goLeft(); 
            needle = true;
}

}


function sleep(){

xhrSlp = new XMLHttpRequest(); 

	  xhrSlp.open("POST", "../PHP/Class_sleep.php", true);
	  xhrSlp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	  //invoice a big string of color and a number to generate a save with two post treatement
	var sendparams = "Cid="+ (goX + v + goY) ;
	xhrSlp.send(sendparams);

	xhrSlp.onreadystatechange = function(){
		if(xhrSlp.readyState == 4 && xhrSlp.status == 200){
         
         console.log(xhrSlp.responseText);
		beginbyright();	
		}
    }
}



/*******************************************************
********************************************************/






	function goRight(){
		Id( goX + v + goY ).className = "floor";
		goX += 0;
		goY += 1;
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
		goX -= 1;
		goY += 1;
		Id( goX + v + goY ).className = "unit";
	}
	
	function goLeft(){
		Id( goX + v + goY ).className = "floor";
		goX -= 0;
		goY -= 1;
		Id( goX + v + goY ).className = "unit";
	}
	function goDiaUpLeft(){
		Id( goX + v + goY ).className = "floor";
		goX += 1;
		goY -= 1;
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
		goX += 1;
		goY += 0;
		Id( goX + v + goY ).className = "unit";
	}
	function goDown(){
		Id( goX + v + goY ).className = "floor";
		goX -= 1;
		goY += 0;
		Id( goX + v + goY ).className = "unit";
	}