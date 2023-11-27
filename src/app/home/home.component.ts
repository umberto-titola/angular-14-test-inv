import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Domande } from '../interfaces/domande.interface';
import { DomandeService } from '../services/domande.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private route:ActivatedRoute) {}
  domande: Domande[] = null;
  ngOnInit() {
    this.domande = this.route.snapshot.data?.['data'];
  }
}
