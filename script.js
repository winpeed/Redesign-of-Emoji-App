let emojiArray = ["😍" ,"🤡", "😎", "🙏"];

console.log(emojiArray);

let displayEmojis = document.getElementById("display-emojis");

let emojiInput = document.getElementById("emoji-input");

let nameInput = document.getElementById("name-input");

let enterName = document.getElementById("enter-name");

let userName = document.getElementById("user-name");

let letterEss = document.getElementById("letter-ess");

let errorMessage = document.querySelector(".error-message");



// Remove the placholder when the Name Input is Clicked

nameInput.addEventListener("click", function(){

	nameInput.placeholder = "";

})

nameInput.addEventListener("mouseover", function(){

	nameInput.placeholder = "";

})


nameInput.addEventListener("mouseout", function(){

	nameInput.placeholder = "Enter your name here";

})



// Remove the placholder when the Emoji Input is Clicked

emojiInput.addEventListener("click",function(){
	emojiInput.placeholder = "";
})


emojiInput.addEventListener("mouseover",function(){
	emojiInput.placeholder = "";
})


emojiInput.addEventListener("mouseout",function(){
	emojiInput.placeholder = "Paste an Emoji in here 🥳";
})


userName.textContent = "Praise";

enterName.addEventListener("click",function(){

if (nameInput.value !== "") {
	userName.textContent = nameInput.value;
	letterEss.classList.add("letter-ess");
	nameInput.value = "";
	errorMessage.style.display = "none";

} else if(nameInput.value == ""){
	errorMessage.style.display = "block";
}

}) 


// Display Emoji Function

function displayEmojiDiv(){	
		
		for(let i = 0; i < emojiArray.length; i++) {

		let emojiSpan = document.createElement('span');
		emojiSpan.classList.add('emoji-span');
		emojiSpan.textContent = emojiArray[i];
		displayEmojis.append(emojiSpan);
	
		
	}
	 	emojiInput.value = "";

}

displayEmojiDiv();


// Add to the beginning Event Listener

let addBegin = document.getElementById("add-begin");

addBegin.addEventListener("click", function(){

if(emojiInput.value !== ""){
	emojiArray.unshift(emojiInput.value);
}

	console.log(emojiArray);

	displayEmojis.textContent = "";

	displayEmojiDiv();


})

// Add to the End Event Listener

let addEnd = document.getElementById("add-end");

addEnd.addEventListener("click", function(){

	if(emojiInput.value !== "") {
	
	emojiArray.push(emojiInput.value);
	
	}	

	console.log(emojiArray);

	displayEmojis.textContent = "";

		displayEmojiDiv();

})


// Remove from Beginning Event Listener

let removeBegin = document.getElementById("remove-begin");

removeBegin.addEventListener("click", function(){

 
	emojiArray.shift(emojiInput.value);

	console.log(emojiArray);
	displayEmojis.textContent = "";

		displayEmojiDiv();

})

// Remove from End Listener

let removeEnd = document.getElementById("remove-end");

removeEnd.addEventListener("click", function(){

	emojiArray.shift(emojiInput.value);
	

	console.log(emojiArray);

	displayEmojis.textContent = "";

		displayEmojiDiv();


})