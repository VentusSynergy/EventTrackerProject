package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Game;

public interface GameRepo extends JpaRepository<Game, Integer>{
	
	List<Game> findByConsole(String console);
	List<Game> findByTitleLike(String key);
	List<Game> findByEventLocation(String location);
	
	

}
