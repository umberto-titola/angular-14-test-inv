import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const domande = [
      { id: 1, name: 'Domanda1',impresaEstera:true },
      { id: 2, name: 'Domanda2' },
      { id: 3, name: 'Domanda3' },
      { id: 4, name: 'Domanda4' },
      { id: 5, name: 'Domanda5',impresaEstera:true },
      { id: 6, name: 'Domanda6',impresaEstera:true },
      { id: 7, name: 'Domanda7' },
    ];
    return { domande };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: any[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
