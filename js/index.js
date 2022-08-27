var num1 = prompt("Enter your first number :")
var num2 = prompt("Enter your first number :")

num1 = parseInt(num1, 10)
num2 = parseInt(num2, 10)

var sum, sub, kol, mol

sum = num1 + num2;
document.write("Plus =" + sum + "<br>");


sub = num1 - num2;
document.write("Minus =" + sub + "<br>");

kol = num1 * num2;
document.write("intu =" + kol + "<br>");

mol = num1 % num2;
document.write("Parsent =" + mol);