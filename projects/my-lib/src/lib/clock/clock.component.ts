import {Component, Input, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'lib-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  hour: string;
  blink = true;
  minute: string;
  myColor = '#ffffff';
  @Input()
  fontsize: string;

  constructor() { }

  ngOnInit() {
    timer(200, 1000).subscribe(() => {
      const date = new Date();
      this.hour = String(date.getHours() % 12).padStart(2, '0');
      this.minute = String(date.getMinutes()).padStart(2, '0');
      this.blink = !this.blink;
      if (this.blink) {
        this.myColor = '#ffffff';
      } else {
        this.myColor = '#000000';
      }
    });
  }

}
