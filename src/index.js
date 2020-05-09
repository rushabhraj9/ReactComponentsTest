import React from "react";
import ReactDOM from "react-dom";
const date=new Date();
const hours=date.getHours();
let wish="";
let color="";
if(hours>=24|| hours<=12){
   wish="Good Morning !";
   color="red";
}
if(hours>12 && hours<18){
  wish="Good Afternoon !";
  color="green";
}
if(hours>=18 && hours<24){
  wish="Good Evening !";
  color="blue";
}
ReactDOM.render(
  <div>
    <h1 style={{color:color,size:"150px"}}>{wish}</h1>
  </div>,
  document.getElementById("root"));
 