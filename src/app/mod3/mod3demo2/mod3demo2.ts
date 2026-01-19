import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgIf, NgStyle} from '@angular/common';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr'
registerLocaleData(localeFr)

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    NgIf,
    NgStyle,
    DatePipe
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
})
export class Mod3demo2 {

  public users : string[] // Array<string>
  public name : string
  public date : Date;

  constructor() {
    this.users = []
    this.name = ""
    this.date = new Date()
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

















