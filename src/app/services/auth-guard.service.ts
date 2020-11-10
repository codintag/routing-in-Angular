import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    console.log("Auth activated");
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
        window.alert("Vous n'avez pas la permision");
      return false;
    }
  }
}
