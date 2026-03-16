const crypto = require("crypto")

const start = Date.now();

console.log("start : TL")

for(let i=0; i<4; i++){
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha256", () => {
    console.log(`Password ${i+1} has been hashed", ${Date.now() - start}`);
});
}

console.log("end : TL");


//UV_THREADPOOL_SIZE=2 node 04-thread.js 