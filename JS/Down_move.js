function Dmove(){
	C.Y += 1;

	//go to the next line
	if( C.Y >= 20 ){
	C.Y = 20;
	}
	
    Ddone = 1;

	actualFr += 1;
		
    if( actualFr == 4 ){
       actualFr = 1;
     }
	Dblock = Id( ((C.Y )+v+ ( C.X )) ).className;
	if(Dblock == "wall"){
		C.Y -= 1;
	}
	
	Dvblock = Id( ((C.Y ) +v+ ( C.X )) );
	Dvblock.className = ( 'Dpac'+ actualFr );

	if(C.Y >= 2){
		var DcaseBefore = ( C.Y-1 );
		DVerifyCase = Id((DcaseBefore )+ v + ( C.X )).className;
		if( DVerifyCase = ( 'Dpac'+ actualFr) ){
				Id( ((DcaseBefore) +v+ ( C.X )) ).className = "floor";
		}else{
			Id( ((DcaseBefore) +v+ ( C.X )) ).className = "wall";
		}
	
	}
	//go to next C
}