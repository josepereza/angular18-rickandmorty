import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Personaje, Personajes } from '../interfaces/i-rickandmorty';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  searchQuery = signal<string>('rick');
  http = inject(HttpClient);
  personajes$ = signal<Personaje[]>([]);

  
  listFiltered= computed(()=>{
    const filter=this.searchQuery();
    
  /*  this.http
   .get<Personajes>(
     `https://rickandmortyapi.com/api/character/?name=${filter}&status=alive`
   )
   .subscribe((data) => {
     this.personajes$.set(data.results);
   });
   return this.personajes$();
 */

   this.http
   .get<Personajes>(
     `https://rickandmortyapi.com/api/character/`
   )
   .subscribe((data) => {
    const filtracion=data.results.filter(data=>data.name.includes(this.searchQuery()))
     this.personajes$.set(data.results.filter(data=>data.name.toLowerCase().includes(this.searchQuery().toLocaleLowerCase())));
   });
   return this.personajes$();
 })

 public getPersonajeById(id: number) {
  return  this.http.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`)
   
  
}

}
