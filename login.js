
let button = document.getElementById("button");
let webpage = document.getElementById("webpage");
let user_name = document.getElementById("Username");
let pass_word = document.getElementById("Password"); 


var  users = [
               {user:"Bree", 
               pass:"Taylor"
                }, 
               {user:"Alex", 
               pass: "Jackson" 
              },
               {user:"Ryan", 
               pass: "Farnon"
              },
               {user:"oneill", 
               pass:"Taylor"
               },
                            ];





//this checks if the username is valid
function Login () {
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;
  for(var i=0; i < users.length; i++) { 
	 if(users[i].user === username
    && users[i].pass === password) {
              return true; 
          }
        
      }
      return false;

    }


//This will let the user enter if they enter the right information on click
function SignIn() {

if(Login()) {
  window.location.href = "Draft.html";
}
else{
  alert("wrong username and password please try again");
}

}

//This will let the user enter if they enter the right informion on the enter key
function inputlength() {
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;
  return username.length && password.length;
}

//the actual event 
function enter(event) {
  if(inputlength()> 0 && event.keyCode === 13){
      SignIn();
  }
}
//I want to be able to turn password into stars when folks type in so you cannot see it 
//I want to be able to clear out the input box once someone is done typing in 


     button.addEventListener("click",SignIn);

     //add listeners to username and password
     
     pass_word.addEventListener("keypress",enter);

  



