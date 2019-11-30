package com.skilldistillery.eventtracker.repositories;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.Game;

@RunWith(SpringRunner.class)
@SpringBootTest
class GameRepoTest {
	
	@Autowired
	GameRepo repo;


@DisplayName("Testing getting game object by id")
	@Test
	void test1() {
	Optional<Game> opt = repo.findById(1);
	assertTrue(opt.isPresent());
	assertEquals("Dragon Ball Fighter Z", opt.get().getTitle());
	}

	@DisplayName("Testing getting games by console")
	@Test
	void test2(){
		assertNotNull(repo.findByConsole("Xbox One"));
		assertEquals("Street Fighter V", repo.findByConsole("Xbox One").get(0).getTitle());
	}

}
