import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../services/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api-superlibrary/user'; // port de l'API back-end

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
  getUserById(id : number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/` + id);
  }
  postNewUser(userData : User) : Observable<User>  {
    return this.http.post<User>(`${this.apiUrl}/add`,userData);
  }
}