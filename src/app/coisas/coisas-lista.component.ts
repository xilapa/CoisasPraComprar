import { OnDestroy, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ICoisa } from "./coisa";
import { CoisaService } from "./coisa.service";

@Component({
    templateUrl: './coisas-lista.component.html',
    styleUrls: ['./coisas-lista.component.css']
})

export class CoisasListaComponent implements OnInit, OnDestroy
{

    imageWidth: number = 75;
    imageMargin: number = 2;
    imagemVisivel: boolean = false;
    errorMessage: string = "";
    subscription!: Subscription;
    
    
    private _filtroPesquisa:string = "";
    
    get filtroPesquisa():string
    {
        return this._filtroPesquisa;
    }
    set filtroPesquisa(value:string)
    {
        this._filtroPesquisa = value;
        this.coisasFiltradas = this.filtrarCoisas(value);
        console.log(this.coisasFiltradas);
    }

    coisasFiltradas: ICoisa[] = [];
    coisas: ICoisa[] = [];

    constructor(private coisaService: CoisaService) {
    }


    mostrarImagem(): void
    {
        this.imagemVisivel = !this.imagemVisivel;
    }

    filtrarCoisas(filtro: string) :ICoisa[]
    {
        filtro = filtro.toLowerCase();
        return this.coisas.filter( (coisa: ICoisa)=> {
            return coisa.nome.toLowerCase().includes(filtro);
        });
    }

    ngOnInit(): void {
       this.subscription = this.coisaService.getCoisas().subscribe({
           next: coisasResponse => {
               this.coisas = coisasResponse;
               this.coisasFiltradas = this.coisas;  
            },
           error: err => this.errorMessage = err
       }); 
    }

    onNotify(value: string): void{
        console.log(value);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}