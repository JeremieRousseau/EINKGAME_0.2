//function to go here on create an logo on a case 

//rousseau jeremie 22/04/2016

//on selectionne uen case vide un bâtiment ou une unité
//via son Id et sa classe


// Irajouter parId dans calss move et peut être gogo[itrGogoT][0]gogo[itrGogoT][1]
function Select(ParId){

	var getCase = Id(ParId).className;
//faire quelque chsoe en fonctionde l'idée det de la class
	switch(getCase){
		case "empty": 
			GoHere(ParId);
		break;
		case "unit": 
			selectUnit(ParId);
		break;
	}

}	
	
	
//function si c'est vide
function GoHere(ParId){

if( TkHere === 0 ){
	Id(ParId).className = "Here";
	TkHere = 1;
	XY(ParId);
	stopXstopY();
		if(TokengXY > 0){
			console.log(TokengXY+"a");
			start();
		}
}else{
	//remove the first point
    goStop = document.getElementsByClassName("Here")[0];
	goStop.className = "empty";
	TkHere = 0;
	//create a loop to avoid double clicking 
	GoHere(ParId);
	}
}

// variable nbr for gogo[gXY][X][Y];
var TokengXY = 0;

function selectUnit(ParId){

	Id(ParId).className = "selected_unit";
	XY( ParId );
	TokengXY += 1;
	unitXY( TokengXY );

}


function XY( numXY ){
   var NumXY = numXY;

  Mxy = NumXY.match(/\d+/g);
//undefined if no group selected
	return Mxy;
//return an string Mxy[0]
}

		gogo = [];
		gogo[0] = [];
		gogo[0][0] = 0;
		gogo[0][1] = 0;
		gogo[0][2] = [];
		
	var diffPath = [];
	//let's this line in place if not that create an little bug
	diffPath.push( gogo[0][0] + v + gogo[0][1] );

	function unitXY(s){
		X = parseInt(Mxy[0]);
		Y = parseInt(Mxy[1]);
		gogo[s] = [];
			gogo[s][0] = X;
			gogo[s][1] = Y;
			gogo[0][2] = [];
			
			//diffPath.push( gogo[s][0] + v + gogo[s][1] );
			
	}
	
	function stopXstopY(){
		stopX = parseInt(Mxy[0]);
		stopY = parseInt(Mxy[1]);
	}


function start(){

	console.log("ARRAY" + diffPath);
gogoInterval = setInterval( function timerB() {

	for( var itrGogo = 1 ; itrGogo < gogo.length; itrGogo++){


		(function(){

		//very important to let as this.
		var itrGogoT = itrGogo;
		
		//console.log(gogo[itrGogoT][0] == stopX && gogo[itrGogoT][1] == stopY );
		if( gogo[itrGogoT][0] == stopX && gogo[itrGogoT][1] == stopY ){
			console.log("stop");
			clearInterval(gogoInterval);
		}
        setTimeout( function timer(){

			//let empty the case where was the unit		
			Id(  gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ).className = "floor";
			
			//clear the  case's array to let' empty the position
			index = diffPath.indexOf((gogo[itrGogoT][0] + v + gogo[itrGogoT][1]));
			if (index > -1) {
				diffPath.splice(index, 1);
			}
			//to avoid to take two time the same direction per one seconde
			needle = false;
			
			if ( gogo[itrGogoT][1] < stopY && gogo[itrGogoT][0] < stopX && needle === false ) {
					 //console.log(" goDiaUpRight");
					  gogo[itrGogoT][0] += 1;
					  gogo[itrGogoT][1] += 1;
					if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ) >= 0) {
						gogo[itrGogoT][0] -= 1;
						gogo[itrGogoT][1] -= 1;
					}
					if ( gogo[itrGogoT][0] > SIZE && gogo[itrGogoT][1]  ) {
						gogo[itrGogoT][0] -= 1;
						gogo[itrGogoT][1] -= 1;
					}
					needle = true;
			}
			if ( gogo[itrGogoT][1] > stopY && gogo[itrGogoT][0] < stopX && needle === false ) {					  
					//console.log(" goDiaDownRight");
					gogo[itrGogoT][0] += 1;
					gogo[itrGogoT][1] -= 1;
					if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ) >= 0) {
						gogo[itrGogoT][0] -= 1;
						gogo[itrGogoT][1] += 1;
					}
					if ( gogo[itrGogoT][0] > SIZE && gogo[itrGogoT][1] < 1 ){
						gogo[itrGogoT][0] -= 1;
						gogo[itrGogoT][1] += 1;
					}
					needle = true;
			}
			if ( gogo[itrGogoT][1] < stopY && gogo[itrGogoT][0] > stopX && needle === false ) {
					console.log("//goDiaUpLeft");
					gogo[itrGogoT][0] -= 1;
					gogo[itrGogoT][1] += 1;
					if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ) >= 0) {
						gogo[itrGogoT][0] += 1;
						gogo[itrGogoT][1] -= 1;
					}
					needle = true;
			}
			if ( gogo[itrGogoT][1] > stopY && gogo[itrGogoT][0] > stopX && needle === false ) {
					//goDiaDownLeft
					gogo[itrGogoT][0] -= 1;
					gogo[itrGogoT][1] -= 1;
					if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ) >= 0) {	
						gogo[itrGogoT][0] += 1;
						gogo[itrGogoT][1] += 1;
					}
					if (gogo[itrGogoT][0] < 1 && gogo[itrGogoT][1] < 1) {
					gogo[itrGogoT][0] += 1;
					gogo[itrGogoT][1] += 1;
					}
					needle = true;
			}
			if ( gogo[itrGogoT][0] < stopX && needle === false ) {
				//console.log("right");
				//right
					    gogo[itrGogoT][0] += 1;
						gogo[itrGogoT][1] += 0;
					if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] )  >= 0 ) {
						gogo[itrGogoT][0] -= 1;
						gogo[itrGogoT][1] += 0;
					}
					if ( gogo[itrGogoT][0] > SIZE ) {
						gogo[itrGogoT][0] -= 1;
					}
					needle = true;
			}
			if ( gogo[itrGogoT][0] > stopX && needle === false ){
				//console.log("left");
				//left
				gogo[itrGogoT][0] -= 1;
				gogo[itrGogoT][1] += 0;
				if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ) >= 0) {
						gogo[itrGogoT][0] += 1;
						gogo[itrGogoT][1] += 0;
				}
				if ( gogo[itrGogoT][0] === 0 ) {
					gogo[itrGogoT][1] += 1;
				}
				needle = true;
			}
			if ( gogo[itrGogoT][1] > stopY && needle === false ){
				//console.log("down");
				//down
					gogo[itrGogoT][0] += 0;
					gogo[itrGogoT][1] -= 1;
					if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1]) >= 0) {
							gogo[itrGogoT][0] += 0;
							gogo[itrGogoT][1] += 1;
					}
					if ( gogo[itrGogoT][1] === 0 ) {
						gogo[itrGogoT][1] += 1;
					}
					needle = true;
			}
			if ( gogo[itrGogoT][1] < stopY && needle === false ){
				//console.log("up");
				//up
						gogo[itrGogoT][0] += 0;
						gogo[itrGogoT][1] += 1;
						if ( diffPath.indexOf( gogo[itrGogoT][0] + v + gogo[itrGogoT][1]) >= 0) {
								gogo[itrGogoT][0] += 0;
								gogo[itrGogoT][1] -= 1;
						}
					    if( gogo[itrGogoT][1]  >= SIZE ){
							gogo[itrGogoT][1] -= 1;
						}
						needle = true;
			}
			diffPath.push( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] );
			Id( gogo[itrGogoT][0] + v + gogo[itrGogoT][1] ).className = "unit";
		
		 //areaOfTarget = (gogo[itrGogoT][0] += 3 );
		 //console.log(areaOfTarget);
		 //
		
		
		
		}, itrGogoT*1000);
		}());
		}
		console.log("A");
	}, 1000);
}