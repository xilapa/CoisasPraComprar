import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap} from "rxjs/operators";

import { ICoisa } from "./coisa";

@Injectable({
    providedIn: 'root'
})

export class CoisaService {

    private coisasUrl = 'api-fake/coisas.json';

    constructor(private http: HttpClient){}

    getCoisas(): Observable<ICoisa[]>{
        return this.http.get<ICoisa[]>(this.coisasUrl).pipe(
            tap(data => console.log("CoisaService",data)),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse){
        let errorMessage = err.error.message;
        console.log(errorMessage); 
        return throwError(errorMessage);
    }
}