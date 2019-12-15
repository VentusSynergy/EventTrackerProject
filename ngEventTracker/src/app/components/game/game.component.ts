import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from 'src/app/models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameSvc: GameService) { }


  games: Game[] = [];
  selected = null;
  edit = null;
  add = null;



  reload() {
    this.gameSvc.index().subscribe(
      (aGoodThingHappened) => {
        console.log(aGoodThingHappened);
        this.games = aGoodThingHappened;

      },
      (didntWork) => {
        console.error(didntWork);
      }
    );
  }

  create(gameForm: NgForm) {
    const game = gameForm.value;
    this.gameSvc.create(game).subscribe(
      goodStuff => {
        console.log(goodStuff);
        this.reload();
      },

      badStuff => {
        console.error(badStuff);
        console.error('BADDDDD');


      }
    );
    gameForm.reset();
    this.add = null;
  }
  update(gameForm: NgForm) {
    const game = gameForm.value;
    // this.todoForm = editForm;

    this.gameSvc.update(gameForm.value.id, game).subscribe(

      goodStuff => {
        console.log(goodStuff);
        this.reload();
      },

      badStuff => {
        console.error(badStuff);
        console.error('BADDDDD');


      }
    );
    this.edit = null;

  }
  delete(id: number) {
    console.log(id);
    this.gameSvc.deleteToDo(id).subscribe(
      goodStuff => {
        console.log(goodStuff);
        this.reload();
      },

      badStuff => {
        console.error(badStuff);


      }
    );
    this.edit = null;
  }
  displayEvent(game) {
    this.selected = game;
  }

  editGame() {
    this.edit = this.selected;
    this.selected = null;
  }
  cancelEdit() {
    this.edit = null;
  }
  back() {
    this.selected = null;
  }
  addGame() {
    this.add = !this.add;
  }
  eventCount() {
    return this.games.length;
  }









  ngOnInit() {
    this.reload();

  }

}
