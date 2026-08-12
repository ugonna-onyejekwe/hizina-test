export interface ResolveNotifySuccessData {
  code: 200;
  message: string;
  paymentmode: string;
  paymentref: string;
  abbre: string;
  curcode: string;
}

export interface ResolveNotifyErrorData {
  code: 500;
  message: string;
  token: null;
  username: null;
  systemid: string;
  region: null;
  publicKey: null;
  privateKey: null;
  error: string;
  status: string;
}

export interface ResolveNotifySuccessResponse {
  data: ResolveNotifySuccessData;
  statusCode: 200;
  message: string;
  responseCode: "00";
  success: true;
  batchId: null;
}

export interface ResolveNotifyErrorResponse {
  data: ResolveNotifyErrorData;
  statusCode: 500;
  message: string;
  responseCode: "05";
  success: false;
  batchId: null;
}

export type ResolveNotifyApiResponse =
  | ResolveNotifySuccessResponse
  | ResolveNotifyErrorResponse;

export interface ResolveNotifyReturn {
  data: ResolveNotifySuccessData | null;
  error: string | null;
}
