import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-mod5home',
  imports: [
    RouterLink
  ],
  templateUrl: './mod5home.html',
  styleUrl: './mod5home.css',
})
export class Mod5home {

  detail : string = "/detail/123"

  constructor(private router : Router) {
  }

  goToAbout() {
    this.router.navigate(['/about-us'])
  }

  goToDetail() {
    this.router.navigate(['/detail', 1234])
   // this.router.navigateByUrl('/detail')
  }

}
