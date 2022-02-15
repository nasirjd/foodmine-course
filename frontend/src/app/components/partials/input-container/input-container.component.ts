import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit {

  @Input()
  label!:string;
  @Input()
  bgColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
