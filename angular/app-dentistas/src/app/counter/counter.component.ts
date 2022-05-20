import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
