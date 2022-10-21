
function addcustomer()
{
let intable='';
let f= document.getElementById('fname').value;
let l=document.getElementById('lname').value;
let c=document.getElementById('caddress').value;
let ce=document.getElementById('cemail').value;
let cp=document.getElementById('cphone').value;
let cn=document.getElementById('cuname').value;
let cpw=document.getElementById('cpas').value;

if (f==''||l==''||c==''||ce==''||cp==''||cn==''||cpw=='')
{

document.getElementById("Div2").innerHTML = "All must be entered";
}


 if( alreadyexists(cn)==='true')// get all get by un ==true
{
 document.getElementById('Div2').innerHTML = 'Username already Exist Try another';
}


 if (alreadyexists(cn)==='false'){

let _data = {
  "firstname": document.getElementById('fname').value,
  "Lastname": document.getElementById('lname').value,
  "customeraddress":document.getElementById('caddress').value,
  "customeremail":document.getElementById('cemail').value,
  "customerphone":document.getElementById('cphone').value,
  "usern":document.getElementById('cuname').value,
  "passw":document.getElementById('cpas').value
}



fetch("http://localhost:8080/cust1", {
  method: "POST",
  body: JSON.stringify(_data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
document.getElementById("Div2").innerHTML = "Account created";
}

}

function alreadyexists( username)
{
 let un = username;
fetch('http://localhost:8080/cust3').then((response) => response.json())
.then( (data) => {

data.forEach( (obs) => {
            uns=obs.usern;console.log(uns);
                //pass=x.passw;console.log(pass);
               // member=x.idunpas;console.log(member);
                console.log(un);//console.log(ps);
             //   Object.keys(x).forEach( (p) => {
               //     results += "<li>" + (p + ": " + x[p]) + "</li>";
              //  });
           if (un===uns)
           {
          // member2=member;
               mesag='Username Taken  Try Another';
               intable='true';
               //localStorage.setItem('membergood',member2);

              //  const hellodiv1 = document.getElementById('hellodiv1');
                //  hellodiv1.style.visibility = 'visible';
                  document.getElementById('Div2').innerHTML = mesag;
           }
           intable='false';
      //  });
        console.log('-------------------');
        })
            })
            .catch ((error) => console.log("Error Occured"));

    return intable;

}