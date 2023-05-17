import { Component,Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }

  getStarImage(current: number): string{
    const previousHalf = current - 0.5;
    const imageName =
    this.stars >= current
    ? 'star-full'
    : this.stars >= previousHalf
    ? 'star-half'
    : 'star-empty';
    return `/assets/stars/${imageName}.svg`;
  }
}
