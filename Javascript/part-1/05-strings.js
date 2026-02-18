/*
🌟Strings
    - immutable 
    - always gets a new string when I apply any inbuilt function on this 
*/

// Immutable => so cannot modefy
let s = "Gaurav"
s[0] = "g" 
// console.log(s)

/*
🌟Important methods
        - let x = "hello"
        - length => property hai, method nahi hai 
        - toUpperCase()
        - toLowerCase()
        - trim()
        - includes()
        - charAt()
        - at()
            => supports -ve index also
*/

//🤝ek empty string deta hai and ek undefined deta hai
let str = "maurya"
// console.log(str.charAt(9)) 
// console.log(str.at(9))
// console.log(s[9])   // undefined


let x = "   hello world   ";
// console.log(x.trim());
// console.log(x)

// remove all space from the string
let removedAllSpeace = x.replaceAll(" ", "")
// console.log(removedAllSpeace)

// 🌟Interview fav
// console.log("5" + 1);  // + => concatinte
// console.log("5" - 1);  // - => convert ot number then substract
// console.log(1 + "5" );
// console.log(1 - "5"); 



/*
🌟More methods
        - let x = "hello"
            - slice(start, end)
            - split() => convert string to array 
            - join() => convert array to string
            - replace() => first occurance
            - replaceAll()
            - repeat()
*/

// 🌟Negative indexing in slice
x = "hello";
// console.log(x.slice(-3));
// console.log(x.slice(-4, -1));


// 🌟split and split - limit
// console.log(x.split())
// console.log(x.split(""))
// console.log(x.split(" "))

x = "a,b,c,d";
// console.log(x.split(",",2));

//🌟join
let arr = ["h","e","l","l","o"];
// console.log(arr.join())
// console.log(arr.join(""))
// console.log(arr.join(" "))
// console.log(arr.join("-"))


/*
🌟Methods
        - parseFloat()
            => converts string to decimal/NaN
        - parseInt()
            => convert string to integer/NaN
        - toFixed()
            => returns a string
        Note : Rule of parsing 
            - read from start till valid character 
*/


// console.log(parseInt("123"))
// console.log(parseInt("123px"))
// console.log(parseInt("px123"))
// console.log(parseInt("12.99"))
// console.log(parseInt("   50"))
// console.log(parseInt("10",2))
// console.log(parseInt("10",8))
// console.log(parseInt(true))



// console.log(parseInt("12.99"))
// console.log(parseFloat("12.99"))
// console.log(parseFloat("12.3.4"))
// console.log(Number("123abc"))
// console.log(parseFloat("123abc"))






