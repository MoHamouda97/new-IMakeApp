import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var typed = new Typed.default('.main-titles', {
      strings: ['هل لديك نشاط تجاري و تريد منصة للتسويق له؟', 'جملة اخرى', 'جملة اخيرة', '...'],
      typeSpeed: 25,
      backSpeed: 20,
      backDelay: 500,
      startDelay: 1000,
      loop: true,
    })
  }

}
