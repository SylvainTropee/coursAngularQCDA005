import {computed, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from '../mod7/joke';

@Injectable({
  providedIn: 'root',
})
export class Mod8service {

  public readonly BASE_URL = "https://api.chucknorris.io/jokes/random";
  private _joke = signal<Joke | null>(null)
  readonly joke = this._joke.asReadonly()

  readonly jokeLength = computed(
    () => this._joke()?.value.length ?? 0
  )

  constructor(private http : HttpClient) {
  }

  getJoke(){
    this.http.get<Joke>(this.BASE_URL).subscribe(
      joke => {
        this._joke.set(joke)
      }
    )
  }
}
