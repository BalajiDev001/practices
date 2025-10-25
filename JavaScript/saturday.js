const meow=require('prompt-sync')()
let age=parseInt(meow('Enter Ur Age:'))
if(age>=18 && age<=70){
    console.log('You Are Eligible For Voting ')
}else{
    console.log('You Are Not Eligible For Voting')
}