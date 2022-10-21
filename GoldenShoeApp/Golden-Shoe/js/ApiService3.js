
function signingood1()
{
signingood('http://localhost:8080/cust3', getData);
}



function signingood(url, callback)
{
         var obj;
         fetch(url)
           .then(res => res.json())
           .then(data => obj = data)
           .then(() => callback(obj))


  }





 function getData(arrOfObjs){
 let un =document.getElementById('uname').value;
 let ps =document.getElementById('pasword').value;
let mesag='Wrong un or password';
let sucsignin='false';
let member='';
let uns='';
let pass='';
let member2='';
   var results = "";
   arrOfObjs.forEach( (x) => {
    // results += "<p> Id: " + x.idunpas + "<ul>"
     uns=x.usern;console.log(uns);
     pass=x.passw;console.log(pass);
     member=x.firstname;console.log(member);
     console.log(un);console.log(ps);
  //   Object.keys(x).forEach( (p) => {
    //     results += "<li>" + (p + ": " + x[p]) + "</li>";
   //  });
if (un===uns&&ps===pass)
{
member2=member;
    mesag='Sign in Successful';
    sucsignin='true';
    localStorage.setItem('membergood',member2);
divfunc();
    // const hellodiv1 = document.getElementById('hellodiv1');
    //   hellodiv1.style.visibility = 'visible';
      // document.getElementById('Div1').innerHTML = mesag;
}


     results += "</ul> </p> <hr>"
   })
   results += "";
  // console.log({ results })

   document.getElementById('Div1').innerHTML = mesag;//results; 'hello345', 'cust234'

console.log("CustName ",member2, 'member  ', localStorage.getItem('membergood'));


 }
