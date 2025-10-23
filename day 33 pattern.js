const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number : "));
// triangle pattern
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log(" ")
// }

// triangle pattern with number
/*

1
1 2 
1 2 3
1 2 3 4 

*/
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j + " ");
//     }
//     console.log(" ")
// }

 
// triangle pattern with alphabet (for this enter value more than 65)
/*

A
A B 
A B C
A B C D 

*/
// for (let i = 65; i < n; i++) {
//     for (let j = 65; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(j)  + " ");
//     }
//     console.log(" ")
// }


// triangle pattern  (negative number)
/*

1 2 3 4 5
1 2 3 4
1 2 3 
1 2 
1 

*/
// for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= n-i; j++) {
//         process.stdout.write(j  + " ");
//     }
//     console.log(" ")
// }

