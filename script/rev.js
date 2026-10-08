// implement for of and for in 
let array = ["🍎", "🍏", "🥭", "🍑", "🍋"];
console.log("\n\t Array : [ " + array + " ]\n")

let r = function (arr) {

    console.log("\n\t reverse array  ");
    let a = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        a = a + " " + arr[i];
    }
    console.log("\n\t Array  : [ " + a + " ]\n")

}

r(array);


