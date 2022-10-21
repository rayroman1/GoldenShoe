
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get("product");
const color = urlParams.get("color");
const size = urlParams.get("size");
//const tourl= "${product}?color=${color}${size?`&size=${size}`:''}";
let shoe = []; let shoe1=[];  let y=0; let se=[]; let u='';
let tourl = `${ENDPOINT}/shoes1/`;
let url = `${ENDPOINT}/product/${product}?color=${color}${size?`&size=${size}`:''}`;let url1 = `${ENDPOINT}/products3/${product}`;
//endpoint
//let url='http://localhost:63342/Golden-Shoe/Golden-Shoe/resources/shoes.json';

 fetch(url1)

        .then(response => {
            return response.json();
        })
       .then( (text) => { text.forEach( (x) =>{ se.push(x);console.log(x);})  });


fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => { shoe = data; init(); });
function init() {
    console.log(shoe);

    let root = document.getElementById("container");

    let column = document.createElement("div");
    column.classList.add("col-md-8");

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("shoes-img3.png");
    column.appendChild(imgWrapper);

    let img = document.createElement("img");

    img.src = shoe[0].img_url;//colors[0].url;//img_url;
    console.log('Image 1',img.src);
    img.style.width = "50%";
    imgWrapper.appendChild(img);

   /*  let cart = [];
cart.push("<h1>John<h1>");
    cart.push("<h2>David<h2>");
    localStorage.setItem("cart", JSON.stringify(cart));*/



       //var b=s.Data;



       //let ss = await response.text();


        console.log('S '+ se);
    let colorBtnWrapper = document.createElement("div");
    colorBtnWrapper.classList.add("btn-wrapper");
    let colorSelct = document.createElement("div");
    colorSelct.classList.add("consectetur_text");
    colorSelct.textContent = "Select Color";
    imgWrapper.appendChild(colorSelct);
     se.forEach(item => { //
        let colorBtn = document.createElement("button");
       //  console.log('Color ',item.color);
        colorBtn.style.backgroundColor = item;//.color;
        colorBtn.style.color = item;//.color;
        colorBtn.textContent = item;//.color;
        colorBtn.onclick = ()=>{
            window.location = `product.html?product=${product}&color=${item}`;

        }
        colorBtnWrapper.appendChild(colorBtn);
    });


    imgWrapper.appendChild(colorBtnWrapper);

    let contentWrapper = document.createElement("div");
    contentWrapper.classList.add("col-md-4");

    let productName = document.createElement("div");
    productName.classList.add("consectetur_text");
    productName.textContent = shoe[0].product;//se
    contentWrapper.appendChild(productName);

    let productPrice = document.createElement("div")
    productPrice.classList.add("consectetur_text");
    productPrice.textContent = "$"+shoe[0].price;
    contentWrapper.appendChild(productPrice);

    let productSizeLabel = document.createElement("div");
    productSizeLabel.textContent = "Size";
    productSizeLabel.classList.add("consectetur_text");
    contentWrapper.appendChild(productSizeLabel);

    let productSize = document.createElement("select");
    productSize.classList.add("nice-select");
    productSize.textContent = "Select Size";

    let stock = document.createElement("div")
    stock.classList.add("consectetur_text");

    shoe.forEach(item => {//sizes

     //   console.log("SIze "," ",item.size);

let option = document.createElement("option");
        option.text = item.size;
      //  console.log(item.stocks);//.size);

        if(item.size===parseInt(size)){
            option.selected = "selected";


        }
        productSize.appendChild(option);


       
    });
    let buyBtn = document.createElement("button");
    buyBtn.classList.add("seemore");
    buyBtn.textContent = "Add to cart";

    productSize.onchange = ()=>{
   //  e = document.querySelector("selectedSize");

    // remove the list item
  //  e.parentElement.removeChild(selectedSize);
        const selectedSize = parseInt(productSize.options[productSize.selectedIndex].text);
        let itemSize = shoe.find(item => item.size===selectedSize);
       // console.log('item.stocks.size ',itemSize);
        window.location = `product.html?product=${product}&color=${color}&size=${selectedSize}`
    }
    let selectWrapper = document.createElement("div");
    selectWrapper.classList.add("select-wrapper");
    selectWrapper.appendChild(productSize);
    contentWrapper.appendChild(selectWrapper);

    if(shoe[productSize.selectedIndex].quantity>0){
        stock.textContent = "In Stock";
        buyBtn.disabled = false;
    }
    else{
        stock.textContent = "Out of Stock";
        buyBtn.disabled = true;
    }
    let cartAlert = document.createElement("div");
    cartAlert.textContent = "Item added to cart!";

    buyBtn.onclick = ()=>{
        shoe.totalPrice = shoe[productSize.selectedIndex].price;
        shoe[productSize.selectedIndex].count = 1;
        if(window.localStorage.getItem("cart")){
            let cart = JSON.parse(window.localStorage.getItem("cart"));
            let tempShoe = cart.find(item => item.id === shoe[productSize.selectedIndex].id);
            if(tempShoe){
                tempShoe.count+=1;
            }
            else{
                tempShoe = shoe[productSize.selectedIndex];
                cart.push(tempShoe);
            }
            window.localStorage.setItem("cart",JSON.stringify(cart));
        }
        else{
            window.localStorage.setItem("cart",JSON.stringify([shoe[productSize.selectedIndex]]));
        }
        cartAlert.classList.remove("hide");
        cartAlert.classList.add("show-ribbon");
        setTimeout(function() {
            cartAlert.classList.add("hide");
         }, 2000);
        contentWrapper.appendChild(cartAlert);

    };
    contentWrapper.appendChild(buyBtn);
    contentWrapper.appendChild(stock);

    let productDescriptionLabel = document.createElement("div")
    productDescriptionLabel.classList.add("consectetur_text");
    productDescriptionLabel.textContent = "Product Description";
    contentWrapper.appendChild(productDescriptionLabel);

    let productDescriptionDetail = document.createElement("div")
    productDescriptionDetail.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore";
    contentWrapper.appendChild(productDescriptionDetail);


    root.appendChild(column);
    root.appendChild(contentWrapper);
}
/*
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => { shoe = data; init(); });
function init() {
    console.log(shoe);

    let root = document.getElementById("container");

    let column = document.createElement("div");
    column.classList.add("col-md-8");

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("shoes-img3.png");
    column.appendChild(imgWrapper);

    let img = document.createElement("img");

    img.src = shoe.img_url;//colors[0].url;//img_url;
    console.log('Image 1',img.src);
    img.style.width = "50%";
    imgWrapper.appendChild(img);

   /*  let cart = [];
cart.push("<h1>John<h1>");
    cart.push("<h2>David<h2>");
    localStorage.setItem("cart", JSON.stringify(cart));*/

  /*  let colorBtnWrapper = document.createElement("div");
    colorBtnWrapper.classList.add("btn-wrapper");
    let colorSelct = document.createElement("div");
    colorSelct.classList.add("consectetur_text");
    colorSelct.textContent = "Select Color";
    imgWrapper.appendChild(colorSelct);
     shoe.colors.forEach(color => { //
        let colorBtn = document.createElement("button");
         console.log('Color ',color.color);
        colorBtn.style.backgroundColor = color.color;
        colorBtn.style.color = color.color;
        colorBtn.textContent = color.color;
        colorBtn.onclick = ()=>{
            window.location = `product.html?product=${product}&color=${color.color}`
        }
        colorBtnWrapper.appendChild(colorBtn);
    });
    imgWrapper.appendChild(colorBtnWrapper);

    let contentWrapper = document.createElement("div");
    contentWrapper.classList.add("col-md-4");

    let productName = document.createElement("div");
    productName.classList.add("consectetur_text");
    productName.textContent = shoe.name;
    contentWrapper.appendChild(productName);

    let productPrice = document.createElement("div")
    productPrice.classList.add("consectetur_text");
    productPrice.textContent = "£"+shoe.price;
    contentWrapper.appendChild(productPrice);

    let productSizeLabel = document.createElement("div");
    productSizeLabel.textContent = "Size";
    productSizeLabel.classList.add("consectetur_text");
    contentWrapper.appendChild(productSizeLabel);

    let productSize = document.createElement("select");
    productSize.classList.add("nice-select");
    productSize.textContent = "Select Size";

    let stock = document.createElement("div")
    stock.classList.add("consectetur_text");

    shoe.colors.forEach(item => {//sizes

        item.stocks.forEach(item1=>{

        console.log("SIze "," ",item1.size);

let option = document.createElement("option");
        option.text = item1.size;
      //  console.log(item.stocks);//.size);

        if(item1.size===parseInt(size)){
            option.selected = "selected";
        }
        productSize.appendChild(option);
        });


    });
    let buyBtn = document.createElement("button");
    buyBtn.classList.add("seemore");
    buyBtn.textContent = "Add to cart";

    productSize.onchange = ()=>{
        const selectedSize = parseInt(productSize.options[productSize.selectedIndex].text);
        let itemSize = shoe.colors.find(item => item.stocks[0].size===selectedSize);
        console.log('item.stocks.size ',itemSize);
        window.location = `product.html?product=${product}&color=${color}&size=${selectedSize}`
    }
    let selectWrapper = document.createElement("div");
    selectWrapper.classList.add("select-wrapper");
    selectWrapper.appendChild(productSize);
    contentWrapper.appendChild(selectWrapper);

    if(shoe.colors[0].stocks[0].stock>0){
        stock.textContent = "In Stock";
        buyBtn.disabled = false;
    }
    else{
        stock.textContent = "Out of Stock";
        buyBtn.disabled = true;
    }
    let cartAlert = document.createElement("div");
    cartAlert.textContent = "Item added to cart!";

    buyBtn.onclick = ()=>{
        shoe.totalPrice = shoe.price;
        shoe.count = 1;
        if(window.localStorage.getItem("cart")){
            let cart = JSON.parse(window.localStorage.getItem("cart"));
            let tempShoe = cart.find(item => item.id === shoe.id);
            if(tempShoe){
                tempShoe.count+=1;
            }
            else{
                tempShoe = shoe;
                cart.push(tempShoe);
            }
            window.localStorage.setItem("cart",JSON.stringify(cart));
        }
        else{
            window.localStorage.setItem("cart",JSON.stringify([shoe]));
        }
        cartAlert.classList.remove("hide");
        cartAlert.classList.add("show-ribbon");
        setTimeout(function() {
            cartAlert.classList.add("hide");
         }, 2000);
        contentWrapper.appendChild(cartAlert);

    };
    contentWrapper.appendChild(buyBtn);
    contentWrapper.appendChild(stock);

    let productDescriptionLabel = document.createElement("div")
    productDescriptionLabel.classList.add("consectetur_text");
    productDescriptionLabel.textContent = "Product Description";
    contentWrapper.appendChild(productDescriptionLabel);

    let productDescriptionDetail = document.createElement("div")
    productDescriptionDetail.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore";
    contentWrapper.appendChild(productDescriptionDetail);


    root.appendChild(column);
    root.appendChild(contentWrapper);

*/