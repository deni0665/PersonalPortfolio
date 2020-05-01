import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';


@Component({
  // selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  isFoo:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
  }

}

