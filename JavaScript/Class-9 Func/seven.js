// let numbers=[10,20,30,89,40,50]
// for(let num of numbers){
//     if(num%2 !==0){
//         break;            //its come out from loop
//     }
//     console.log(num);
    
// }

function calc(){
let number=[10,20,25,30,40]
for(let num of number){
    if(num%2 !==0){
        // break;
        return
    }
    console.log(num);
    
}
console.log('good morning');
}
calc()