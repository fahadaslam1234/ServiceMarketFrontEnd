import { Component, OnInit } from '@angular/core';
import { HomeModuleComponent } from '../Home-Module.component';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  date = new Date('19-20-2039');
  constructor() { }

  ngOnInit() {
  }

}
