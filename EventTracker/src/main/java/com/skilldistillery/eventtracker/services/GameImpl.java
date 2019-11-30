package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Game;
import com.skilldistillery.eventtracker.repositories.GameRepo;

@Service
public class GameImpl implements GameDAO {

	@Autowired
	GameRepo repo;

	@Override
	public List<Game> showAll() {

		return repo.findAll();
	}

	@Override
	public Game findById(int id) {

		Optional<Game> opt = repo.findById(id);
		if (opt.isPresent()) {
			Game game = opt.get();
			return game;
		}

		return null;
	}

	@Override
	public List<Game> showAllByConsole(String console) {
		List<Game> games = repo.findByConsole(console);
		return games;
	}

	@Override
	public boolean deleteGame(int id) {
		boolean delete = false;
		Optional<Game> opt = repo.findById(id);
		if (opt.isPresent()) {
			Game game = opt.get();
			repo.delete(game);

			delete = true;
		}

		return delete;
	}

	@Override
	public Game createGame(Game game) {

		if (game.getTitle() != null) {
			repo.saveAndFlush(game);
			return game;
		}

		return null;
	}

	@Override
	public Game updateGame(int id, Game game) {
		Optional<Game> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			Game updateGame = opt.get();
			updateGame.setTitle(game.getTitle());
			updateGame.setConsole(game.getConsole());
			updateGame.setRating(game.getRating());
			updateGame.setReleaseYear(game.getReleaseYear());
			updateGame.setGenre(game.getGenre());
			updateGame.setPlayers(game.getPlayers());
			repo.saveAndFlush(updateGame);
			return updateGame;
		}
		
		return null;
	}

	@Override
	public List<Game> findByTitle(String title) {
		title = "%" + title + "%";
		List<Game> games = repo.findByTitleLike(title);
		return games;
	}

	@Override
	public List<Game> findByLocation(String location) {
		List<Game> games = repo.findByEventLocation(location);
		return games;
	}
}
