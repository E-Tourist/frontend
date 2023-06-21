import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-swipe',
  templateUrl: './image-swipe.component.html',
  styleUrls: ['./image-swipe.component.less']
})
export class ImageSwipeComponent {

  @Input()
  imageUrls: string[] = [];
  currentImageIndex: number = 0;

  get currentImage(): string {
    return this.imageUrls[this.currentImageIndex];
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
  }
}
