
//arrow functions in (ES6)
//()=>{}

//function expressions
const s = (n) => {
    var s = 0;

    for (var i = 0; i <= n; i++) {
        s = s + i;
    }
    return s;
}

var result = s(100)

console.log("\n\t result : " + result)



