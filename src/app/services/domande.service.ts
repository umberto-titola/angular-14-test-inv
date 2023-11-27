import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domande } from '../interfaces/domande.interface';

@Injectable({ providedIn: 'root' })
export class DomandeService {
  constructor(private http: HttpClient) {}
  private domandeUrl = 'api/domande';

  get(): Observable<Domande[]> {
    return this.http.get<Domande[]>(this.domandeUrl);
  }
}
