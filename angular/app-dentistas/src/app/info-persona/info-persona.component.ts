import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Persona } from '../shared/interfaces/persona';
import { PersonasService } from '../shared/services/personas.service';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass'],
})
export class InfoPersonaComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personasService: PersonasService) {}

  ngOnInit() {
    this.personasService
      .getPersonas()
      .subscribe((data) => (this.personas = data.personas));
  }
}
