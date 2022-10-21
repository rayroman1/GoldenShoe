function button1()
{




let f= document.getElementById('fname3').value;
let l=document.getElementById('lname3').value;
let c=document.getElementById('address3').value;
let ce=document.getElementById('email3').value;
let fromname;
let useremail;
//alert(ce);
let userMessage;

if (f==''||l==''||c==''||ce=='')
{

document.getElementById('Div3').innerHTML = "All must be entered";
}

else if(document.getElementById('cc1').checked==false&&document.getElementById('pp1').checked==false)
{
document.getElementById('Div3').innerHTML = "Enter Payment Type";

}
else if(document.getElementById('cc1').checked==true&&document.getElementById('pp1').checked==true)
{
document.getElementById('Div3').innerHTML = "Enter one payment type";

}
else
{
//let em=document.getElementById('email3').value;
console.log('Sending zczc');//document.location.href = "mailto:romn4756@yahoo.com?subject="+"This is the email subject"+"&body="+"This is the email body";
//send email
alert(ce);

//function sendEmail() {
/*
Email.send({
    Host : "smtp.gmail.com",
    Username : "dtim06004@gmail.com",
    Password : "xtvpymxfggnwgxjh",
    To : ce,
    From : "dtim06004@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
*/
//}


//////////////////////////////////////////&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var data = {
    service_id: 'service_cduqo9q',
    template_id: 'template_tcgz5zl',
    user_id: 'f0bdd6zPOPeEJuSMD',
    template_params: {
        'email_to':ce,
        'message': f+l+'Items '+localStorage.getItem("cart")+ ' '+ localStorage.getItem("alltotal"),
        'fromname': 'Golden Shoe',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});

//////////////////////////////////////////////&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//const nodemailer = require('nodemailer');

//import nodemailer from 'nodemailer';
/*Email.send({
    Host : "smtp.mailtrap.io",
    Username : "346ca75129f76d",
    Password : "08e828c5310b5a",
    To : ce,
    From : "dtim06004@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);*/

//emailjs.init("beagalateuhjerfp");
//sendmail();
localStorage.removeItem("cart");

window.location = 'thankyou.html';
//window.open('Golden-Shoe/track.html');



}


}

function gotoindex()
{
window.location = 'index.html';
}