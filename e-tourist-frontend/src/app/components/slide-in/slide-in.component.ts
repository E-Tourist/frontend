import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.less']
})
export class SlideInComponent {
  isContentVisible = false;

  toggleVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }
}
