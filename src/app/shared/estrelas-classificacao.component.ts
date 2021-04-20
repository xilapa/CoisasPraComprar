import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'cpc-estrelas-classificacao',
    templateUrl: './estrelas-classificacao.component.html',
    styleUrls: ['./estrelas-classificacao.component.css']
})

export class EstrelasClassificacao implements OnChanges {

    @Input() classificacao: number = 0;
    cropWidth: number = 75;
    @Output() notify: EventEmitter<string> = new EventEmitter();

    ngOnChanges(): void {
        this.cropWidth = this.classificacao * 75/5;
    }

    onClick(): void {
        this.notify.emit(`classificacao clicada: ${this.classificacao}`)
    }
}

