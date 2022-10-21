//let root = document.getElementById("container");


//let cart = JSON.parse(window.localStorage.getItem("cart"));
function tot()
{

let msg = document.createElement("div");
msg.textContent = "Tracking page";

//let w=calculateTotal(cart);
//let r=localStorage.getItem('globtot').value;
let ct;
let pric;let total=0;
for (let key in cart) {
    let value;

    // get the value
    value = cart[key];
    //console.log(key + " - " +  value);


for (let key in value){

    let value1;
    value1 = value[key];
   if (key=="price")
   {pric=value1;
   }
   if(key=="count")
   {ct=value1;
   }
  //  console.log(key + " - " +  value1);
    }
    total=total+(pric*ct);
    // console.log(total);
}
localStorage.setItem("alltotal",total);
console.log('Total ',total);
let w='Total '+total;

//console.log(r);
 document.getElementById('track1').innerHTML = 'Total '+total;;


 root.appendChild(msg);
}






//localStorage.removeItem("cart");
