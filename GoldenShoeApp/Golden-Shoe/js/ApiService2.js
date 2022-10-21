


function doget()
{
fetch('http://localhost:8080/' )           //api for the get request

.then(response => response.text())
    .then(text => console.log(text))

}

