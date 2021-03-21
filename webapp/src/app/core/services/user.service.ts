import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable()
export class UserService {
    // public users api https://api.github.com/users?per_page=10
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/user`); 
    }
}
