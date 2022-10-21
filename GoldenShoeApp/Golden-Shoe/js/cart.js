let cart = JSON.parse(window.localStorage.getItem("cart"));
if (!cart) {
    cart = [];
}
let root = document.getElementById("product-list");
let info = document.getElementById("checkout-info");

let cartEmpty = document.createElement("div");
cartEmpty.textContent = "There is nothing in your bag. Let's add some items!";


cart.forEach((shoe, index) => {
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("tile");

    let column = document.createElement("div");
    column.classList.add("col-md-8");

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("shoes-img3");
    column.appendChild(imgWrapper);

    let img = document.createElement("img");
    img.src = shoe.img_url;
    img.style.width = "30%";
    imgWrapper.appendChild(img);

    let contentWrapper = document.createElement("div");
    contentWrapper.classList.add("col-md-4");

    let productName = document.createElement("div")
    productName.classList.add("consectetur_text");
    productName.textContent = shoe.name;
    contentWrapper.appendChild(productName);

    let productPrice = document.createElement("div")
    productPrice.classList.add("consectetur_text");
    productPrice.textContent = "$" + shoe.price;
    contentWrapper.appendChild(productPrice);

    let productSizeLabel = document.createElement("div");
    productSizeLabel.textContent = "Size: " + shoe.size;
    productSizeLabel.classList.add("consectetur_text");
    contentWrapper.appendChild(productSizeLabel);



    let productCountLabel = document.createElement("div");
    productCountLabel.textContent = "Quantity";
    productCountLabel.classList.add("consectetur_text");
    contentWrapper.appendChild(productCountLabel);

    let productCount = document.createElement("input");
    productCount.id = "product-counter";
    productCount.type = "number";
    productCount.value = shoe.count;
    productCount.min = "1";
    productCount.max = shoe.stock;
    productCount.classList.add("product-counter");
    shoe.totalPrice = productCount.value*shoe.price;
    productCount.onchange = () => {
        shoe.totalPrice = productCount.value*shoe.price;
        shoe.count = productCount.value;
        let text = document.getElementById("cart-total");
        text.textContent = "Total Amount: " + "$" + calculateTotal(cart);
        window.localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
    }
    contentWrapper.appendChild(productCount);


    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = () => {
        cart.splice(index, 1);
        window.localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
    };

    contentWrapper.appendChild(removeBtn);
    row.appendChild(column);
    row.appendChild(contentWrapper);
    root.appendChild(row);


});

let checkoutWrapper = document.createElement("div");
checkoutWrapper.classList.add("checkout-wrapper");

let cartTotalLabel = document.createElement("div");
cartTotalLabel.id = "cart-total";

cartTotalLabel.textContent = "Total Amount: " + "$" + calculateTotal(cart);
//remove
//localStorage.setItem('globtot',cartTotalLabel.textContent.value);

checkoutWrapper.appendChild(cartTotalLabel);

let checkoutBtn = document.createElement("button");
checkoutBtn.textContent = "Checkout";
checkoutBtn.classList.add("remove-btn");

checkoutBtn.onclick = () => {
    window.location = `track.html`
};
checkoutWrapper.appendChild(checkoutBtn);

if (cart.length) {
    cartEmpty.classList.remove("empty-cart");
    cartEmpty.classList.add("hide");
    checkoutWrapper.classList.remove("hide");
}
else {
    cartEmpty.classList.remove("hide");
    cartEmpty.classList.add("empty-cart");
    checkoutWrapper.classList.add("hide");
}

root.appendChild(cartEmpty);

info.appendChild(checkoutWrapper);

function calculateTotal(cart) {
    let cartTotal = 0;
    cart.forEach((shoe) => {
        cartTotal += shoe.totalPrice;
    });
    return cartTotal;
}