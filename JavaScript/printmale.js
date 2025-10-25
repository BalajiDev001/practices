let employees=
[{"eid":1,"ename":"Maurice","gender":"Male"},
{"eid":2,"ename":"Barbette","gender":"Female"},
{"eid":3,"ename":"Ursulina","gender":"Female"},
{"eid":4,"ename":"Julienne","gender":"Female"},
{"eid":5,"ename":"Mabelle","gender":"Female"},
{"eid":6,"ename":"Crystie","gender":"Female"},
{"eid":7,"ename":"Enriqueta","gender":"Female"},
{"eid":8,"ename":"Lilly","gender":"Female"},
{"eid":9,"ename":"Gothart","gender":"Male"},
{"eid":10,"ename":"Hyman","gender":"Male"}]

//to read male employees only
for(let emp of employees){
    if(emp.gender==='Male'){
        console.log(emp.ename)
    }
}

// console.log(employees)

console.log('females*******')
// to read female employees only
for(let user of employees){
    if(user.gender==='Female'){
        console.log(user.ename)
    }
}