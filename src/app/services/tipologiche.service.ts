import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Select } from "../interfaces/select.interface";
import { tap } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TipologicheService{

    constructor(private http:HttpClient){}
    private tipologieImpresaUrl = 'api/tipologieImpresa';
 
    getTipologieImpresa(){
      return this.http.get<any[]>(this.tipologieImpresaUrl);
    }

}