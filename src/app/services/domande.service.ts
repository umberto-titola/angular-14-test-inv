import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Domande } from '../interfaces/domande.interface';

@Injectable({ providedIn: 'root' })
export class DomandeService {
  constructor(private http: HttpClient) {}
  private domandeUrl = 'api/domande';

  get(): Observable<Domande[]> {
    return this.http.get<Domande[]>(this.domandeUrl);
  }

  geById(id: number): Observable<Domande> {
    const url = `${this.domandeUrl}/${id}`;
    return this.http.get<Domande>(url).pipe(
      tap(_ => console.log(`fetched domanda id=${id}`)),
      catchError(this.handleError<Domande>(`getHero id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
  updateHero(domanda: Domande): Observable<any> {
    return this.http.put(this.domandeUrl, domanda).pipe(
      tap(_ => console.log(`updated domanada id=${domanda.id}`)),
      catchError(this.handleError<any>('updateDomanda'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
