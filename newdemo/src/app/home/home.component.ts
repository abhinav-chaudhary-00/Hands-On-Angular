import { Component, OnInit } from '@angular/core';

interface clicklogs {
  timestamp: Date;
  index: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  username: string = "";
  inputCheck: boolean = false;
  disp: boolean = false;
  clicklog: clicklogs[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.disp = !this.disp;
    let currdate = new Date;

    this.clicklog.push({
      "timestamp": currdate,
      "index": this.clicklog.length + 1
    })
  }

}
