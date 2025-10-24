// let age=99
// if(age>=18 && age<=99){
//     console.log('Eligible for Voting')
// }
// else{
//     console.log('Not Eligible for Voting')
// }


const mom=require('prompt-sync')()
let age=parseInt(mom('Enter Ur Age:'))
if(age>=18 && age<=99){
    console.log('You Are Eligible For Voting')
}else{
    console.log('You Are Not Eligible For Voting')
}