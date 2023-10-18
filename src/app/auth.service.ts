import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      name: 'Operator',
      username: 'operator',
      password: '1234',
    },
    {
      id: 2,
      name: 'g',
      username: 'g',
      password: 'g'
    }
  ]

  session: any;
  constructor() { }

  login(username: string, password: string) {
    let user = this.users.find((u)=> u.username === username && u.password === password);
    if (user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }
}
