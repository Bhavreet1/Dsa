const prompt = require("prompt-sync")();
// mirrored right angle triangle
/*      *
      * *
    * * *
  * * * *     */

const n = parseInt(prompt("Enter value : "));

// for (let i = n - 1; i >= 0; i--){
//     for (let j = i; j >= 1; j--){
//         process.stdout.write("  ")
//     }
//     for (let j = 1; j <= n-i; j++){
//         process.stdout.write("* ")
//     }
//     console.log(" ")
// }



// cross pattern
// for (let i = 1;i<=n ; i++){
//     for (let j = 1; j<=n; j++){
//         if (i == j || i + j == n + 1) {
//             process.stdout.write("* ");
//         }
//         else {
//             process.stdout.write("  "); 
//         }
//     }
//     console.log(" ");
// }

// v pattern 
for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n * 2; j++){
        if (i == j || i+j ==n*2) process.stdout.write("* ");
        else process.stdout.write(" ");
    }
    console.log(" ");
}
