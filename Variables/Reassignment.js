/* Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!
In this exercise, you're going to write some code to help Lucian cook 
an exquisite lasagna from his favorite cookbook.
You have four tasks related to the time spent cooking the lasagna. */

// Task 1: Define the expected oven time in minutes.

export const EXPECTED_MINUTES_IN_OVEN = 40;

//Task 2: Calculate the remaining oven time in minutes

export const remainingMinutesInOven = (actualMinutesInOven) => 
    EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;

// Task 3 : Calculate the preparation time in minutes

export const preparationTimeInMinutes = (numberOfLayers) => numberOfLayers * 2;

// Task 4 : Calculate the total working time in minutes

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    const preparationTime = preparationTimeInMinutes(numberOfLayers);
    return preparationTime + actualMinutesInOven;
  }