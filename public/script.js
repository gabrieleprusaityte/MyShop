"use strict";
const products = document.querySelector(".products");
const categoryFood = document.querySelector(".categoryFood");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const mainBox = document.querySelector(".mainBox");
const boxMoney = document.querySelector(".boxMoney");
const boxLimit = document.querySelector(".boxLimit");
const newProduct = document.querySelector(".newProduct");
const containerNewProduct = document.querySelector(".containerNewProduct");
const input = document.querySelectorAll("input");
const items = [
    {
        name: "Milk",
        photo: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872",
        weight: 0.7,
        price: 2,
        category: "food"
    },
    {
        name: "Bread",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        weight: 0.5,
        price: 3,
        category: "food"
    },
    {
        name: "Meat",
        photo: "https://media.wired.com/photos/5b493b6b0ea5ef37fa24f6f6/125:94/w_2393,h_1800,c_limit/meat-80049790.jpg",
        weight: 2.5,
        price: 4.50,
        category: "food"
    },
    {
        name: "Camera",
        photo: "http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c",
        weight: 5,
        price: 200,
        category: "electronics"
    },
    {
        name: "Screen",
        photo: "https://lh3.googleusercontent.com/proxy/wl4THlWX1WeI7MVeP2X0DKLUE7NZr6fdm4WQ32TDzYefkQ67htVue1e-F_RKzSA8oTLNNfsBqGnUSbfeBip4F09i-PnAIyxMCd-l-zgh9ZNxSqcF20aBf_0BbdQ",
        weight: 8,
        price: 150,
        category: "electronics"
    },
    {
        name: "Phone",
        photo: "https://i5.walmartimages.com/asr/10accd37-b241-4d55-b39d-2417f2f80f74.dd8421d47ac8c8517d0b81fe716760b2.jpeg",
        weight: 0.5,
        price: 400,
        category: "electronics"
    },
    {
        name: "Chair",
        photo: "https://www.ikea.com/kr/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s",
        weight: 4,
        price: 20,
        category: "furniture"
    },
    {
        name: "Sofa",
        photo: "https://cdn.shopify.com/s/files/1/0056/0912/8000/products/Sofa_lova_Svan_1800x1800.jpg?v=1583269013",
        weight: 60,
        price: 200,
        category: "furniture"
    },
    {
        name: "Lamp",
        photo: "https://greenice.com/57848/a.jpg",
        weight: 4,
        price: 80,
        category: "furniture"
    },
];
for (const item of items) {
    products.innerHTML += `<div class="card">
                    <div>${item.name}</div>
                    <img src="${item.photo}">
                    <div>${item.weight}</div>
                    <div>${item.price}</div>
                    <div>${item.category}</div>
                    </div>`;
}
//@ts-ignore
const card = document.querySelectorAll(".card");
let moneyCounter = 200;
let weightCounter = 30;
for (const item of card) {
    item.onclick = () => {
        const cln = item.cloneNode(true);
        mainBox.appendChild(cln);
        if (moneyCounter >= item.price && weightCounter >= item.weight) {
            moneyCounter -= item.price;
            weightCounter -= item.weight;
            boxMoney.innerHTML = `Money: ${moneyCounter}`;
            boxLimit.innerHTML = `Weight Limit: ${weightCounter}`;
        }
    };
    console.log(item.price);
}
button1.onclick = () => {
    return newProduct.style.display = "flex";
};
button2.onclick = () => {
    const generatedCard = document.createElement("div");
    generatedCard.classList.add("generatedCard");
    products.appendChild(generatedCard);
    const itemName = document.createElement("div");
    itemName.classList.add("itemName");
    //@ts-ignore
    itemName.innerText = String(input[0].value);
    generatedCard.appendChild(itemName);
    const image = document.createElement("img");
    //@ts-ignore
    image.src = String(input[1].value);
    generatedCard.appendChild(image);
    const itemWeight = document.createElement("div");
    //@ts-ignore
    itemWeight.innerText = String(input[2].value);
    generatedCard.appendChild(itemWeight);
    const itemPrice = document.createElement("div");
    //@ts-ignore
    itemPrice.innerText = String(input[3].value);
    generatedCard.appendChild(itemPrice);
    const itemCategory = document.createElement("div");
    //@ts-ignore
    itemCategory.innerText = String(input[4].value);
    generatedCard.appendChild(itemCategory);
    generatedCard.onclick = () => {
        const clnGenerated = generatedCard.cloneNode(true);
        mainBox.appendChild(clnGenerated);
    };
};
if (input[0].value === "" || input[1].value === "" || input[2].value === "" || input[3].value === "" || input[4].value === "") {
    const text = document.createElement("div");
    generatedCard.style.display = "none";
    text.style.color = "red";
    text.innerHTML = "Please fill in all inputs";
    containerNewProduct.appendChild(text);
}
