class HTTPRequest {
  constructor(
    public url: string,
    public method: string,
    public headers: Record<string, string>,
    public query: Record<string, string>,
    public body: string,
    public timeout: number,
    public retries: number,
    public validateStatus: boolean,
    public cache: boolean,
    public followRedirects: boolean,
  ) {
  }
}

const request = new HTTPRequest(
  'https://example.com',
  'GET',
  { 'Content-Type': 'application/json' },
  { page: '1' },
  '',
  5000,
  3,
  true,
  false,
  true,
);