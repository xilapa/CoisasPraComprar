import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CoisaDetalheGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot):boolean {

    const id = Number(route.paramMap.get('id'));

    if (isNaN(id) || id < 1)
    {
      alert("Id da coisa é inválido");
      this.router.navigate(['/coisas']);
      return false;
    }

    return true;
  }
  
}
