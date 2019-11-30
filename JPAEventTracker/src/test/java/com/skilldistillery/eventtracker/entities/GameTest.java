package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class GameTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Game game;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		game = em.find(Game.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
	}

	@DisplayName("Testing entity")
	@Test
	void test1() {
		assertNotNull(game);
		assertEquals("Dragon Ball Fighter Z", game.getTitle());
		assertEquals("Playstation 4", game.getConsole());
		assertEquals("T", game.getRating().toString());
		assertEquals(2018, game.getReleaseYear());
		assertEquals("Fighting", game.getGenre());
		assertEquals(2, game.getPlayers());
		assertEquals("Greely, CO", game.getEventLocation());
	}

}
