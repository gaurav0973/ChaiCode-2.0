// "use strict"
// console.log("Simple This : ", this)
// console.log(typeof this)

function whatIsThis(){
    return this
}
function whatIsThisType(){
    return typeof this
}

// console.log("This inside a fucntion : ", whatIsThis())
// console.log(whatIsThisType())

// this = current context 

const user = {
    name: "Maurya",
    role: "Software Developer",
    introduce(){ //this = user
        return `${this.name} is a ${this.role}`
    }
}

// console.log(user.introduce())


const maurya = {
    fullName : "Gaurav Maurya",
    hobbies : ["Coding", "Gardening", "Travelling"],
    listMyHobbies(){ // this = maurya
        console.log(`${this.fullName}'s hobbies are : `)
        this.hobbies.forEach((hobby, idx)=>{
            console.log(`${this.fullName.split(" ")[1]}'s hobby ${idx + 1} : ${hobby}`)
        })
    }
}
// maurya.listMyHobbies()

const gaurav = {
  fullName: "Gaurav Maurya",
  hobbies: ["Coding","Gardening"],

  listMyHobbies: () => {
    console.log(this.fullName);
  }
}
// gaurav.listMyHobbies();

const mauryaEvolves = {
    channelName : "MauryaEvolves",
    listAllPlaylist(){ //this = mauryaEvolves
        console.log("Outer this.channelName : ", this.channelName); //MauryaEvolves

        function ChaiCodeCohort(){
            console.log("Inside normal function this.channelName :", this.channelName); //undefined
        }
        ChaiCodeCohort()

        const englishLearningChallenge = ()=>{ //this = mauryaEvolves
            console.log("Inside Arrow function this.channelName :", this.channelName);
        }
        englishLearningChallenge()

        const nestedArrowFunction = () =>{ //this = mauryaEvolves 
            console.log("Inside Arrow function this.channelName :", this.channelName);
            const insideArrow = () => {  //this = mauryaEvolves 
                console.log("Inside of inside Arrow function this.channelName :", this.channelName);
            }
            insideArrow()
        }
        nestedArrowFunction()
    }
}
mauryaEvolves.listAllPlaylist()

