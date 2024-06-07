import { Component, Input, input } from '@angular/core';
import { Personaje } from '../../interfaces/i-rickandmorty';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  //@Input({ required: true })personaje!:Personaje

  //La de abajo es la forma moderna de introducir el input mediante una signal
  //en el template habria que imprimirlo como signal: Ej: personaje().image

  personaje = input.required<Personaje>(); // InputSignal<string>
}
