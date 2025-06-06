// function getData(callback) {
//   setTimeout(() => {
//     callback("Here’s your data");
//   }, 1000);
// }

// getData(result => {
//   console.log(result);
// });
 
function getData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Here’s your data");
        }, 1000);
    });
}
getData().then(result => {
    console.log(result);
});