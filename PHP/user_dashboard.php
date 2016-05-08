<?php
session_start();
?>
  <?php 
	<!--
	/* if(isset($_SESSION["user_name_s"])){
		echo $_SESSION["user_name_s"];
		echo "click here ";
		echo "<a href='logout.php' title='logout' >to Logout.<a>";
	  }
	  */-->
	?>
<!DOCTYPE html>
  <html>
	<head>
	<title>Les Ténébres...</title>
	<link  rel="stylesheet" media="screen" type="text/css" title="template" href="../CSS/boards.css" >

	</head>
	<body onload="GRIDCREATED()">
	  <div id="master"> 
	  </div>
	  <br><br><br>
 <p class="soldier"></p>

 
	 

  	<script src="../JS/FrameworkJS/ShortCutWords.js" ></script>
		<script src="../JS/grid.js" ></script>
	<script src="../JS/go.js" ></script>
	<script src="../JS/move.js" ></script>
	<script src="../JS/goHere.js" ></script>
	<script src="../JS/move.js" ></script>	</body>
  </html>
