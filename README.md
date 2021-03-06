## Event Tracker Project

### Week 12 - 14 Homework Project for Skill Distillery

### Overview

##### The purpose of this project was to create a single table with MySQL, a JPA Project, and a Spring Boot application that makes use of REST API to preform all CRUD operations and any additional operations of my choosing to give life to the backend of an application.

### Steps Of The Application

##### Setting up both the JPA Project and the Spring Boot app was the first step for this project and that mainly involved getting all of the dependencies put in, inputing my database's name, username, and password so that the application could properly access it. I moved on to creating the database and the most important part was testing my entity and all of it's fields with JUnit testing.

### Lessons Learned

##### Using dependencies that enable projects to run more smoothly and efficiently makes coding much faster. This was the first time I used the Jpa Repository interface and it sped up creating CRUD operations faster than I thought possible because I was so used to writing out full SQL queries to access data. Overall, this project has showed me great new technologies that I cannot wait to apply to future projects.

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


### * UPDATE *

##### Starting off with creating a front end to this project, I used JavaScript to populate the HTML and was capable of doing basic CRUD using the routes created in the backend. The purpose of this part of the project was to get practice using raw JavaScript. That being said, the only things that were on my HTML page were two empty DIV's and a background image. The rest of the page was being populated with JavaScript. After experiencing using plain JavaScript, I replaced it with Angular and things are now much more organized and the code is more readable. When given the chance, I will prefer using Angular over JavaScript any day.

### Technologies/Topics Applied

#### MySqlWorkbench, JPA, CRUD, Spring MVC, REST, DOM HTML, Javascript, Angular
