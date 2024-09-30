import API_CONFIG from "./api";

const fetchInstance = async (
  endpoint,
  options: RequestInit = {
    headers: {},
    method: "GET",
    body: null,
  }
) => {
  const headers = {
    ...API_CONFIG.headers,
    ...options.headers,
  };

  const url = `${API_CONFIG.baseURL}${endpoint}`;

  try {
    // send request and get response
    const response = await fetch(url, { ...options, headers });

    // check if response is ok (200)
    if (!response.ok) {
      // throw new Error if not 200 response
      throw new FetchInstanceError(
        `Network response was not ok: ${response.statusText}`,
        {
          cause: response.status,
          response,
        }
      );
      // throw new Error(`Network response was not ok: ${response.statusText}`, {
      //   cause: response.status,
      //   response,
      // });
    }

    // reponse is ok, so convert request text json to js object and return it for handling
    return await response.json();

  } catch (error) {
    // error occured via fetch or response is not ok.    
    console.error("Fetch error:", error);
    throw error; // re-throw the error for further handling (optional)
  }
};

export default fetchInstance;

export class FetchInstanceError extends Error {
  message: any;
  cause: any;
  response: Response;

  constructor(message: any, options: { cause: any; response: Response }) {
    super();
    this.name = "FetchInstanceError";
    this.message = message;
    this.cause = options.cause;
    this.response = options.response;
  }
}

// interface FetchInstanceError extends Error {
//   message: any;
//   cause: any;
//   response: Response;
// }
// export type { FetchInstanceError };
