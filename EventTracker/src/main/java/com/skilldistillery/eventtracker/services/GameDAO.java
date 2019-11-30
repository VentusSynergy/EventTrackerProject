package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Game;

public interface GameDAO {
	
	List<Game> showAll();
	Game findById(int id);
	List<Game> showAllByConsole(String console);
	boolean deleteGame(int id);
	Game createGame(Game game);

}
