console.log("JavaScript loaded!");

let total = 0;

function addToCart(product, price) {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    const li = document.createElement("li");
    li.textContent = `${product} - ₱${price}`;

cartItems.appendChild(li);

cart.push({ product, price });

total += price;
totalElement.textContent = total.toFixed(2);

}

function buyNow(product, price) {
    alert(`You selected ${product}\nPrice: ₱${price}`);
}

function checkout() {
    const paymentMethod = document.getElementById("payment").value;
    alert(`Checkout initiated with ${paymentMethod}`);
}
console.log("JavaScript loaded!");

let total = 0;
let cart = [];

function addToCart(product, price) {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    const li = document.createElement("li");
    li.textContent = `${product} - ₱${price}`;

    cartItems.appendChild(li);

    cart.push({ product, price });

    total += price;
    totalElement.textContent = total.toFixed(2);
}

function buyNow(product, price) {
    alert(`You selected ${product}\nPrice: ₱${price}`);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let payment = document.getElementById("payment").value;

    alert("Checkout Successful!\nPayment Method: " + payment);

    cart = [];
    total = 0;

    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total").textContent = "0";
}

function buyNow(product, price) {
    alert(`You selected ${product}\nPrice: ₱${price}`);
}

function saveProfile() {
    let name = document.getElementById("username").value;

    localStorage.setItem("speakerhubUser", name);

    alert("Profile Saved!");
}

window.onload = function() {
    let savedUser = localStorage.getItem("speakerhubUser");

    if (savedUser) {
        document.getElementById("username").value = savedUser;
    }
};

function searchProduct() {
    let search = document.getElementById("searchInput").value;

    if (search === "") {
        alert("Please enter a product name.");
    } else {
        alert("Searching for: " + search);
    }
}

function subscribe() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for subscribing to SpeakerHub!");
    }
}

window.onload = function() {

    const canvas = document.getElementById("matrix");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
    const chars = letters.split("");

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];

    for(let i = 0; i < columns; i++){
        drops[i] = 1;
    }

    function draw(){

        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";

        for(let i = 0; i < drops.length; i++){

            const text =
            chars[Math.floor(Math.random() * chars.length)];

            ctx.fillText(
                text,
                i * fontSize,
                drops[i] * fontSize
            );

            if(
                drops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ){
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 35);
};