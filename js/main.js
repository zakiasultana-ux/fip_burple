console.log("welcone to the world of burple");

// varibles

let link = document.querySelector(".link");
let color = document.querySelector(".color");
let count = 0;

const fruitcon = document.querySelector("#fruit-con");
const productcon = document.querySelector("#product-con");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

const fruits = [
    { name: "Blue Raspberry", image: "images/Blue_raspberry.svg" },
    { name: "Lemon Lime", image: "images/Lemon-Lime.svg" },
    { name: "Orange", image: "images/Orange.svg" },
    { name: "Strawberry", image: "images/strawberry.svg" },
  { name : "Grape", image: "images/Grape.svg" },
  { name : "Cherry", image: "images/Cherry.svg" }
];
const products = [
    { name: "Blue Raspberry", image: "images/blue-respberry.png", description: "A refreshing blue raspberry flavor that will tantalize your taste buds." },
    { name: "Lemon Lime", image: "images/lemon.png", description: "A zesty lemon-lime flavor that is both tangy and sweet." },
    { name: "Orange", image: "images/orange.png", description: "A classic orange flavor that is bursting with citrus goodness." },
    { name: "Strawberry", image: "images/strawberry.png", description: "A delightful strawberry flavor that is perfect for any occasion." },
    { name: "Grape", image: "images/grape.png", description: "A rich grape flavor that is sure to please fruit lovers." },
    { name: "Cherry", image: "images/cherry.png", description: "A sweet cherry flavor that is both juicy and delicious." }
];

// functions

function muosehoverover() {
    link.classList.add("is-active");
}

function mousehoverreverse() {
    link.classList.remove("is-active");
}

function displayFruits() {
    fruitcon.innerHTML = "";

    const fruitdiv = document.createElement("div");
    fruitdiv.classList.add("col-span-full");
    fruitcon.appendChild(fruitdiv);

    const fruitimage = document.createElement("img");
    fruitimage.src = fruits[count].image;
    fruitimage.alt = fruits[count].name;
    fruitimage.classList.add( "mx-auto", "h-64");
    fruitdiv.appendChild(fruitimage);

    const fruitname = document.createElement("h3");
    fruitname.textContent = fruits[count].name;
    fruitname.classList.add("text-2xl", "font-bold", "text-center", "mt-10");
    fruitdiv.appendChild(fruitname);

}

function displayProducts() {
    productcon.innerHTML = "";

    const productdiv = document.createElement("div");
    productdiv.classList.add("col-span-full");
    productcon.appendChild(productdiv);

    const productname = document.createElement("h3");
    productname.textContent = products[count].name;
    productname.classList.add("text-2xl", "font-bold", "text-center", "mb-4");
    productdiv.appendChild(productname);

    const productimage = document.createElement("img");
    productimage.src = products[count].image;
    productimage.alt = products[count].name;
    productimage.classList.add("w-40", "h-64", "mx-auto");
    productdiv.appendChild(productimage);

    const productparagraph = document.createElement("p");
    productparagraph.textContent = products[count].description;
    productparagraph.classList.add("text-center", "text-gray-700", "mt-2");
    productdiv.appendChild(productparagraph);
  
}

function nextproduct() {
    count++;
    if (count >= products.length) {
        count = 0;
    }
    displayProducts();
    displayFruits();
}

function previousproduct() {
    count--;
    if (count < 0) {
        count = products.length - 1;
    }
    displayProducts();
    displayFruits();
}

displayFruits(); 
displayProducts();

// events

link.addEventListener("mouseenter", muosehoverover);
link.addEventListener("mouseleave", mousehoverreverse);
next.addEventListener("click", nextproduct);
previous.addEventListener("click", previousproduct);