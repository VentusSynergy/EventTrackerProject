import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  private baseUrl = 'http://localhost:8089/api/games/';

  index() {

    return this.http.get<Game[]>(this.baseUrl + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }
  create(newGame: Game) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<Game>(this.baseUrl + 'create/' + '?sorted=true', newGame, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  update(id: number, data: Game) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put<Game>(this.baseUrl + 'update/' + id + '?sorted=true', data, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  deleteToDo(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete<Game>(this.baseUrl + 'delete/' + id + '?sorted=true', httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }








}
