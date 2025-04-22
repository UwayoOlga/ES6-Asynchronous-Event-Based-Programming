fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(err => {
    console.log('Something went wrong:', err);
  });
