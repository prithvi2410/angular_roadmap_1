import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IApi } from '../../Model/IApi';

@Service()
export class DummyApiCall {
    private http = inject(HttpClient);

    public getAPI(){
        return this.http.get<IApi>('https://dummyjson.com/http/200');
    }
}
