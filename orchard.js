///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89;
const galaPrice = .64;
const pinkPrice = .55;



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// In this code i start with defining a count for each type of apple
let fujiCount = 0;
let galaCount = 0;
let pinkCount = 0;
let totalAcres = 0;

// I cound the apples using a for loop to count up while adding to the counter of each type

    for (i = 0; i < fujiAcres.length; i++){
        fujiCount += fujiAcres[i]; // Counting 
        galaCount += galaAcres[i];
        pinkCount += pinkAcres[i];
    }

    totalAcres = fujiCount + galaCount + pinkCount;

/*console.log("The Fuji count is " + fujiCount)
console.log("The Gala count is " + galaCount)
console.log("The Pink count is " + pinkCount)*/
console.log("We have a total ancorage of " + totalAcres)

console.log('======================================')
// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// taking the total of all the days and dividing by 7 for the days of the week
 let averageDailyAcres = totalAcres / 7;
 console.log(averageDailyAcres + " Acres are picked on average per day")


 console.log('======================================')
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/
// here we will take acers left and subtract by the average daily amount
let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0){
    days++; // this adds a day per itereation
    acresLeft -= averageDailyAcres; // this is the subtraction code
}
console.log(`It will take ${days} days to finish picking the orchards`)
console.log('======================================')
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE



// we start with defining new arrays to store the the tons
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

    for (i = 0; i < fujiAcres.length; i++){ // we run this for the length of the array
            fujiTons.push(fujiAcres[i] * 6.5)// here we ar taking the number of acres and multiplying it by how much is in each acre
            galaTons.push(galaAcres[i] * 6.5)
            pinkTons.push(pinkAcres[i] * 6.5)
}
    

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)





console.log('======================================')
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// defined empty variables 
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;


    for (i = 0; i < fujiTons.length; i++){// this runs for the length of tons we defined in problem 4
        fujiPounds += fujiTons[i]; // this will add all the array intergers into one number
        galaPounds += galaTons[i];
        pinkPounds += pinkTons[i];
    }

    fujiPounds *= 2000; // this is taking the total tonnage and converting to pounds
    galaPounds *= 2000;
    pinkPounds *= 2000;

console.log(`There are ${fujiPounds} Fuji pounds`)
console.log(`There are ${galaPounds} Gala pounds`)
console.log(`There are ${pinkPounds} Pink pounds`)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
console.log('======================================')
// CODE HERE

let fujiProfit = fujiPounds * fujiPrice;// this will take the total pounds and multiply buy the price to find the price of each type
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;
/*console.log(fujiPrice)
console.log(galaPrice)
console.log(pinkPrice)*/

console.log(`Fuji made $${fujiProfit}`)
console.log(`Gala made $${galaProfit}`)
console.log(`Pink made $${pinkProfit}`)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
console.log('======================================')
// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit; // this adds the profits together into one variable
console.log("Apples this week made $" + totalProfit)