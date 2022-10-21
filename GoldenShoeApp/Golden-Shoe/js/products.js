let shoes = [];
fetch(`${ENDPOINT}/products1`)
.then(response => {
   return response.json();
}).then(data => console.log(data));/*
.then(data => {shoes = data.products1; init();});
function init(){
    shoes.forEach(shoe => {console.log(shoe)})
    /* shoes.forEach(obj => {
             Object.entries(obj).forEach(([key, value]) => {
                 console.log(`${key} ${value}`);
             });
             console.log('-------------------');
         });





}*/