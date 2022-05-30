import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetSuggestionsRequest } from '../models/get-suggestions-request.model';
import { GetSuggestionsResponse } from '../models/get-suggestions-response.model';
import { GuessLetter, GuessType } from '../models/guess-letter.model';
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
    
    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');
    var request: TestHttpRequest = {StringValue:"Fred", IntValue:69};
 
    return this.http.post<TestHttpResponse>(this.baseURL, request, {headers: headerOptions});
  }

  getWords2(): Observable<GetSuggestionsResponse> {
    const url = "https://wordlehelperapi20220527105945.azurewebsites.net/api/wordle/GetSuggestions";
    //const url = "https://localhost:7209/api/wordle/GetSuggestions";
    console.log('getWords2 ' + url)
    
    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');


    let guess1: GuessLetter[] = [];  
    guess1.push({type: GuessType.WrongLetter, letter: "P"});
    guess1.push({type: GuessType.WrongLetter, letter: "T"});
    guess1.push({type: GuessType.RightPosition, letter: "U"});
    guess1.push({type: GuessType.WrongLetter, letter: "S"});
    guess1.push({type: GuessType.WrongPosition, letter: "A"});

    let guess2: GuessLetter[] = [];  
    guess2.push({type: GuessType.RightPosition, letter: "L"});
    guess2.push({type: GuessType.WrongLetter, letter: "W"});
    guess2.push({type: GuessType.RightPosition, letter: "U"});
    guess2.push({type: GuessType.WrongLetter, letter: "S"});
    guess2.push({type: GuessType.WrongLetter, letter: "Z"});

    var guesses: GuessLetter[][] = [];
    guesses.push(guess1);
    guesses.push(guess2);

    var request: GetSuggestionsRequest = { Guesses: guesses };
  /*
    this.http.post<GetSuggestionsResponse>(url, request, {headers: headerOptions})
        .subscribe(
            (response) => {

console.log("POST GetSuggestions call successful value returned in body", 
                response);
            },
            errorResponse => {
                console.log("GetSuggestions POST call in error", errorResponse);
            },
            () => {
                console.log("GetSuggestions POST observable is now completed.");
            });
 */
    return this.http.post<GetSuggestionsResponse>(url, request, {headers: headerOptions});
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