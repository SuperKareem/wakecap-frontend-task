/*
 *
 *  Util: `fetchData`.
 *
 */

type RequestType = "users" | "todos";
type ErrorType = {
  msg: string;
  url: string;
};

const fetchData = async (
  requestType: RequestType
): Promise<[[], ErrorType]> => {
  const url = `https://jsonplaceholder.typicode.com/${requestType}`;
  let error: ErrorType;
  let data: [];

  try {
    const response = await fetch(url);
    if (response.ok) {
      data = await response.json();
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
