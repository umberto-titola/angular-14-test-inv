import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
  declarations: [HomeComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
})
export class SharedModule {}
