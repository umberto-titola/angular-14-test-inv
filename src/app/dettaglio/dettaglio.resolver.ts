import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { DomandeService } from '../services/domande.service';
import { Domanda } from '../interfaces/domanda.interface';
import { TipologicheService } from '../services/tipologiche.service';
import { Select } from '../interfaces/select.interface';

@Injectable()
export class DettaglioResolver implements Resolve<Observable<[Select[],Domanda]>> {
  constructor(private domandeService: DomandeService,private tipologicheService:TipologicheService) {}

  resolve(route:ActivatedRouteSnapshot): Observable<[Select[],Domanda]>  {
    let id = 1;
    return forkJoin([
      this.tipologicheService.getTipologieImpresa(),
      this.domandeService.geById(id)
    ]);
  }
}
