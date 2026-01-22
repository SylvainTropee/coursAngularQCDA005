import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-mod8demo1',
  imports: [],
  templateUrl: './mod8demo1.html',
  styleUrl: './mod8demo1.css',
})
export class Mod8demo1 {

  public joke;

  constructor(private chuckService : Mod8service) {
    this.joke = this.chuckService.joke
  }

  loadJoke(){
    this.chuckService.getJoke()
  }
}
