let arr = [10, 20, 30, 40];

console.log('FOR iterativo');
for (var val of arr) {
    console.log(val); // prints values: 10, 20, 30, 40
}

console.log('FOR indexado');
for (let i = 0; i < arr.length; i++) {
    console.log(`posição ${i} valor ${arr[i]}`); // prints values: 10, 20, 30, 40
}


let i: number = 2;
while (i < 4) {
    console.log(`execução ${i}`)
    i++;
}

let y: number = 2;
do{
    console.log(`execução ${y}`);
    y++;
} while (y < 4) 