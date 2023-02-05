import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-frame-small',
  templateUrl: './frame-small.component.html',
  styleUrls: ['./frame-small.component.css']
})
export class FrameSmallComponent implements OnInit {
  @Input() canBeBought: boolean
  @Input() showIfHealthIsHigherThan: boolean
  @Input() showIfHealthIsLowerThan: boolean

  constructor() { }

  ngOnInit(): void {
  }
}
