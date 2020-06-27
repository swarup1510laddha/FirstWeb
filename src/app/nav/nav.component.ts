import { Component, OnInit, HostListener } from '@angular/core';
import { slideIn, rightIn } from '../animations/slideInAnimation';
import { fadeIn } from '../animations/fadeIn';
import { slideUp } from '../animations/slideUp';
import { zoomIn } from '../animations/zoomIn';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    slideIn,
    fadeIn,
    rightIn,
    slideUp,
    zoomIn
  ]
})
export class NavComponent implements OnInit {

  constructor() { }
  showColor: boolean = false;

  ngOnInit() {}

 @HostListener('document:scroll') onScroll() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    this.showColor = true;
   }
   else {
    this.showColor = false;
   }
  }
}
