import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap,map } from 'rxjs';
import { Domanda } from '../interfaces/domanda.interface';

@Injectable({ providedIn: 'root' })
export class DomandeService {
  constructor(private http: HttpClient) {}
  private domandeUrl = 'api/domande';
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  get(): Observable<Domanda[]> {
    return this.http.get<Domanda[]>(this.domandeUrl).pipe(map(domande=>{
      return domande.sort((a, b) => b.id - a.id);
    }));
  }

  geById(id: number): Observable<Domanda> {
    const url = `${this.domandeUrl}/${id}`;
    return this.http.get<Domanda>(url).pipe(
      tap(_ => console.log(`fetched domanda id=${id}`)),
      catchError(this.handleError<Domanda>(`get id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
  update(domanda: Domanda): Observable<void> {
    const url = `${this.domandeUrl}/${domanda.id}`;
    return this.http.put(url, domanda,this.httpOptions).pipe(
      tap(_ => console.log(`updated domanada id=${domanda.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  post(domanda: Domanda): Observable<void> {
    const url = `${this.domandeUrl}`;
    return this.http.post(url, domanda,this.httpOptions).pipe(
      tap(_ => console.log(`post  id=${domanda.id}`)),
      catchError(this.handleError<any>('postDomanda'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
