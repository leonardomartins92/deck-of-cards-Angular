import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> |
   Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = false;
    if(!isAuthenticated){
      this.router.navigate(['not-authenticated']);
    }
    return isAuthenticated;
  }
  
}
