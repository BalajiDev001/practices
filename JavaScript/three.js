 const input=require('prompt-sync')()
 let num=parseInt(input("Enter Number:"))
if(num>=100 && num<=999){
  console.log('its an three digit number')
}
else{
    console.log('its not a three digit number')
}