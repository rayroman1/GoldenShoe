
function divfunc()
{
if (localStorage.getItem('membergood') !== null) {
   let l=localStorage.getItem('membergood');
   const hellodiv = document.getElementById('hellodiv');
   hellodiv.style.visibility = 'visible';
   let v=document.createElement('a');
   v.innerHTML="Sign out"
   //v.href="signout()";
   v.setAttribute('onclick','signout()');
   hellodiv.appendChild(v);
     document.getElementById('hellotext').innerHTML = 'Hello '+l;
    /* const lgndiv = document.getElementById('lgndiv');
     const lgndiv2 = document.getElementById('lgndiv2');
     document.getElementById('lgndiv').innerHTML = "Log out";
     document.getElementById('lgndiv2').innerHTML = "Log out";*/
} else {

      const hellodiv = document.getElementById('hellodiv');
      hellodiv.style.visibility = 'hidden';

}



}