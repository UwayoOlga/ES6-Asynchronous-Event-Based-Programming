/*The following function attempts to fetch user data and display the user's name in uppercase. However, it has several potential failure points that are not properly handled. Your task is to rewrite this function to gracefully handle all possible errors including network failures, JSON parsing errors, missing user data, and missing properties. The function should never crash and should provide meaningful error messages or fallback values.
Fix the error handling in this function:
async function getUserData(userId) {
  const user = await fetch(`/api/users/${userId}`);
  const userData = await user.json();
  console.log(userData.name.toUpperCase()); // What if name is undefined?
  return userData;
}

 */
async function getUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    let userData;

    try {
      userData = await response.json();  
    } catch (jsonError) {
      throw new Error('Failed to parse user data as JSON.');
    }
 
    const name = userData?.name;//Uses optional chaining (?.) to safely try accessing name where If userData is null or missing, it avoids crashing.
    if (typeof name === 'string') {
      console.log(name.toUpperCase());
    } else {
      console.warn('Name is missing or not a string.');
    }
    return userData;

  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;  
  }
}
