### Routes

| Return Type    | Route                 | Functionality            |
|----------------|-----------------------|--------------------------|
| `List<Game>` |`GET api/games`| Gets all games   |
| `Game`       |`GET api/games/{id}`| Gets a game by id |
| `List<Game>`       |`GET api/games/console/{console}`| Gets games by console|
| `List<Game>`    |`GET api/games/search+title/{title}`| Gets all games that match the title entry|
| `List<Game>`    |`GET api/games/search+location/{location}`| Gets all games by location|
| `Game`    |`DELETE api/games/delete/{id}` | Deletes a game by id|
| `Game`    |`POST api/games/create/` | Creates a game|
| `Game`    |`PUT api/games/update/{id}` | Updates a game|
