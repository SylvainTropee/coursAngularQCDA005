import { Component } from '@angular/core';
import {Mod8service} from '../mod8service';

@Component({
  selector: 'app-mod8demo2',
  imports: [],
  templateUrl: './mod8demo2.html',
  styleUrl: './mod8demo2.css',
})
export class Mod8demo2 {
  public joke;

  constructor(private chuckService : Mod8service) {
    this.joke = this.chuckService.joke
  }
}
