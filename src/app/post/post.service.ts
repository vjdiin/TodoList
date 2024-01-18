import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    constructor(private http: HttpClient) { }

    getPost(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}