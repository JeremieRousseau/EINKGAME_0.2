/*
	JS FILE 
	BY ROUUSEAU Jeremie 17-04-2016
	A list of functionto earn time when i write in js.

*/


/* */
doc = document;



  actualFr = 0;
  Rdone = 0;
  Ldone = 0;
  Ddone = 0;
  Udone = 0;
  
  R = 0;
  L = 0;
  D = 0;
  U = 0;
  
  /*List of tokens */
  TkHere = 0;          /*function goHere*/
  /*C for Cases */
  v = "-";
	var group = [];
  //tg target of go here



/*===================== FUNCTION or Var ParId =============================*/
//ParId = C.X + "-" + C.Y;

/*===================== FUNCTION getId =============================*/

	function Id( ParId ){
		return doc.getElementById( ParId );
	}

/*----------------------------------------------------------------*/
/*===================== FUNCTION getClass ==========================*/

	function Class( ParClass ){
		return doc.getElementsByClassName( ParClass );
	}

/*----------------------------------------------------------------*/

/*===================== FUNCTION getTag ==========================*/

	function Tag( ParTag ){
		return doc.getElementsByTagName( ParTag );
	}

/*----------------------------------------------------------------*/
