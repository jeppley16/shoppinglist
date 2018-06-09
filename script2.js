
// ~~~~~~~~~~~~~~~~~ SUPPLIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ // 

// Selecting the elements of interest, caching queries
var button = document.getElementById("enter");
var userInput = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liAll = document.querySelectorAll("li");
// var li = document.querySelector("li")[0];
var delAll = document.getElementsByClassName("delete");

// ~~~~~~~~~~~~~~~ TOOLBOX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

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
	return userInput.value.length;
}

// 2 - Adds new item to list & corresponding delete button and resets input box to blank
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	li.classList.add('items')
	ul.appendChild(li);

	// toggleDone function when li is clicked
	li.addEventListener("click", toggledone);

	//Adds a delete button to list item
	var btn = document.createElement("button");
	li.appendChild(btn);
	btn.classList.add('delete');
	btn.appendChild(document.createTextNode("Delete!"));

	// Removte list item when delete button is clicked
	btn.addEventListener("click", removeItem);

	// toggles done class on an li element
	function toggledone() {
		li.classList.toggle("done");
	}

	// Removes Selected Element when called

	function removeItem() {
		li.remove(); 
	}

	userInput.value = "";
}

// 3 - Verifies valid user input and adds a new list item after button click and 
function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	}
}

// 4 - Verifies valid user input and that the key pressed was enter, adds a new list item after a key press
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}

// 5 - Removes the parent element of a list item 

// for (var i=0; i<delAll.length; i++) {
// 	delAll[i].addEventListener("click", function() {
// 		this.parentNode.remove();
// 	})
// }


// Actual code that is executed 

button.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);





// for (var i=0; i<liAll.length; i++) {
// 	liAll[i].addEventListener("click", function() {
// 		this.classList.toggle("done");
// 	})
// }

















