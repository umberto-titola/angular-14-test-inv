import { Component } from '@angular/core';
import { Domanda } from '../interfaces/domanda.interface';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss'],
})
export class DettaglioComponent {

  constructor(private fb:FormBuilder) {}
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
  }

  onSubmit(){
    if(this.form.invalid)return;
    let data;
    let verb = 'update';
    if(!+data?.id){
      verb = 'post';
    }
    this.msg = 'Domanda modificata con successo';      
    
  }

}
