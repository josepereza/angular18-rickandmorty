import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Personaje, Personajes } from '../interfaces/i-rickandmorty';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  searchQuery = signal<string | null>('rick');
  http = inject(HttpClient);
  personajes$ = signal<Personaje[]>([]);
  
  listFiltered= computed(()=>{
    const filter=this.searchQuery();
    
   this.http
   .get<Personajes>(
     `https://rickandmortyapi.com/api/character/?name=${filter}&status=alive`
   )
   .subscribe((data) => {
     this.personajes$.set(data.results);
   });
   return this.personajes$();
 })
}
