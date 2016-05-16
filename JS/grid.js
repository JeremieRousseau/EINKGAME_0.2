function GRIDCREATED(){

//JS var no used :
//                   SIZE  = prompt("Please enter the size of the canvas", "20");
//JS future idea configure SIZE of the board  if we know the size of the screen ??

//SIZe 10 because it's better to work with Komodo IDE
SIZE = 10;

var div = Id("master");


// X = i so the fist case on top  are 1-10 after 2-10
//Y = j the bottom case on left is 10-1;
for(var j = 10; j ; j--)
{
	for(var i = 1; i <= SIZE; i++)
    {
		var p  = document.createElement("P");
		//var t =  document.createTextNode("P");
		//p.appendChild(t);
		p.setAttribute("id",  i + "-" + j);
		p.setAttribute("onClick", "Select(this.id)");
		p.setAttribute("class", "empty");
		div.appendChild(p);
	}
	var br  = document.createElement("BR");
    div.appendChild(br);
	}
	
	Id("5-5").className = "unit";
	
	Id("5-6").className = "wall";
	Id("5-7").className = "wall";
	
	Id("5-8").className = "wall";
	Id("6-8").className = "wall";
	Id("7-8").className = "wall";
	
 diffPath.push( "5-6", "5-7", "5-8", "5-9", "6-8", "7-8" );
}