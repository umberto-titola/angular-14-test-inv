import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { DomandeService } from '../services/domande.service';
import { Domande } from '../interfaces/domande.interface';

@Injectable()
export class HomeResolver implements Resolve<Observable<Domande[]>> {
  constructor(private domandeService: DomandeService) {}

  resolve(): Observable<Domande[]>  {
    return this.domandeService.get();
  }
}
