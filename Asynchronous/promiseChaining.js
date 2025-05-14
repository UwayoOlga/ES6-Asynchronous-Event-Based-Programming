function fetchUserData(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = { id: userId, name: "Alice" };
        console.log("Fetched user data:", user);
        resolve(user);
      }, 1000);  
    });
  }
  
  function fetchUserPosts(user) {
    return new Promise(resolve => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: "My first post" },
          { id: 2, title: "Another thought" },
        ];
        console.log("Fetched user posts:", posts);
        resolve(posts);
      }, 1500); 
    });
  }
  
  function displayPostCount(posts) {
    console.log("Number of posts:", posts.length);
  }
  
  console.log("Starting the process...");
  
  fetchUserData(123)
    .then(user => {
      console.log("User data received, fetching posts...");
      return fetchUserPosts(user); 
    })
    .then(posts => {
      console.log("Posts received, displaying count...");
      displayPostCount(posts); 
    })
    .catch(error => {
      console.error("Something went wrong:", error);
    });
  
  console.log("Continuing other tasks...");   
  