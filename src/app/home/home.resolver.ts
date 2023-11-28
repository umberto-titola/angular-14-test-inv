import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { DomandeService } from '../services/domande.service';
import { Domande } from '../interfaces/domande.interface';
import { TipologicheService } from '../services/tipologiche.service';

@Injectable()
export class HomeResolver implements Resolve<Observable<Domande[]>> {
  constructor(private domandeService: DomandeService,private tipologiche:TipologicheService) {}

  resolve(): Observable<any>  {

    return  this.domandeService.get()

  }
}
