

// 1. Type Aliases => create custom names for types 
//  => resuable and more readable code
type Team = {
    name: string,
    getSquad: () => void,
    readonly price: number,
    isBanned: boolean
}
let csk: Team = {
    name: "Chenni Super Kings",
    getSquad() {
        return ["Thala"];
    },
    price: 500_000,
    isBanned: true,
};

// 2. Union Types => variable can hold multiple types
function kgToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.20462;
    } else {
        let num = parseFloat(weight);
        if (isNaN(num)) {
            throw new Error("Invalid weight format");
        }
        return num * 2.20462;
    }
}


// 3. Intersection Types => combine multiple types into one
type Male = {
    speak: () => void;
}
type Lion = {
    roar: ()=> void;
}
type Narasimha = Male & Lion;
let narasimha: Narasimha = {
    speak() {
        console.log("I can speak");
    },
    roar() {
        console.log("I can roar");
    }
}

//4. Nullable => mereko bqatrana padega ki variable null bhi ho sakta hai because 
//  Bidefault sabka type any hota hai 
function greet(name: string | null | undefined): void{
    if(name) {
        console.log(`Hello, ${name.toUpperCase()}!`);
        return
    }
    console.log("Hello, Guest!");
}
// greet("Gaurav");
// greet(null);
// greet(undefined);

//5. Optional Chaining
type Customer={
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

//6. Nullish Coalescing
//=> fallback value provide karta hai jab left side null ya undefined hota hai
function getCustomerBirthday(id: number): string {
    const customer = getCustomer(id);
    const birthday = customer?.birthday?.toDateString() ?? "No birthday available";
    return birthday;
}

// 7. Type Assertions => compiler ko batana ki variable ka type kya hai
// => use with caution, wrong assertion se runtime error aa sakta hai
// let someValue = document.getElementById("myElement") as HTMLInputElement;
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;