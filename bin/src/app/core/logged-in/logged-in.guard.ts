import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor( private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if( localStorage.getItem('token') !== null ) {
      return true;
    } else {
      this.router.navigate(['/home']);
    }
  }
}
