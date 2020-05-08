import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
