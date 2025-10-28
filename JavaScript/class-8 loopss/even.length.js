let numbers=[10,13,15,18,20,17]

let i=0;
even_numbers=0;
while(i<=numbers.length-1){
    if(numbers[i]%2===0) even_numbers++;
    i++
}
console.log("no of even numbers:",even_numbers)