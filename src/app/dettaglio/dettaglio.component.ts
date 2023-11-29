import { Component } from '@angular/core';
import { Domanda } from '../interfaces/domanda.interface';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DomandeService } from '../services/domande.service';
import { Subscription } from 'rxjs';
import { tipologiaImprea } from '../interfaces/tipologiaImpresa.interface';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss'],
})
export class DettaglioComponent {

  pageSubscription = new Subscription();
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private domandeService:DomandeService) {}
  tipologieImpresa = [];
  domanda: Domanda = null;
  msg = '';
  form = this.fb.group({
    id:[],
    descrizione:['',[Validators.required]],
    idImpresa:['',[Validators.required]],
    indirizzo:['',[]]
  })

  ngOnInit() {
    [this.tipologieImpresa,this.domanda] = this.route.snapshot.data?.['data'];
 
    this.pageSubscription.add(this.form.get('idImpresa').valueChanges.subscribe((idImpresa)=>{
      if(idImpresa == tipologiaImprea.impresaItaliana){
        this.form.get('indirizzo').setValidators([Validators.required]);
        this.form.get('indirizzo').updateValueAndValidity()
      }else{
        this.form.get('indirizzo').setErrors(null);
      }
    }));

    if(this.domanda) this.form.patchValue(this.domanda);
  
  }

  onSubmit(){
    if(this.form.invalid)return;
    let data = this.form.getRawValue();
    let verb = 'update';
    if(!+data?.id){
      verb = 'post';
    }
    this.pageSubscription.add(this.domandeService[verb](data).subscribe((value)=>{
        this.msg = 'Domanda modificata con successo';      
    }))
    
  }
  ngOnDestroy(){
    this.pageSubscription.unsubscribe();
  }
}
