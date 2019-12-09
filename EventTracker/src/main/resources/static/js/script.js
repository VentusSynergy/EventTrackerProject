window.addEventListener('load', function(e) {

	createGameForm();
	console.log('Document Loaded');
	init();
})
function totalEvents(games){

	var h2 = document.getElementById('eventNumber');
	h2.textContent = 'TOTAL EVENTS: ' + games.length;
}
function createGameForm() {
	let gameDiv = document.getElementById('allGames');
	var form = document.createElement('form');
	form.name = 'addGameForm';
	gameDiv.appendChild(form)

	var titleInput = document.createElement('input');
	titleInput.type = 'text';
	titleInput.name = 'title';
	titleInput.placeholder = 'Title'
	let br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(titleInput);

	var consoleInput = document.createElement('input');
	consoleInput.type = 'text';
	consoleInput.name = 'console';
	consoleInput.placeholder = 'Console';
	 br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(consoleInput);

	var ratingInput = document.createElement('input');
	ratingInput.type = 'text';
	ratingInput.name = 'rating';
	ratingInput.placeholder = 'Rating';
	 br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(ratingInput);

	var releaseYearInput = document.createElement('input');
	releaseYearInput.type = 'text';
	releaseYearInput.name = 'releaseYear';
	releaseYearInput.placeholder = 'Release Year';
	 br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(releaseYearInput);

	var genreInput = document.createElement('input');
	genreInput.type = 'text';
	genreInput.name = 'genre';
	genreInput.placeholder = 'Genre';
	 br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(genreInput);

	var playersInput = document.createElement('input');
	playersInput.type = 'number';
	playersInput.name = 'players';
	playersInput.placeholder = 'Players';
	 br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(playersInput);

	 eventLocationInput = document.createElement('input');
	eventLocationInput.type = 'text';
	eventLocationInput.name = 'eventLocation';
	eventLocationInput.placeholder = 'Event Location';
	 br = document.createElement('br');
	form.appendChild(br)
	form.appendChild(eventLocationInput);

	var createButton = document.createElement('button');
	createButton.name = 'create';
	createButton.textContent = 'Create';
	form.appendChild(createButton);
}

function init() {
	// let gameDiv = document.getElementById('allGames');
	//	
	// while (gameDiv.firstElementChild) {
	// gameDiv.removeChild(gameDiv.firstElementChild);
	// }

	allGames();
	document.addGameForm.create.addEventListener('click', function(e) {
		event.preventDefault();

		addNewGame();
	})

}

function addNewGame() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8089/api/games/create/', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var gameObject = JSON.parse(xhr.responseText);
			displayCreatedGame(gameObject);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('allGames');
			dataDiv.textContent = 'Error Creating Game';
		}
	};
	var newGame = {
		title : document.addGameForm.title.value,
		console : document.addGameForm.console.value,
		rating : document.addGameForm.rating.value,
		releaseYear : document.addGameForm.releaseYear.value,
		genre : document.addGameForm.genre.value,
		players : document.addGameForm.players.value,
		eventLocation : document.addGameForm.eventLocation.value
	};
	var newGameJSON = JSON.stringify(newGame);
	xhr.send(newGameJSON);
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
			totalEvents(data);
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
function displayCreatedGame(game) {
	let gameDiv = document.getElementById('allGames');
	let table = document.createElement('table');
	table.border = '1';
	let th = document.createElement('h2');
	th.textContent = 'Created Game: ';
	gameDiv.appendChild(table);
	table.appendChild(th);

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

		title.addEventListener("click", function(e) {
			getGame(game);
		})

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

	function getGame(game) {
		let gameDiv = document.getElementById('allGames');
		var form = document.createElement('form');

		form.name = 'updateForm';
		gameDiv.appendChild(form)
		var titleInput = document.createElement('input');
		titleInput.type = 'text';
		titleInput.name = 'title';
		titleInput.value = game.title;
		form.appendChild(titleInput);

		var consoleInput = document.createElement('input');
		consoleInput.type = 'text';
		consoleInput.name = 'console';
		consoleInput.value = game.console;
		form.appendChild(consoleInput);

		var ratingInput = document.createElement('input');
		ratingInput.type = 'text';
		ratingInput.name = 'rating';
		ratingInput.value = game.rating;
		form.appendChild(ratingInput);

		var releaseYearInput = document.createElement('input');
		releaseYearInput.type = 'text';
		releaseYearInput.name = 'releaseYear';
		releaseYearInput.value = game.releaseYear;
		form.appendChild(releaseYearInput);

		var genreInput = document.createElement('input');
		genreInput.type = 'text';
		genreInput.name = 'genre';
		genreInput.value = game.genre;
		form.appendChild(genreInput);

		var playersInput = document.createElement('input');
		playersInput.type = 'number';
		playersInput.name = 'players';
		playersInput.value = game.players;
		form.appendChild(playersInput);

		var eventLocationInput = document.createElement('input');
		eventLocationInput.type = 'text';
		eventLocationInput.name = 'eventLocation';
		eventLocationInput.value = game.eventLocation;
		form.appendChild(eventLocationInput);

		var updateButton = document.createElement('button');
		updateButton.name = 'update';
		updateButton.textContent = 'Update';
		form.appendChild(updateButton);

		var deleteButton = document.createElement('button');
		deleteButton.name = 'deleteGame';
		deleteButton.textContent = 'Delete';
		form.appendChild(deleteButton);

		form.deleteGame.addEventListener('click', function(e) {
			event.preventDefault();

			deleteGame(game.id);

		})

		form.update.addEventListener('click', function(e) {
			event.preventDefault();

			if (titleInput.value.length > 0 && consoleInput.value.length > 0
					&& ratingInput.value.length > 0
					&& releaseYearInput.value.length > 0
					&& genreInput.value.length > 0
					&& playersInput.value.length > 0
					&& eventLocationInput.value.length > 0) {
				updateGame(game.id);

			} else {
				console.log('wont create')
			}

		})

	}

}

function deleteGame(id) {
	var xhr = new XMLHttpRequest();
	var url = 'http://localhost:8089/api/games/delete/' + id;

	xhr.open('DELETE', url);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log(xhr.readyState);
			console.log(xhr.status);
			console.log('Game was successfully deleted');
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			let bad = document.createElement('p');
			bad.textContent = 'Could not delete';
			let gameContent = document.getElementById('allGames');
			gameContent.appendChild(bad);

		}
	};

	xhr.send(null);
	
	location.reload();
}

function updateGame(id) {
	var xhr = new XMLHttpRequest();

	var updateURL = 'http://localhost:8089/api/games/update/' + id;

	xhr.open('PUT', updateURL, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var gameObject = JSON.parse(xhr.responseText);
			displayCreatedGame(gameObject);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('allGames');
			dataDiv.textContent = 'Error Updating Game';
		}
	};
	var newGame = {
		title : document.updateForm.title.value,
		console : document.updateForm.console.value,
		rating : document.updateForm.rating.value,
		releaseYear : document.updateForm.releaseYear.value,
		genre : document.updateForm.genre.value,
		players : document.updateForm.players.value,
		eventLocation : document.updateForm.eventLocation.value
	};
	var newGameJSON = JSON.stringify(newGame);
	xhr.send(newGameJSON);
}
