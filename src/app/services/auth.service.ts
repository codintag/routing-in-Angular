export class AuthService {

    loggedIn = true;

    isAuthenticated() {
        return this.loggedIn;
    }

    login() {
        return this.loggedIn = true;
    }

    logout() {
        return this.loggedIn = false;
    }
}