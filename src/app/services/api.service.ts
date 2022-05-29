import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestHttpRequest } from '../models/test-http-request.model';
import { TestHttpResponse } from '../models/test-http-response.model';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "https://wordlehelperapi20220527105945.azurewebsites.net/api/Wordle";
  // "https://localhost:7209/api/wordle"
  // "https://wordlehelperapi20220527105945.azurewebsites.net/api/Wordle"
 
  constructor(private http: HttpClient) {
  }
 
  getWords(): Observable<TestHttpResponse> {

    
    console.log('getWords ' + this.baseURL)
    //return this.http.get<TestHttpResponse[]>(this.baseURL)
    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');
    var request: TestHttpRequest = {StringValue:"Fred", IntValue:69};
 
    return this.http.post<TestHttpResponse>(this.baseURL, request, {headers: headerOptions});
  }
 /*
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
 */
}