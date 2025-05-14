function checkUserAccess(isAuthorized) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isAuthorized) {
          resolve("Access granted ");
        } else {
          reject("Access denied ");
        }
      }, 1500); 
    });
  }
  
  async function authorizeUser() {
    console.log("Checking user access...");
    try {
      const result = await checkUserAccess(true); n
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Authorization process finished.");
  }
  
  authorizeUser();
  