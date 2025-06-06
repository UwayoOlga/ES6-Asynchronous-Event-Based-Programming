//Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => {
          if (n === 0) {
            reject(error);
          } else {
            setTimeout(() => {
              attempt(n - 1);
            }, delay);
          }
        });
    }
    attempt(retries);
  });
}
