/*Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and to-dos concurrently from the provided API endpoints and combine them based on the `userId`. The function should return a promise that resolves with the combined data.

- Users endpoint `https://jsonplaceholder.typicode.com/users`
- To-dos endpoint `https://jsonplaceholder.typicode.com/todos`
- The returned promise should resolve into an array of users, where each user object has a new key `todos`. This key should contain an array of to-dos that belong to the user, determined by matching the `userId` of the todo with the `id` of the user. User objects may look like */
