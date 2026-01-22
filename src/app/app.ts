import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod2demo1} from './mod2/mod2demo1/mod2demo1';
import {Mod3demo1} from './mod3/mod3demo1/mod3demo1';
import {Mod3demo2} from './mod3/mod3demo2/mod3demo2';
import {Mod4demo1} from './mod4/mod4demo1/mod4demo1';
import {Mod6demo1} from './mod6/mod6demo1/mod6demo1';
import {Mod7component} from './mod7/mod7component/mod7component';
import {Mod8demo1} from './mod8/mod8demo1/mod8demo1';
import {Mod8demo2} from './mod8/mod8demo2/mod8demo2';
import {Mod8demo3} from './mod8/mod8demo3/mod8demo3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod2demo1, Mod3demo1, Mod3demo2, Mod4demo1, Mod6demo1, Mod7component, Mod8demo1, Mod8demo2, Mod8demo3],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularQCDA005');
}
