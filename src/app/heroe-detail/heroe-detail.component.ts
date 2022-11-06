import {Component, Input, OnInit} from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() hero ?:Hero;
}
