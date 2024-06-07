import { Component, Injector, OnInit, Signal, inject, input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Personaje } from '../../interfaces/i-rickandmorty';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit{
  personajeId = input<number>(0, { alias: 'id' });
  apiService=inject(ApiService)
  mipersonaje! : Signal<Personaje | undefined>;
  injector=inject(Injector)

  ngOnInit(): void {
    this.mipersonaje=toSignal(this.apiService.getPersonajeById(this.personajeId()),{injector: this.injector});
  }
 
}
