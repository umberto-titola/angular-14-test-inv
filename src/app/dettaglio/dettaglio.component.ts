import { Component } from '@angular/core';
import { Domande } from '../interfaces/domande.interface';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DomandeService } from '../services/domande.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss'],
})
export class DettaglioComponent {

  pageSubscription = new Subscription();
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private domandeService:DomandeService) {}
  tipologieImpresa = [];
  domanda: Domande = null;
  msg = '';
  form = this.fb.group({
    id:[],
    descrizione:[],
    idImpresa:[]
  })

  ngOnInit() {
    [this.tipologieImpresa,this.domanda] = this.route.snapshot.data?.['data'];
    console.log(this.domanda);
    this.form.patchValue(this.domanda);
  }

  onSubmit(){
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
