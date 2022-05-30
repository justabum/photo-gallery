import { GuessType } from "./guess-letter.model";

export interface UiGuessLetter {
    type: GuessType;
    letter: string;
    color: string;
}
