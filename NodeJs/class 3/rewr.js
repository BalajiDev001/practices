import fs from 'fs'
let employees=fs.readFileSync('employees.json','utf-8')
let emp_data=JSON.parse(employees)
let male_employees =[]
for(let emp of emp_data){
    if(emp.gender==='male'){
        male_employees.push(emp)
    }
}
fs.writeFileSync('mal')