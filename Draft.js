var player = document.getElementById("Player");
var button = document.getElementById("submit");

function fun (){
	var play = document.getElementById("Player").value;
	console.log(play);
}

button.addEventListener("click",fun);
