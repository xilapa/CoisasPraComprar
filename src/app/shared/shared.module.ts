import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EstrelasClassificacao } from './estrelas-classificacao.component';


@NgModule({
  declarations: [
    EstrelasClassificacao
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    EstrelasClassificacao
  ]
})
export class SharedModule { }
