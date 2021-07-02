import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLogedIn()) {
      return true;
    }
    this.router.navigate(['guest']);
    return false;
  }
}
