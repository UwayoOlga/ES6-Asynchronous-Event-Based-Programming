/*3.  Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.

Endpoint: https://jsonplaceholder.typicode.com/users
 */
function myFetch(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();  

        xhr.open('GET', url);  

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const data = JSON.parse(xhr.responseText);   
                    resolve(data);   
                } catch (error) {
                    reject('Failed to parse response as JSON');
                }
            } else {
                reject(`Request failed with status ${xhr.status}`);
            }
        };
        xhr.onerror = function () {
            reject('Network error occurred');
        };
        xhr.send();  
    });
}
