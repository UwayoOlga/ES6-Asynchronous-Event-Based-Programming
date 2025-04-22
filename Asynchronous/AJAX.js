$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
  })
    .done(function(response) {
      console.log('First request succeeded:', response);
      return $.ajax({ url: 'https://jsonplaceholder.typicode.com/comments', method: 'GET' });
    })
    .done(function(comments) {
      console.log('Second request succeeded:', comments);
    })
    .fail(function(error) {
      console.error('Request failed:', error);
    })
    .always(function() {
      console.log('All requests finished');
    });
  