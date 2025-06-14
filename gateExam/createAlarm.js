/*Create a function called createAlarm that generates a wake-up message for a person after a specified time delay. This function should accept two parameters: the person's name and the delay time in seconds. The function should return a promise that resolves with the wake-up message (e.g. Wake up person) but if the delay is less than 2 seconds, the promise should be immediately rejected with an error message stating Delay is not sufficient */

function createAlarm(name, delayInSeconds) {
    return new Promise((resolve, reject) => {
        if (delayInSeconds < 2) {
            reject("Delay is not sufficient");
        } else {
            setTimeout(() => {
                resolve(`Wake up ${name}`);
            }, delayInSeconds * 1000);  
        }
    });
}
