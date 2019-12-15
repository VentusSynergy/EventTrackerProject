export class Game {
  id: number;
  title: string;
  console: string;
  rating: string;
  releaseYear: number;
  genre: string;
  players: number;
  eventLocation: string;

  constructor(
    id?: number,
    title?: string,
    console?: string,
    rating?: string,
    releaseYear?: number,
    genre?: string,
    players?: number,
    eventLocation?: string
  ){
    this.id = id;
    this.title = title;
    this.console = console;
    this.rating = rating;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.players = players;
    this. eventLocation = eventLocation;
  }



}
