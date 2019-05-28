(() => {
	//stub
	console.log('fired');
	let headline = document.querySelector('h1'),
		subhead = document.querySelector('h3'),
		theButton = document.querySelector('button');

	function changeText() {
		headline.textContent = "Now I'm different";
		subhead.textContent = "hey me too. but that's ok"
	}

	theButton.addEventListener("click", changeText);
})();