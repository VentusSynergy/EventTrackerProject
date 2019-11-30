package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
	List<Game> allGames(HttpServletRequest req, HttpServletResponse resp) {
		List<Game> games = dao.showAll();
		if (games.size() < 1) {
			resp.setStatus(400);

		}
		return games;

	}

	@GetMapping("games/{id}")
	Game findGame(@PathVariable int id, HttpServletRequest req, HttpServletResponse resp) {

		Game game = dao.findById(id);
		if (game == null) {
			resp.setStatus(404);
		}
		return game;

	}

	@GetMapping("games/console/{console}")
	List<Game> gamesByConsole(@PathVariable String console, HttpServletRequest req, HttpServletResponse resp) {
		List<Game> games = dao.showAllByConsole(console);
		if (games.size() < 1) {
			resp.setStatus(404);
		}
		return games;
	}

	@DeleteMapping("games/delete/{id}")
	public void deleteGame(@PathVariable int id, HttpServletRequest req, HttpServletResponse resp) {
		boolean deleted;

		try {
			deleted = dao.deleteGame(id);
			if (deleted) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(404);
		}

	}

	@PostMapping("games/create/")
	Game createGame(@RequestBody Game game, HttpServletRequest req, HttpServletResponse resp) {

		Game createdGame;
		try {
			createdGame = dao.createGame(game);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(game.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			return null;
		}
		return createdGame;

	}

	@PutMapping("games/update/{id}")
	Game updateGame(@PathVariable int id, @RequestBody Game game, HttpServletRequest req, HttpServletResponse resp) {

		Game updatedGame;
		try {
			updatedGame = dao.updateGame(id, game);
			if (game == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			updatedGame = null;
		}

		return updatedGame;
	}

	@GetMapping("games/search+title/{title}")
	List<Game> searchByTitle(@PathVariable String title, HttpServletRequest req, HttpServletResponse resp) {
		List<Game> games = dao.findByTitle(title);
		if (games.size() < 1) {
			resp.setStatus(404);
		}

		return games;

	}

	@GetMapping("games/search+location/{location}")
	List<Game> searchByLocation(@PathVariable String location, HttpServletRequest req, HttpServletResponse resp) {

		List<Game> games = dao.findByLocation(location);
		if (games.size() < 1) {
			resp.setStatus(404);
		}

		return games;

	}

}
