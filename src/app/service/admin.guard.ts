import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


// export const adminGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// constructor(private login:LoginService)

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('CanActivate called');
    if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
      return true
    }
    this.router.navigate(['login']);
    return false;
  }

}