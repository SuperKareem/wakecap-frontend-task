/*
 *
 *  Util: `fetchData`.
 *
 */
import { RequestType, ErrorType, Options } from "./interfaces";

const fetchData = async <T>({
  requestType,
  userId,
  transformer,
}: Options<T>): Promise<[T, ErrorType]> => {
  let url = `https://jsonplaceholder.typicode.com/${requestType}`;

  if (userId) {
    url = `${url}?userId=${userId}`;
  }

  let error: ErrorType;
  let data: T;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const resData = await response.json();
      data = transformer ? transformer(resData) : resData;
    } else {
      error = { url, msg: `${response.status} ${response.statusText}` };
    }
  } catch (err) {
    error = {
      url,
      msg: err,
    };
  }

  return [data, error];
};

export default fetchData;
