import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  IUser  from './UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUser(user: IUser): Observable<any> {
    return this.http.post<any>('https://localhost:7109/api/users', user);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('https://localhost:7109/api/users');
  }
}
