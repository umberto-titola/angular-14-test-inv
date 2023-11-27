import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Domande } from '../interfaces/domande.interface';
import { DomandeService } from '../services/domande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private domandeService: DomandeService) {}
  domande: Domande[] = null;
  ngOnInit() {
    console.log('init');
    this.domandeService.get().subscribe((e) => {
      console.log(e);
      this.domande = e;
    });
  }
}
