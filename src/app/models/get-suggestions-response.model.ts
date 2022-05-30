import { ErrorResponse } from "./error-response.model";

export interface GetSuggestionsResponse extends ErrorResponse  {
    suggestions: string[];
    sqlQuery: string;
}
