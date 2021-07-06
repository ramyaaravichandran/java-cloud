import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegUser, loginUser, createPost } from '../interfaces';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginError!: boolean;
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

  getProfile(): Observable<any> {
    return this.http.get<any>(`/api/profile`);
  }

  logout(): Observable<string> {
    return this.http.post<string>(`/api/logout`, undefined);
  }

  createPost(data: createPost): Observable<createPost> {
    return this.http.post<createPost>(`/api/create-post`, data);
  }

  allPosts(): Observable<createPost[]> {
    return this.http.get<createPost[]>(`/api/user-posts`);
  }

  getFeeds(): Observable<any[]>{
     return this.http.get<any[]>(`/api/feeds`);
  }

  getSharedUser(username: string | null): Observable<any>{
     return this.http.get<any>(`/api/profile/${username}`);
  }

  addFollow(username: string | null): Observable<any>{
     return this.http.post<any>(`api/addFollow/${username}`, undefined);
  }

  removeFollow(username: string | null): Observable<any>{
     return this.http.post<any>(`api/removeFollow/${username}`, undefined);
  }
}
