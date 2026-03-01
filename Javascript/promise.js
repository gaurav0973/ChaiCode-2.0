// const collegePromise = new Promise((resolve, reject) => {
//     let gotPlacement = true;
//     if (gotPlacement) {
//         resolve("Placement mil gai !");
//     } else {
//         reject("Mere bass ki nahi hai, sales job cahiye tb batao");
//     }
// });

// collegePromise
//     .then((message) => console.log(message)) 
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Bye bye college"));


// const passExams = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Back nahi aai.."), 1000);
// });

// const getPlacement = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Placement mil gai..."), 2000);
// });

// const microsoft = new Promise((resolve, reject) => {
//   setTimeout(() => reject("ye kaun si company hai, maine to coding labs me bhi notepad par code karata hu"), 500);
// });

// const salesCompany = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("you are now placed..."), 1500);
// });

// const wardenReply = new Promise((resolve, reject) => {
//   setTimeout(() => reject("You are not allowed to use electric appliance.."), 500);
// });



//---------Promise.all()---------------------------------
// const passExams = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Back nahi aai.."), 1000);
// });

// const getPlacement = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Placement mil gai..."), 2000);
// });

// const microsoft = new Promise((resolve, reject) => {
//   setTimeout(() => reject("ye kaun si company hai, maine to coding labs me bhi notepad par code karata hu"), 500);
// });
// Promise.all([passExams, getPlacement, microsoft])
//   .then((results) => {
//     console.log("Life is set!", results);
//   })
//   .catch((error) => {
//     console.error("Sapne toot gaya:", error); 
//   });

// ---------Promise.any()--------------------------
// const microsoft = new Promise((resolve, reject) => {
//   setTimeout(() => reject("ye kaun si company hai, maine to coding labs me bhi notepad par code karata hu"), 500);
// });

// const salesCompany = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("I  am now placed..."), 1500);
// });
// Promise.any([microsoft, salesCompany])
//   .then((firstOffer) => {
//     console.log("Berozgar nahi hu ab:", firstOffer); 
//   })
//   .catch((error) => {
//     console.error("Dono ne reject kar diya.");
//   });


// -------------Promise.allSettled()------------------------------------- 

// const passExams = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Back nahi aai.."), 1000);
// });

// const getPlacement = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Placement mil gai..."), 2000);
// });

// const microsoft = new Promise((resolve, reject) => {
//   setTimeout(() => reject("ye kaun si company hai, maine to coding labs me bhi notepad par code karata hu"), 500);
// });

// console.log("Final report card...");
// Promise.allSettled([passExams, getPlacement, microsoft])
//   .then((reportCard) => {
//     console.log("College Summary:");
//     reportCard.forEach((item, idx) => {
//       if (item.status === "fulfilled") {
//         console.log(`Goal ${idx + 1}: Success -> ${item.value}`);
//       } else {
//         console.log(`Goal ${idx + 1}: Failed -> ${item.reason}`);
//       }
//     });
//   });


//-----------Promise.race()---------------------------------
const wardenReply = new Promise((resolve, reject) => {
  setTimeout(() => reject("You are not allowed to use electric appliance.."), 500);
});
const deanReply = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Dean: Off-campus ke liye leave approved"), 2500);
});


console.log("Waiting for permission to leave the hostel...");
Promise.race([wardenReply, deanReply])
  .then((response) => {
    console.log("Got permission:", response);
  })
  .catch((error) => {
    console.error("Stuck in the hostel:", error);
  });