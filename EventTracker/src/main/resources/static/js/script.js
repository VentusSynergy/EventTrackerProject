window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
})

function init() {
	document.allForm.lookup.addEventListener('click', function(e) {
		event.preventDefault();
		let gameDiv = document.getElementById('allGames');

    	while (gameDiv.firstElementChild) {
    		gameDiv.removeChild(gameDiv.firstElementChild);
    	}
		allGames();
	})

}

function allGames() {
	var xhr = new XMLHttpRequest();
	var url = 'http://localhost:8089/api/games';

	xhr.open('GET', url);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log(xhr.readyState);
			console.log(xhr.status);
			var data = JSON.parse(xhr.responseText);
			console.log(data);
			displayallGames(data);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			let bad = document.createElement('p');
			bad.textContent = 'No game events were found';
			let gameContent = document.getElementById('allGames');
			gameContent.appendChild(bad);

		}
	};

	xhr.send(null);
}

function displayallGames(games) {
	let gameDiv = document.getElementById('allGames');

	let table = document.createElement('table');
	table.border = '1';
	let th = document.createElement('h2');
	th.textContent = 'All Games';
	gameDiv.appendChild(table);
	table.appendChild(th);

	for (let i = 0; i < games.length; i++) {
		let game = games[i];
		let br = document.createElement('br');
		var titleRow = document.createElement('tr');
		let title = document.createElement('th');
		title.textContent = game.title;
		titleRow.appendChild(title);
		table.appendChild(br);
		table.appendChild(titleRow);
		
		let consoleRow = document.createElement('tr');
		let cTD = document.createElement('td');
		cTD.textContent = 'Console: ';
		consoleRow.appendChild(cTD);
		let consoleData = document.createElement('td');
		consoleData.textContent = game.console;
		consoleRow.appendChild(consoleData);
		table.appendChild(consoleRow);

		let ratingRow = document.createElement('tr');
		let rTD = document.createElement('td');
		rTD.textContent = 'ESBR Rating: ';
		ratingRow.appendChild(rTD);
		let ratingData = document.createElement('td');
		ratingData.textContent = game.rating;
		ratingRow.appendChild(ratingData);
		table.appendChild(ratingRow);

		let releaseYearRow = document.createElement('tr');
		let releaseTD = document.createElement('td');
		releaseTD.textContent = 'Release Year: ';
		releaseYearRow.appendChild(releaseTD);
		let releaseData = document.createElement('td');
		releaseData.textContent = game.releaseYear;
		releaseYearRow.appendChild(releaseData);
		table.appendChild(releaseYearRow);

		let genreRow = document.createElement('tr');
		let genreTD = document.createElement('td');
		genreTD.textContent = 'Genre: ';
		genreRow.appendChild(genreTD);
		let genreData = document.createElement('td');
		genreData.textContent = game.genre;
		genreRow.appendChild(genreData);
		table.appendChild(genreRow);
		
		let playersRow = document.createElement('tr');
		let playersTD = document.createElement('td');
		playersTD.textContent = 'Players: ';
		playersRow.appendChild(playersTD);
		let playersData = document.createElement('td');
		playersData.textContent = game.players;
		playersRow.appendChild(playersData);
		table.appendChild(playersRow);
		
		let eventLocationRow = document.createElement('tr');
		let eventLocationTD = document.createElement('td');
		eventLocationTD.textContent = 'Event Location: ';
		eventLocationRow.appendChild(eventLocationTD);
		let eventLocationData = document.createElement('td');
		eventLocationData.textContent = game.eventLocation;
		eventLocationRow.appendChild(eventLocationData);
		table.appendChild(eventLocationRow);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

}