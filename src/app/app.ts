import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod2demo1} from './mod2/mod2demo1/mod2demo1';
import {Mod3demo1} from './mod3/mod3demo1/mod3demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod2demo1, Mod3demo1],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularQCDA005');
}
