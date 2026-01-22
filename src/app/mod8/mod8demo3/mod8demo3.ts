import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-mod8demo3',
  imports: [],
  templateUrl: './mod8demo3.html',
  styleUrl: './mod8demo3.css',
})
export class Mod8demo3 {

  public jokeLength;

  constructor(private chuckService : Mod8service) {
    this.jokeLength = this.chuckService.jokeLength
  }
}
