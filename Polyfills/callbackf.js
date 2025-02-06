// these are functions that are passed as an argument to another function

hello(wait)

function hello(callback){
    console.log("hello");
    callback();

}
function wait(){
    console.log("wait");
}

//Example 2; 

  // In synchronous execution, tasks are performed one at a time, in a sequential order. 
  // Where as in asynchronous execution, multiple tasks can be started concurrently
  
function doSomethingAsync(callback) {
    console.log("Doing something...");
    setTimeout(function() { // Simulate an asynchronous operation
      console.log("Async operation complete!");
      callback("Result of async operation"); // Call the callback with a result
    }, 2000); // Wait 2 seconds
  }
  
  function handleResult(result) {
    console.log("Result received: " + result);
  }
  
  doSomethingAsync(handleResult);
  