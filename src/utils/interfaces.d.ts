export type RequestType = "users" | "todos";

export type ErrorType = {
  msg: string;
  url: string;
};

export type Options<T> = {
  requestType: RequestType;
  userId?: number;
  transformer?: (data: T) => T;
};
