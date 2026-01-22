import {ChangeDetectorRef, Component} from '@angular/core';
import {Mod7demo1} from '../mod7demo1';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Joke} from '../joke';

@Component({
  selector: 'app-mod7component',
  imports: [
    JsonPipe,
    AsyncPipe
  ],
  providers : [],
  templateUrl: './mod7component.html',
  styleUrl: './mod7component.css',
})
export class Mod7component {

  // public joke : any
  // public joke$ : Observable<any>
  public joke2$ : Observable<Joke>

  constructor(private chuckService : Mod7demo1, private cdr : ChangeDetectorRef) {
    // this.chuckService.getJoke().subscribe(
    //   value =>{
    //     this.joke = value
    //    // this.cdr.detectChanges()
    //   }
    // )
    //
    // this.joke$ = this.chuckService.getJoke()
    this.joke2$ = this.chuckService.getJoke2()
  }
}
