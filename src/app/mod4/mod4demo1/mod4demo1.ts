import { Component } from '@angular/core';
import {Mod4service} from '../mod4service';

@Component({
  selector: 'app-mod4demo1',
  imports: [],
  templateUrl: './mod4demo1.html',
  styleUrl: './mod4demo1.css',
})
export class Mod4demo1 {

  //private authService : Mod4service // = inject(Mod4service)
  public name : string

  constructor(private authService : Mod4service) {
    //this.authService = authService
    this.name = this.authService.getUser().name

  }

  login(){
    this.authService.login()
    this.name = this.authService.getUser().name
  }

  logout(){
    this.authService.logout()
    this.name = ""
  }

}
