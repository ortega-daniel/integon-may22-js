import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass'],
})
export class MatematicoComponent implements OnInit, OnChanges {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() operacion: string = '';

  @Output() buttonClicked = new EventEmitter<boolean>();

  public resultado: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const x = changes['x'];
    const y = changes['y'];

    if (x.currentValue < 0) this.x = 0;

    if (y.currentValue < 0) this.y = 0;
  }

  ngOnInit(): void {}

  emitirEvento() {
    this.ejecutaOperacion();
    this.buttonClicked.emit(false);
  }

  ejecutaOperacion(): void {
    this.resultado = 0;
    switch (this.operacion) {
      case '+':
        this.resultado = this.x + this.y;
        break;
      case '-':
        this.resultado = this.x - this.y;
        break;
      case '*':
        this.resultado = this.x * this.y;
        break;
      case '/':
        this.resultado = this.x / this.y;
        break;
      default:
        break;
    }
  }
}
