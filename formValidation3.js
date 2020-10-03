function validateTextbox() {
 var box = document.getElementById("name");
 var box2 = document.getElementById("address");

//class 46


if (box.value.length < 5 || box2.value.length < 5 )

//class 47 
 //if (box.value.length < 5 && box2.value.length < 5 )
  {
 alert("Please enter at least 5 characters");
 box.focus();
 box.style.border = "solid 3px red";
 return false;
 }

 }