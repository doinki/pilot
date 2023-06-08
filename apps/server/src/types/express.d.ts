/* eslint-disable */

declare namespace Express {
  export interface Response<
    ResBody = any,
    LocalsObj extends Record<string, any> = Record<string, any>,
    StatusCode extends number = number
  > extends http.ServerResponse,
      Express.Response {
    originalSend: Send<ResBody, this>;
  }
}
