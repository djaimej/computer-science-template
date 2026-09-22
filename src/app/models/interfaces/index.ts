export interface IResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}
export interface IErrorResponse {
    readonly error: string;
    readonly message: string;
    readonly statusCode: number;
}
