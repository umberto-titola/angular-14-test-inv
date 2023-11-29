import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Domanda } from '../interfaces/domanda.interface';
import { DomandeService } from '../services/domande.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  tipologiaImprea } from '../interfaces/tipologiaImpresa.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private route:ActivatedRoute,private router:Router) {}
  domande: Domanda[] = null;
  tipologieImpresa = tipologiaImprea;

  ngOnInit() {
   this.domande = this.route.snapshot.data?.['data'];
  }

}
