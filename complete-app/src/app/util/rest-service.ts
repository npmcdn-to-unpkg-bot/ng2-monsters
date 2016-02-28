import { Http, Headers } from 'angular2/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs';

export class RestService {

    public headers:Headers = new Headers();

    constructor(public baseUrl: string, public http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    public query(): Observable<any> {
        return this.http.get(this.baseUrl)
            .map(r => r.json());
    }


    public get(id): Observable<any> {
        return this.http.get(this.baseUrl + '/' + id)
            .map(r => r.json());
    }

    public save(item): Observable<any> {

        var url = this.baseUrl;
        if (item.id) {
            url += '/' + item.id;
        }

        var body = JSON.stringify(item);

        if (item.id) {
            return this.http.put(url, body, { headers: this.headers })
                .map(r => r.json());
        }

        return this.http.post(url, body, { headers: this.headers })
            .map(r => r.json());
    }

    public delete(item): Observable<any> {
        return this.http.delete(this.baseUrl + '/' + item.id)
            .map(r => r.json());
    }



}