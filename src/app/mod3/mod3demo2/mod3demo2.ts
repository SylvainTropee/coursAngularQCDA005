import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    NgIf,
    NgStyle
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
})
export class Mod3demo2 {

  public users : string[] // Array<string>
  public name : string

  constructor() {
    this.users = []
    this.name = ""
  }

  addUser() {
    if(this.name){
      this.users.push(this.name)
      this.resetName()
    }
  }

  resetName() {
    this.name = ""
  }

  removeUser(index: number) {
    this.users.splice(index, 1)
  }
}

















