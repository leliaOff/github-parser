import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GithubUser } from './githubUser';
import { GithubRepository } from './githubRepository';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { }

    getUsers(search: string): Observable<GithubUser[]> {
        let url = `https://api.github.com/search/users?q=${search}`;
        return this.http.get<GithubUser[]>(url).pipe(
            map(users => users['items']),
            catchError(this.handleError('getUsers', []))
        );
    }

    getRepository(userLogin: string): Observable<GithubRepository[]> {
        let url = `https://api.github.com/users/${userLogin}/repos`;
        return this.http.get<GithubRepository[]>(url).pipe(
            map(repos => repos),
            catchError(this.handleError('getRepository', []))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}