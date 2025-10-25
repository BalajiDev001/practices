let users=
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

let no_male_users=0;
for(let i=0; i<=users.length-1; i++){
    if(users[i].gender==='male'){
        no_male_users=no_male_users+1;
    }
}
console.log('no of male users',no_male_users)