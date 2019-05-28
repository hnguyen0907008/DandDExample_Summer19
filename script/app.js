(() => {
	//stub
	console.log('fired');
	
	//never change
	const piecesBoard = document.querySelector('.puzzle-pieces'),
		  puzzleBoard = document.querySelector('.puzzle-board'),
		  puzzleSelectors = document.querySelectorAll ('#buttonHolder img'),
		  dropZones = document.querySelectorAll ('.drop-zone');

	debugger;

	function switchImage(){
		console.log(this);
	}

	puzzleSelectors.forEach(thumbnail => thumbnail.addEventListener("click", switchImage));
})();
