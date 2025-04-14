//  program that shows the delay in execution

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(greet, 2000);
sayName('John');

//Data fetching example

function fetchData(url, callback) {
  
    setTimeout(() => {
      const data = `Data fetched from ${url}`;
       callback(null, data); 
    }, 2000);
  }
  
  function processData(error, result) {
    if (error) {
      console.error("Error:", error);
      return;
    }
    console.log("Data:", result);
  }
  
  fetchData("https://example.com/api/data", processData);
  console.log("Fetching data..."); 