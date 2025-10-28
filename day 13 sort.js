// selection sort

let arr2 = [1, 9, 0, 4];
function selection_sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            // swap
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;
}
// console.log(selection_sort(arr2));


function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubble_sort(arr2));