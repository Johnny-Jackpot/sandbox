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

class RequestBuilder {
  private url: string = '';
  private method: string = 'GET';
  private headers: Record<string, string> = {};
  private query: Record<string, string> = {};
  private body: string = '';
  private timeout: number = 5000;
  private retries: number = 0;
  private validateStatus: boolean = true;
  private cache: boolean = false;
  private followRedirects: boolean = true;

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  setMethod(method: string) {
    this.method = method;
    return this;
  }

  addHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  setHeaders(headers: Record<string, string>) {
    this.headers = headers;
    return this;
  }

  setQuery(query: Record<string, string>) {
    this.query = query;
    return this;
  }

  addQuery(key: string, value: string) {
    this.query[key] = value;
    return this;
  }

  setBody(body: string) {
    this.body = body;
    return this;
  }

  setTimeout(timeout: number) {
    this.timeout = timeout;
    return this;
  }

  setRetries(retries: number) {
    this.retries = retries;
    return this;
  }

  setValidateStatus(validateStatus: boolean) {
    this.validateStatus = validateStatus;
    return this;
  }

  setCache(cache: boolean) {
    this.cache = cache;
    return this;
  }

  setFollowRedirects(followRedirects: boolean) {
    this.followRedirects = followRedirects;
    return this;
  }

  build() {
    return new HTTPRequest(
      this.url,
      this.method,
      this.headers,
      this.query,
      this.body,
      this.timeout,
      this.retries,
      this.validateStatus,
      this.cache,
      this.followRedirects,
    );
  }
}

const anotherRequest = new RequestBuilder()
  .setUrl('https://example.com')
  .addHeader('Content-Type', 'application/json')
  .addQuery('page', '1')
  .build();