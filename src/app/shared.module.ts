import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
