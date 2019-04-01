(() => {

// Javascript Doc

console.log("Javascript is linked up");

	const musicIcons = document.querySelectorAll('.music');
	const dropZones = document.querySelectorAll('.song');
	const songs = ["../assets/music/Alphys.flac", "../assets/music/Undertale.flac", "../assets/music/For the Fans.flac", "../assets/music/Dogsong.flac", "../assets/music/sans..flac", "../assets/music/Home.flac"];

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
			let piece = document.querySelector(`#${e.dataTransfer.getData("text/plain")}`);
			let newPiece = piece.cloneNode(true);
			e.target.appendChild(document.querySelector(`#${newPiece}`));
		});
	});

})();
