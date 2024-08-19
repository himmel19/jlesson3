let banana = +prompt('Введите число бананов')
for (let i = 1; i <= banana; i++) {
    if (i == 1) {
        console.log(i + ' banana');
    }
    else{
        console.log(i + ' bananas');
    }
}

let umn = +prompt('Введите число') 
let answ = 0
for (let i = 1; i <= umn; i++) {
    if(i % 2 == 0){
        answ += i
    }
}
console.log(answ);


let num = +prompt('Введите число')
let stepen = +prompt('Введите степень')
let answer = 1


for (let i = 0; i < stepen; i++) {
    answer = answer * num
}

console.log(answer);

