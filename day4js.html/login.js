"use strict";
import auth from "./library.js";
document.querySelector("button").onclick = function () {
  // alert('Button clicked!');
  var data1 =document.getElementById("x1").value;
  var data2 =document.getElementById("x2").value;
  console.log(data1);
  console.log(data2);

var authobj =new auth();
console.log(authobj);
var ans1 = authobj.checkemail(data1);
console.log(ans1);
var ans = authobj.checkpassword(data2);
    console.log(ans1);
    
    if (ans1 && ans2) {
        document.querySelector("p").innerText = "Valid email and password";
    } else {
 document.querySelector("p").innerText = "Invalid email or password";


    }
    
};
