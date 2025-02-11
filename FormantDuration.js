/*Write a function that formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes, and seconds.

It is much easier to understand with an example:

```jsx
* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
```

**For the purpose of this Exercise, a year is 365 days and a day is 24 hours.**

Note that spaces are important.

 **Detailed rules**

The resulting expression is made of components like `4 seconds`, `1 year`, etc. In general, a positive integer and one of the valid units of time, are separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (`", "`) except for the last component, which is separated by `" and "`, just like it would be written in English.

A more significant unit of time will occur before a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.Different components have different units of time. So there are no repeated units like in 5 seconds and 1 second.
A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by a component must not be greater than any valid more significant unit of time.
Test Cases
    dotest(1, "1 second");
    dotest(62, "1 minute and 2 seconds");
    dotest(120, "2 minutes");
    dotest(3600, "1 hour");
    dotest(3662, "1 hour, 1 minute and 2 seconds");
 */

    function formatDuration(seconds) {
        if (seconds === 0) {
          return "now";
        }
      
        // Define the time units in descending order.
        const timeUnits = [
          { unit: "year",   seconds: 365 * 24 * 3600 },
          { unit: "day",    seconds: 24 * 3600 },
          { unit: "hour",   seconds: 3600 },
          { unit: "minute", seconds: 60 },
          { unit: "second", seconds: 1 }
        ];
      
        // Build an array of formatted time components.
        const components = [];
      
        for (const { unit, seconds: unitSeconds } of timeUnits) {
          const count = Math.floor(seconds / unitSeconds);
          if (count > 0) {
            seconds -= count * unitSeconds;
            // Append the component with proper pluralization.
            components.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
          }
        }
      
        // Join the components into the final string.
        // If there is only one component, return it directly.
        if (components.length === 1) {
          return components[0];
        }
        // If there are exactly two components, join them with ' and '.
        if (components.length === 2) {
          return components.join(" and ");
        }
        // Otherwise, join all but the last with ', ' and append ' and ' before the last one.
        const lastComponent = components.pop();
        return components.join(", ") + " and " + lastComponent;
      }
       