/*Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

  */

function fetchMultipleAPIs(urls) { 
  const fetchPromises = urls.map(url => fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    }
    return res.json();
  })); 
  return Promise.all(fetchPromises);
}
/*
urls.map(...): For each URL, it creates a fetch request.

Each fetch response is checked for success (res.ok).

If successful, it parses JSON with res.json().

Promise.all(fetchPromises) runs all fetches in parallel and resolves once all succeed.

If any fetch fails, the whole promise rejects. */