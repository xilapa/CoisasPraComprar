import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoisa } from './coisa';

@Component({
  templateUrl: './coisa-detalhe.component.html',
  styleUrls: ['./coisa-detalhe.component.css']
})
export class CoisaDetalheComponent implements OnInit {

  public tituloPagina:string = "Coisa Detalhe Works!";
  public coisaId!: number;
  public coisa!: ICoisa;

  constructor( private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.coisaId = this.route.snapshot.params['id'];
  }

  voltar() : void {
    this.router.navigate(['/coisas']);
  }
}
