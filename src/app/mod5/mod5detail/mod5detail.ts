import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mod5detail',
  imports: [],
  templateUrl: './mod5detail.html',
  styleUrl: './mod5detail.css',
})
export class Mod5detail {

  public id : string | null
  public error : string | null

  constructor(private route : ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
    // this.id = this.route.snapshot.params['id']
    this.error = this.route.snapshot.queryParamMap.get('error')
  }


}
