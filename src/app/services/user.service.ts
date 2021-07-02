import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegUser, loginUser } from '../interfaces';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signUp(data: RegUser): Observable<string> {
    return this.http.post<string>(`/api/register`, data);
  }

  login(data: loginUser): Observable<string> {
    return this.http.post<string>(`/api/login`, data);
  }

  isLogedInCheck(): Observable<boolean> {
    return this.http.get<boolean>(`/api/isLogedIn`);
  }

  isLogedIn(): boolean {
    return JSON.parse(localStorage.getItem('isLogedIn') || 'false');
  }

  logout(): Observable<string> {
    return this.http.post<string>(`/api/logout`, undefined);
  }

  // createPost(): {};

  // allPosts(): {};
}
