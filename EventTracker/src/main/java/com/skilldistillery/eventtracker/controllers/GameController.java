package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Game;
import com.skilldistillery.eventtracker.services.GameDAO;

@RestController
@RequestMapping("api")
public class GameController {

	@Autowired
	GameDAO dao;

	@GetMapping("games")
	List<Game> allGames() {
		List<Game> games = dao.showAll();
		return games;

	}

	@GetMapping("games/{id}")
	Game findGame(@PathVariable int id) {

		Game game = dao.findById(id);

		return game;

	}

	@GetMapping("games/console/{console}")
	List<Game> gamesByConsole(@PathVariable String console) {
		List<Game> games = dao.showAllByConsole(console);

		return games;
	}

	@DeleteMapping("games/delete/{id}")
	public void deleteGame(@PathVariable int id) {

		boolean deleted = dao.deleteGame(id);

	}

	@PostMapping("games/create/")
	Game createGame(@RequestBody Game game) {

		Game createdGame = dao.createGame(game);
		return createdGame;

	}

	@PutMapping("games/update/{id}")
	Game updateGame(@PathVariable int id, @RequestBody Game game) {
		Game updatedGame = dao.updateGame(id, game);
		return updatedGame;
	}

}
