import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  private isAdminSubject = new ReplaySubject<boolean>(1);
  isAdmin$ = this.isAdminSubject.asObservable();

  private isFinanceSubject = new ReplaySubject<boolean>(1);
  isFinance$ = this.isFinanceSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);

          const isAdmin = response.username.includes('@admin.com');
          this.isAdminSubject.next(isAdmin);

          const isFinance = response.username.includes('@finm.com');
          this.isFinanceSubject.next(isFinance);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.isAdminSubject.next(false);
    this.isFinanceSubject.next(false);
  }
}
