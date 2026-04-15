import fs from 'node:fs';


/*
1. write
    - file exists => write in that => agar pahle se hi data hai tb phir override kar dega
    - or create and then write
*/
// fs.writeFileSync("test.txt", "Kya haal chaal")


/*
2. READ
*/
// const data = fs.readFileSync("test.txt") //mujhe ye language nahi aati
// const data = fs.readFileSync("test.txt", "utf-8")
// console.log(data)


/*
3. APPEND/UPDATE
*/
// fs.appendFileSync("test.txt", "\nHello ji, ye append hua hai")

/*
4. Making folder
    - recursive = true => nasted me kaam karne ke liye 
*/
// fs.mkdirSync("new-folder/abc", {recursive:true})

/*
5. delete = unlink 
*/
fs.unlinkSync("test.txt")