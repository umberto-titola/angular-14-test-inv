import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { tipologiaImprea } from '../interfaces/tipologiaImpresa.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const domande = [
      { id: 1, descrizione: 'Domanda1',idImpresa:tipologiaImprea.impresaEstera },
      { id: 2, descrizione: 'Domanda2',idImpresa:tipologiaImprea.impresaItaliana  },
      { id: 3, descrizione: 'Domanda3',idImpresa:tipologiaImprea.impresaItaliana  },
      { id: 4, descrizione: 'Domanda4',idImpresa:tipologiaImprea.impresaItaliana  },
      { id: 5, descrizione: 'Domanda5',idImpresa:tipologiaImprea.impresaEstera  },
      { id: 6, descrizione: 'Domanda6',idImpresa:tipologiaImprea.impresaEstera  },
      { id: 7, descrizione: 'Domanda7',idImpresa:tipologiaImprea.impresaItaliana  },
    ];
    const tipologieImpresa = [
      {id:1,descrizione:'Impresa estera'},
      {id:2,descrizione:'Impresa Italiana'}
    ]
    return { domande,tipologieImpresa };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(domande: any[]): number {
    return domande.length > 0
      ? Math.max(...domande.map((hero) => hero.id)) + 1
      : 11;
  }
}
