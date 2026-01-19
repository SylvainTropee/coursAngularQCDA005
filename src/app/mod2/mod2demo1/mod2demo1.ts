import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-mod2demo1',
  imports: [],
  templateUrl: './mod2demo1.html',
  styleUrl: './mod2demo1.css'
})
export class Mod2demo1 implements OnInit, AfterViewInit, OnDestroy{

  public username? : string

  constructor() {
    // this.username = 'Michel';
    console.log("Composant instancié")
  }

  public changeUsername(){
    this.username = 'Jean-Paul';
  }

  ngOnInit(): void {
    console.log("Initialisation attributs")
    this.username = 'Michel';
  }

  ngAfterViewInit(): void {
    console.log("Vue chargée")
  }

  ngOnDestroy(): void {
    console.log("Composant détruit")
  }

}
