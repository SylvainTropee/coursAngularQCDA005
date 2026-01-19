import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mod3demo1',
  imports: [
    FormsModule
  ],
  templateUrl: './mod3demo1.html',
  styleUrl: './mod3demo1.css',
})
export class Mod3demo1 {

  public username? : string

  ngOnInit(){
    this.username = 'Micsdfdffdsfhel'
  }

  resetUsername() {
    this.username = "";
  }
}
