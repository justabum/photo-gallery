import { GuessLetter } from "./guess-letter.model";

export interface GetSuggestionsRequest {
    Guesses: GuessLetter[][];
    ReturnQuery: boolean;

}
