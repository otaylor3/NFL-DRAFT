var player = document.getElementById("Player");
var button = document.getElementById("submit");
let button1 = document.getElementById("submit2");
var playervalue = document.getElementById("Player").value;
let listing = document.getElementById("check");
let button2 = document.getElementById("submit3");
let button3 = document.getElementById("submit4");
let button4 = document.getElementById("submit5");
let bucket = document.getElementById("delete1");
let  garbage = document.getElementById("list");
let delete1 = document.getElementById("delete1");
let list1 = document.getElementsByClassName("trashy");


//loop through list 
const strike = () => {
	for(var i = 0  ; i < list1.length; i++){
		list1[i].addEventListener("click", strikeout);
	}
}
//strikeout 
const strikeout = () => {
	this.classlist.toggle("done");
}


var input = playervalue.length;

//creating a new fantasy player 

class league {
	constructor(name, position) {
		this.name = name;
		this.position = position;
	}
	introduce () {
		alert(`Hello ${this.name} you are a ${this.position}`);
	}
}

class players extends league {
	constructor(name,position){
		super(name,position);
	}
	intro () {
		console.log(`Hello ${this.name} you are a good ${this.position} `);
	}
}

kobe = new players("bryant", "shooter");

function introduce () {
	return kobe.introduce();
}


//creating new player to the fantasy board
function fun (){

	var playervalue = document.getElementById("Player").value;
	var list = document.getElementById("list");
	var newlist = document.createElement('li');
    newlist.appendChild(document.createTextNode(playervalue));
	list.appendChild(newlist);
    }

//creating new li element for the the accumulator
const newone = () => {
	let listing = document.getElementById("check");
	let newlist2 = document.createElement("li");
	newlist2.appendChild(document.createTextNode(topscore));
	listing.appendChild(newlist2);
}


//using the reduce loop to get total points scored 
let topqbs = [421, 348, 335]
const topscore = topqbs.reduce((accumular,num)=> {
      return accumular + num;
},0);

//using the filter loop to show the top scorer 
let fantasyscores = [{name: "Lamar Jackson",
            position: "qb",
            points: 421},
            {name:"Dak Prescott",
            position: "qb",
            points: 348},
            {name: "Jameis Winston",
            position: "qb",
            points:335

            }];

const topguys = fantasyscores.filter(player=> player.points > 400);

const mvp = () => {
	alert(topguys[0].name);
}

//using map loop to display how many points from receiving touchdowns scored by the top 5 
let allstars = [9,4,6,7,6];

const supertds = allstars.map((num)=> {
	return num * 6;
});

const superstar = () => 
{
alert(supertds);	
}

// console.log(topscore);


// function enter (event){
//     if (input > 0 && event.keyCode ===13) {
//     var playervalue = document.getElementById("Player").value;
// 	var list = document.getElementById("list");
// 	var newlist = document.createElement('li');
//     newlist.appendChild(document.createTextNode(playervalue));
// 	list.appendChild(newlist);
//     }

// }

// player.addEventListener("keypress",enter);

//using the delete button 
// const drop = () => {
// 	let trash = getElementsByClassName("trashy");
// 	let garbage = trash.parentNode;
// 	garbage.removeChild(trash);
  
// }

// function drop () {
//         var garbage = document.getElementById("list");
//         garbage.removeChild(garbage.childNodes);

// }

// Array.prototype.slice.call(delete1).forEach(function(item) {
// 	item.addEventListener("click", function(e) {
// 		e.target.parentNode.remove()
// 	});

// });

// bucket.addEventListener("click", drop);

button.addEventListener("click",fun);

button1.addEventListener("click", newone);

button2.addEventListener("click",mvp);

button3.addEventListener("click", superstar);

button4.addEventListener("click", introduce);



