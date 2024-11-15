//let fruits = [];
//fruits[9999] = 5;
//fruits.age = 25;
//console.log(fruits);//
//let arr = new Array(1); // will it create an array of [2] ?
//arr = ("hello", "world", "!")

//console.log(arr);
//console.log(arr.length);    
//let styles = ["Jazz","Blues"];
//styles.push("Rock-n-Roll");
//styles[Math.floor((styles.length-1) /2)] = "Classics";
//styles.shift();
//styles.unshift("Rap","Reggae");
//console.log(styles);

function sumInput() {
    let numbers = [];
    
    while (true) {
        let value = prompt("Enter a number Please?", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
    

}
//alert(sumInput());
console.log(sumInput());


