import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { tipologiaImprea } from '../interfaces/tipologiaImpresa.interface';
import { Domanda } from '../interfaces/domanda.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const domande = [
      { id: 1, descrizione: 'Domanda1',idImpresa:tipologiaImprea.impresaEstera},
      { id: 2, descrizione: 'Domanda2',idImpresa:tipologiaImprea.impresaItaliana,indirizzo:'Via di test'},
    ];
    const tipologieImpresa = [
      {id:1,descrizione:'Impresa estera'},
      {id:2,descrizione:'Impresa Italiana'}
    ]
    return { domande,tipologieImpresa };
  }


  genId(domande: Domanda[]): number {
    return domande.length > 0
      ? Math.max(...domande.map((hero) => hero.id)) + 1
      : 11;
  }
}
