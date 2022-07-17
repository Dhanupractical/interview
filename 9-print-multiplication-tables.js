const tables = {};
for ( let i =1; i <= 5; i++){
     const obj ={};
     for (let j = 1; j<= 10; j++){
         obj[j] = j*i
     }

     tables[i] = obj;
}
console.table(tables);