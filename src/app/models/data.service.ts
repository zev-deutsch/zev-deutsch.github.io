import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    baseUrl = 'https://api.edamam.com/search?q=';

    constructor(private http: HttpClient) {
    }

    getRecipes(search: string): Observable<any> {
        return this.http.get(this.baseUrl + search + '&app_id=e04a40f7&app_key=a9558ae3efc86ed9c55e74631ea574b8');
    }
}
