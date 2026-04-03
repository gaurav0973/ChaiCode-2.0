let sales: number = 123_456_789;
let largeNumber: bigint = 9007199254740991n;
let course: string = "Total TypeScript";
let is_published: boolean = true;
let name: undefined = undefined;
let sym: symbol = Symbol();

//1. any => noImplicitAny: true karna padega
// avoid as much as possible
let naam: any;


//2. unknown => typesafe version of any
// mujhe nahi pata ki tum kaun ho => mai check karunga ki tum ye ho ki vo ho => type narrowing
function render(document: unknown) {
    if (typeof document === 'string') {
        console.log(document.toUpperCase());
    }
    else if (typeof document === "string" && document.endsWith(".jgp")) {
        // show img
    }
    else {
        console.log(document);
    }
}


// 3. never => value that never occurs
function propose(message: string): never {
    throw new Error("Tumhara taste achha hai, par meri choice itni buri nahi.");
}
// propose("abcd")

// 4. void => function that doesn't return anything
function print(message: string): void {
    console.log(message);
    return 
}

// 5. enum => group of related values
const enum TeamSize {
    Weak=1,
    Good,
    Strong
}
let yellowTeam: TeamSize = TeamSize.Good;


// 6. Array => collection of similar values
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob", "Charlie"];

// 7. Tuple => fixed length array with different types
let album: [string, number, string] = ["Mantra", 2025, "Radhika Das"];


// 8. Object => collection of key-value pairs
let mentor: 
{ 
    id: number, 
    name: string, 
    isActive: boolean, 
    age:number, 
    // function
    teaches: (subjects: string[]) => void,
    address?:{
        street: string,
        city: string,
    }

} = {
    id: 1,
    name: "Anirudh",
    isActive: true,
    age: 28,
    teaches: (subjects: string[]) => {
        console.log(`Teaching ${subjects.join(', ')}`);
    }
}


// 9. Function
function calculatePrice(team: string): number{
    if(team.toLowerCase() === "rr") {
        return 15e10; // 15,000 crore
    }
    if(team.toLowerCase() === "rcb") {
        return 16e10; // 16,000 crore
    }
    return NaN
}


// 10. Type inferance => TypeScript automatically infers the type based on the assigned value
let courseName = "Total TypeScript";
let isPublished = true;
let rating = 4.5;


