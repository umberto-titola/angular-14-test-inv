import { Component } from '@angular/core';
import { Domande } from '../interfaces/domande.interface';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DomandeService } from '../services/domande.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss'],
})
export class DettaglioComponent {
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private domandeService:DomandeService) {}
  tipologieImpresa = [];
  domanda: Domande = null;
  form = this.fb.group({
    descrizione:[],
    idImpresa:[]
  })

  ngOnInit() {
    [this.tipologieImpresa,this.domanda] = this.route.snapshot.data?.['data'];
    console.log(this.domanda);
    this.form.patchValue(this.domanda);
  }

  onSubmit(){
  }
}
