package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Game {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;

	private String console;

	@Enumerated(EnumType.STRING)
	private Rating rating;

	@Column(name = "release_year")
	private int releaseYear;

	private String genre;

	private int players;

	public Game() {
		super();
	}

	public Game(int id, String title, String console, Rating rating, int releaseYear, String genre, int players) {
		super();
		this.id = id;
		this.title = title;
		this.console = console;
		this.rating = rating;
		this.releaseYear = releaseYear;
		this.genre = genre;
		this.players = players;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getConsole() {
		return console;
	}

	public void setConsole(String console) {
		this.console = console;
	}

	public Rating getRating() {
		return rating;
	}

	public void setRating(Rating rating) {
		this.rating = rating;
	}

	public int getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(int releaseYear) {
		this.releaseYear = releaseYear;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public int getPlayers() {
		return players;
	}

	public void setPlayers(int players) {
		this.players = players;
	}

	@Override
	public String toString() {
		return "Game [id=" + id + ", title=" + title + ", console=" + console + ", rating=" + rating + ", releaseYear="
				+ releaseYear + ", genre=" + genre + ", players=" + players + "]";
	}

}
