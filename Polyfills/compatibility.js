
const arr = [1,2,3,4]
// simulate browser incompatibility

Array.prototype.forEach = null
// checking compatibility
if(!Array.prototype.forEach)
{
    // polyfill
    Array.prototype.forEach = function(callbackfunction)
    {
        for(let val of this)
            callbackfunction(val)
    }
}

arr.forEach((val) => {
    console.log(val *2)
})