function button1()
{




let f= document.getElementById('fname3').value;
let l=document.getElementById('lname3').value;
let c=document.getElementById('address3').value;
let ce=document.getElementById('email3').value;
}

if (f==''||l==''||c==''||ce=='')
{

document.getElementById("Div3").innerHTML = "All must be entered";
}
}
else if(!cc1.checked&&!pp1.checked)
{
document.getElementById("Div3").innerHTML = "Enter Payment Type;

}
else if(cc1.checked&&pp1.checked)
{
document.getElementById("Div3").innerHTML = "Enter one payment type;

}
else
{
//send email


//window.location.href = thankyou.html;

}


}