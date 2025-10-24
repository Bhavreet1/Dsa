const prompt = require("prompt-sync")();
// mirrored right angle triangle
/*      *
      * *
    * * *
  * * * *     */

const n = parseInt(prompt("Enter value : "));

for (let i = n - 1; i >= 0; i--){
    for (let j = i; j >= 1; j--){
        process.stdout.write("  ")
    }
    for (let j = 1; j <= n-i; j++){
        process.stdout.write("* ")
    }
    console.log(" ")
}
