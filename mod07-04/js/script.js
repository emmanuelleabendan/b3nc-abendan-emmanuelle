function changeBackgroundColor() {
	var	newColor = document.getElementById("newBackgroundColor").value;

	switch (newColor) {
		case "red":
			document.getElementById("mainWrapper").style.backgroundColor = "red";
			document.getElementById("theMessage").innerHTML = "Your new background color is red!!!";
			document.getElementById("theMessage").style.color = "#fff";
			break;
		case "orange":
			document.getElementById("mainWrapper").style.backgroundColor = "orange";
			document.getElementById("theMessage").innerHTML = "Your new background color is orange!!!";
			document.getElementById("theMessage").style.color = "#000";
			break;		
		case "yellow":
			document.getElementById("mainWrapper").style.backgroundColor = "yellow";
			document.getElementById("theMessage").innerHTML = "Your new background color is yellow!!!";
			document.getElementById("theMessage").style.color = "#000";
			break;
		case "green":
			document.getElementById("mainWrapper").style.backgroundColor = "green";
			document.getElementById("theMessage").innerHTML = "Your new background color is green!!!";
			document.getElementById("theMessage").style.color = "#fff";
			break;		
		case "blue":
			document.getElementById("mainWrapper").style.backgroundColor = "blue";
			document.getElementById("theMessage").innerHTML = "Your new background color is blue!!!";
			document.getElementById("theMessage").style.color = "#fff";
			break;
		case "indigo":
			document.getElementById("mainWrapper").style.backgroundColor = "indigo";
			document.getElementById("theMessage").innerHTML = "Your new background color is indigo!!!";
			document.getElementById("theMessage").style.color = "#fff";
			break;		
		case "violet":
			document.getElementById("mainWrapper").style.backgroundColor = "violet";
			document.getElementById("theMessage").innerHTML = "Your new background color is violet!!!";
			document.getElementById("theMessage").style.color = "#000";
			break;
		default:
			break;
	}
}
