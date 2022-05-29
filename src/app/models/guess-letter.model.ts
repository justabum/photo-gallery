export interface GuessLetter {
    type: GuessType;
    letter: string;
}

export enum GuessType {
    RightPosition = 1,
    WrongLetter = 2,
    WrongPosition = 3
}