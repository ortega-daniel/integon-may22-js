import { Component, OnInit } from '@angular/core';
import { PersonasService } from './shared/services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PersonasService],
})
export class ComponentOne {
  title = 'app-dentistas';
  prop1 = 'Prop 1';
  prop2 = 'Prop 2';
  prop3 = 'Prop 3';

  demo() {
    this.prop1 = 'Modificado por el click handler';
  }

  onClick($event) {
    //    window.alert($event);
  }
}
