import { ErrorResponse } from "./error-response.model";

export interface TestHttpResponse extends ErrorResponse {
    suggestions: string[];
    requestStringValue: string;
    requestIntValue: number;
    responseStringValue: string;
    responseIntValue: number;
}
