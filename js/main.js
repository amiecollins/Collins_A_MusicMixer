(() => {

// Javascript Doc

console.log("Javascript is linked up");

	const musicIcons = document.querySelectorAll(".music");
	const dropZones = document.querySelectorAll(".song");
	const songTitles = ["Alphys", "Undertale", "For the Fans", "Dogsong", "sans.", "Home"];

	musicIcons.forEach(img => {
		img.addEventListener('dragstart', function(e) {
			console.log('drag');
			e.dataTransfer.setData("text/plain", this.id);
		});
	});

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', function(e) {
			e.preventDefault();
			e.dataTransfer.dropEffect = "move";
		});

		zone.addEventListener('drop', function(e) {
			e.preventDefault();
			console.log('dropped');
			const piece = document.querySelector(`#${e.dataTransfer.getData("text/plain")}`);
			const newPiece = piece.cloneNode(true);
			e.target.appendChild(newPiece);

			// grab id to collect new music piece
			let musicNum = newPiece.id.replace('music','') - 1;

			console.log(musicNum);
			// grab id of zone to target player
			let zoneId = zone.id.replace('song','');

			console.log(zoneId);

			const player = document.querySelector(`#player${zoneId}`);
			const song = newPiece.dataset.currenttrack;
			player.src = song;
			player.load();
			player.play();

			// get title
			songTitle = document.querySelector(`#songTitle${zoneId}`);
			songTitle.textContent = songTitles[musicNum];
		});
	});

})();
