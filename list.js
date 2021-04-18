var myList = document.querySelector(".header .links");
var myUl = document.querySelector(".header .links ul");
var myU = document.querySelector(".header .icons");
// console.log(myU)
myList.onclick = function(){
	myUl.classList.toggle("dis");
	myU.classList.toggle("diss")

}