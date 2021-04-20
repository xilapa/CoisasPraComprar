import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoisaDetalheComponent } from './coisa-detalhe.component';
import { CoisasListaComponent } from './coisas-lista.component';
import { CoisaDetalheGuard } from './coisa-detalhe.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoisasListaComponent,
    CoisaDetalheComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'coisas', component: CoisasListaComponent },
      { path: 'coisas/:id', canActivate: [CoisaDetalheGuard], component: CoisaDetalheComponent },
    ]),
    SharedModule
  ]
})
export class CoisaModule { }
