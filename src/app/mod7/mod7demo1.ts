import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Joke} from './joke';
import {catchError, distinctUntilChanged, map, retry, switchMap, tap, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mod7demo1 {

  public readonly BASE_URL = "https://api.chucknorris.io/jokes/random";


  constructor(private http : HttpClient) {
  }

  getJoke(){
    return this.http.get<any>(this.BASE_URL)
  }

  getJoke2(){
    return this.http.get<Joke>(this.BASE_URL)
  }

  getJoke3(){
    return this.http.get<any>(this.BASE_URL).pipe(
      map(
        data => {
          const joke : Joke = {
            id : data.id,
            value : data.value,
            iconUrl : data.icon_url
          }
          return joke
        }
      ),
      //intéressante pour logger, pour modifier un signal
      tap(
        data => {

        }
      ),
      switchMap(
        data =>{
          return this.http.get<Joke>(this.BASE_URL)
        }
       ),
      distinctUntilChanged(),
      retry(3),
      timeout(5000),
     // catchError(err => {})
    )
  }


  getJoke4(){
    const params = new HttpParams().set('machin', 'bidule')

    const data = {name : 'Michel'};
    this.http.post<any>(`${this.BASE_URL}/12`, data)

    return this.http.get<any>(`${this.BASE_URL}/12`, {params : params})
  }

}

