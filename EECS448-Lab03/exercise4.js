function changecolor(){
let usercolor = document.getElementById("Bred").value;
let usercolor2 = document.getElementById("Bgreen").value;
let usercolor3 = document.getElementById("Bblue").value;
let parg = document.getElementById("para");
usercolor = usercolor.toString();
usercolor2 = usercolor2.toString();
usercolor3 = usercolor3.toString();
let border1 = document.getElementById("red").value;
let border2 = document.getElementById("green").value;
let border3 = document.getElementById("blue").value;
let width = document.getElementById("width").value;
border1 = border1.toString();
border2 = border2.toString();
border3 = border3.toString();
width = width.toString();
//var str = border1+"px"
para.style.borderStyle = "inset";
let rg = "rgb("+usercolor+","+usercolor2+","+usercolor3+")";
let rg2 ="rgb("+ border1 + "," + border2 + "," + border3 + ")";
let wid = width+"px";
parg.style.backgroundColor = rg;
//parg.style.backgroundBorder = str;
//parg.style.borderColor = "rgb("+border1+","+border2+","+border3+")";
    parg.style.borderColor = rg2;
    parg.style.borderWidth = wid;
}