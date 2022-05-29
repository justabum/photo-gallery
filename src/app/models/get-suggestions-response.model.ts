import { ErrorResponse } from "./error-response.model";

export interface GetSuggestionsResponse extends ErrorResponse  {
    Suggestions: string[];
}
