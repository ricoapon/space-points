import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Input() canBeBought: boolean
  @Input() showIfHealthIsHigherThan: boolean
  @Input() showIfHealthIsLowerThan: boolean

  constructor() { }

  ngOnInit(): void {
  }
}
