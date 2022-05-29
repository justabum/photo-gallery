import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  words:string[];
  word = new String();
  guess = new String();

  constructor(private apiService:ApiService) {}
  ngOnInit() {
    //this.refreshWords()
  }

  refreshWords() {
    this.apiService.getWords()
      .subscribe(data => {
        console.log(data)
        this.words=data.suggestions;
      })      
 
  }
  addGuess(event) {
    //debugger;
    this.refreshWords();
  }
}
