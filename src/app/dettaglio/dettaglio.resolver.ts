import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { DomandeService } from '../services/domande.service';
import { Domande } from '../interfaces/domande.interface';
import { TipologicheService } from '../services/tipologiche.service';

@Injectable()
export class DettaglioResolver implements Resolve<Observable<any>> {
  constructor(private domandeService: DomandeService,private tipologicheService:TipologicheService) {}

  resolve(route:ActivatedRouteSnapshot): Observable<any>  {
    let id = route.params?.['id'];
    return forkJoin([
      this.tipologicheService.getTipologieImpresa(),
      +id ?  this.domandeService.geById(id) : of(false)
    ]);
  }
}
