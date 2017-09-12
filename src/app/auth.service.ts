import { tokenNotExpired } from 'angular2-jwt';

loggedIn() {
  return tokenNotExpired();
}
