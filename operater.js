
let num1 = prompt(" enter  first number");
console.log("num1",num1);
let num2 = prompt(" enter  second number");
console.log(num2);
let a = prompt("operater");
let text=0;


switch (a) {
    case "+":
        text = parseInt(num1) +parseInt(num2) ;
        console.log(text)
        break;
    case "-":
        text = num1 - num2;
        console.log(text)
        break;
    case "*":
        text = num1 * num2;
        console.log(text)
        break;
    case "/":
        text = num1 / num2;
        console.log(text)


}