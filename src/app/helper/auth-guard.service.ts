import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {TokenStorageService} from "../service/token-storage.service";
import {query} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,
              private tokenService:TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const currentUser = this.tokenService.getUser();
    if (currentUser) {
      return true;
    }
    this.router.navigate(["/login"],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
