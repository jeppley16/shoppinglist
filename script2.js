
// ~~~~~~~~~~~~~~~~~ SUPPLIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ // 

// Selecting the elements of interest, caching queries
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liAll = document.querySelectorAll("li");
var li = document.querySelector("li")[0];
var del = document.getElementsByClassName("delete");

// ~~~~~~~~~~~~~~~ TOOLBOX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~ LOWER LEVEL TOOLS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~ No dependencies on other document defined functions ~~ //
// ~~~~more multipurpose (screwdrivers) ~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

//  -- Foundational Tools (methods) Used --

// method -- short description of use -- reference for tools used in document

// .value -- to be applied to an object -- 1 2
// .length -- length of string -- 1
// .createElement -- creates Element node with specified name -- 2
// .appendChild -- appends a node as the last child of a node -- 2
// .createTextNode -- creates a Text Node with the specified text. -- 2
// .classList -- returns the class name(s) of an element -- 3
// .toggle -- toggle back and forth between a class on an element -- 3

// 1 - Input Length Check
function inputLength() {
	return input.value.length;
}

// 2 - Adds new item to list and resets input box to blank
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// 3 - Tool to toggle a class on an object 

// function toggleClass(class) {
// 	this.classList.toggle(class);
// }





// ~~~~~~~~~ HIGHER LEVEL TOOLS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~ dependencies on lower level tools, more specific uses ~~ ~~~~~  //
// ~~~~ (like a jigsaw function defines no new functionality~~~~~~~~ //
// ~~~ other than putting other tools together ~~~~~~~~~~~~~~~~~~~~ //

// Adds a new list item after button click
function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	}
}

//Adds a new lsit item after a key press
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}

// Actual code that is executed 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



for (var i=0; i<liAll.length; i++) {
	liAll[i].addEventListener("click", function() {
		this.classList.toggle("done");
	})
}

















