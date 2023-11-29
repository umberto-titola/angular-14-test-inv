import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { DomandeService } from '../services/domande.service';
import { Domanda } from '../interfaces/domanda.interface';
import { TipologicheService } from '../services/tipologiche.service';

@Injectable()
export class HomeResolver implements Resolve<Observable<Domanda[]>> {
  constructor(private domandeService: DomandeService,private tipologiche:TipologicheService) {}

  resolve(): Observable<Domanda[]>  {
    return  this.domandeService.get()
  }
}
