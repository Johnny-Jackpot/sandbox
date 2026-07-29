function runUrlDemo() {
  const apiUrl = new URL('https://api.example.com/users?page=2&limit=10&sort=latest');
  console.log(apiUrl.href);
  console.log(
    apiUrl.protocol,
    apiUrl.hostname,
    apiUrl.pathname,
    apiUrl.search,
  );

  console.log(
    apiUrl.searchParams.get('page'),
    apiUrl.searchParams.get('limit'),
    apiUrl.searchParams.get('sort'),
  );

  apiUrl.searchParams.set('page', '10');
  console.log(apiUrl.href);

  const queryParams = new URLSearchParams(apiUrl.search);
  console.log(queryParams)
}

runUrlDemo();