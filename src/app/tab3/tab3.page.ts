import { Component } from '@angular/core';
import { GuessType } from '../models/guess-letter.model';
import { UiGuessLetter } from '../models/ui-guess-letter.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page { 
   uiGuesses: UiGuessLetter[][] = [];
  public guess = new String();
  suggestions:string[] = [];

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    debugger;
    //let word1: UiGuessLetter[] = []; 
    //this.uiGuesses.push(word1);
/*
    let word1: UiGuessLetter[] = []; 
    word1.push({type: GuessType.WrongLetter, letter: "P", color: "wrongletter"});
    word1.push({type: GuessType.WrongLetter, letter: "T", color: "wrongletter"});
    word1.push({type: GuessType.RightPosition, letter: "U", color: "rightposition"});
    word1.push({type: GuessType.WrongLetter, letter: "S", color: "wrongletter"});
    word1.push({type: GuessType.WrongPosition, letter: "A", color: "wrongposition"});

    let word2: UiGuessLetter[] = [];  
    word2.push({type: GuessType.RightPosition, letter: "L", color: "rightposition"});
    word2.push({type: GuessType.WrongLetter, letter: "W", color: "wrongletter"});
    word2.push({type: GuessType.RightPosition, letter: "U", color: "rightposition"});
    word2.push({type: GuessType.WrongLetter, letter: "S", color: "wrongletter"});
    word2.push({type: GuessType.WrongLetter, letter: "Z", color: "wrongletter"});

    this.words.push(word1);
    this.words.push(word2);
    */
  }

  changeState1(event) {

  }

  changeState(row, column) {
    //debugger;
   
    if (this.uiGuesses[row][column].type == GuessType.WrongLetter) {
      this.uiGuesses[row][column].type = GuessType.WrongPosition;
      this.uiGuesses[row][column].color = "wrongposition";
    } else if (this.uiGuesses[row][column].type == GuessType.WrongPosition) {
      this.uiGuesses[row][column].type = GuessType.RightPosition;
      this.uiGuesses[row][column].color = "rightposition";
    } else {
      this.uiGuesses[row][column].type = GuessType.WrongLetter;
      this.uiGuesses[row][column].color = "wrongletter";
    }
  }

  deleteWord(row) {
    this.uiGuesses.splice(row, 1)
  }
  getSuggestions() {
    this.apiService.getSuggestions(this.uiGuesses)
    .subscribe(data => {
      console.log(data)
      
      this.suggestions=data.suggestions;
    })  
}
  
  addGuess() {
    if (this.guess.length == 5) {
        let word: UiGuessLetter[] = [];  
        for (let column = 0; column < this.guess.length; column++) {
          word.push({type: GuessType.WrongLetter, letter: this.guess[column], color: "wrongletter"});
        }

        this.uiGuesses.push(word);
    } else {
      this.apiService.beep();
    }
  }

  changeState2(ionicButton, btn: any) {
    debugger;
    ionicButton.color =  'danger';
    /*
    if(this.answer == btn){
      ionicButton.color =  'success';
    } else {
      ionicButton.color =  'danger';
    }
    */
}

}
