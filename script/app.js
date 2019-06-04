(() => {
	//stub
	console.log('fired');
	
	//never change
	const piecesBoard = document.querySelector('.puzzle-pieces'),
		  puzzleBoard = document.querySelector('.puzzle-board'),
		  puzzleSelectors = document.querySelectorAll ('#buttonHolder img'),
		  dropZones = document.querySelectorAll ('.drop-zone');

	let draggablePieces = piecesBoard.querySelectorAll("img");

	function switchImage(){
		console.log(this);
		//grab the corresponding bg img (0,1,2 or 3) and get it from the images folder
		let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

		//set the bg image style on the dropzone container
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;
	}

	puzzleSelectors.forEach(thumbnail => {thumbnail.addEventListener("click", switchImage);});

	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');
			e.dataTransfer.setData("text/plain", this.id);
		});
	});
})();
