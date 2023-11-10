class Arifm{
    num1;
    num2;

    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    Summa(){
        return this.num1 + this.num2;
    }
    Mult(){
        return this.num1 * this.num2;
    }
    Subtraction(){
        return `Результат вычитания y из х = ${this.num1 - this.num2}` + " " + `Результат вычитания x из у = ${this.num2 - this.num1}`;
    }
    Division(){
        return `Результат деления x на у = ${this.num1 / this.num2}` + " " + `Результат деления y на x = ${this.num2 / this.num1}`;
    }
}
value1 = prompt("Введите 1 число 1 пары: ");
value2 = prompt("Введите 2 число 1 пары: ");
value3 = prompt("Введите 1 число 2 пары: ");
value4 = prompt("Введите 2 число 2 пары: ");
value5 = prompt("Введите 1 число 3 пары: ");
value6 = prompt("Введите 2 число 3 пары: ");

var Arr = [new Arifm(+value1, +value2), new Arifm(+value3, +value4), new Arifm(+value5, +value6)];


function sum(){
    document.writeln("Сумма 1 пары чисел: " + Arr[0].Summa() + "<br>" 
    + "Сумма 2 пары чисел: " + Arr[1].Summa() + "<br>"
    + "Сумма 3 пары чисел: " + Arr[2].Summa());
}

function mult(){
    document.writeln("Произведение 1 пары чисел: " + Arr[0].Mult() + "<br>"
    + "Произведение 2 пары чисел:" + Arr[1].Mult() + "<br>"
    + "Произведение 3 пары чисел: " + Arr[2].Mult());
}

function subt(){
    document.writeln("Разность 1 пары: " + Arr[0].Subtraction() + "<br>"
    + "Разность 2 пары: " + Arr[1].Subtraction() + "<br>"
    + "Разность 3 пары: " + Arr[2].Subtraction());
}

function division(){
    document.writeln("Частное 1 пары: " + Arr[0].Division() + "<br>"
    + "Частное 2 пары: " + Arr[1].Division() + "<br>"
    + "Частное 3 пары: " + Arr[2].Division()); 
}