const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 50, category: "Electronics" },
    { name: "Product 3", price: 10, category: "Clothing" },
    { name: "Product 4", price: 30, category: "Electronics" },
    { name: "Product 5", price: 20, category: "Clothing" },
    { name: "Product 6", price: 40, category: "Electronics" },
    { name: "Product 7", price: 50, category: "Clothing" },
    { name: "Product 8", price: 10, category: "Electronics" },
];
const productList = document.querySelector(".products");
const filters = document.querySelectorAll(".filters button");
let selectedProducts = []

products.map((e) => {
    productList.innerHTML += `
    <div class="product">
                <div class="img">
                    <img src="./img/mainImg.jpg" alt="">
                </div>
                <div class="body">
                    <div class="head">
                        <h3>${e.name}</h3>
                        <h4>${e.price}</h4>
                        <h4>${e.category}</h4>
                    </div>
                    <div class="text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis deleniti minus, sapiente voluptates voluptas!</p>
                    </div>
                </div>
            </div>
`;
});


filters.forEach((e) => {
    e.addEventListener("click", () => {

        // Change Active Item
        filters.forEach((e) => e.classList.remove("active"));
        e.classList.add("active");

        // Filtering Data
        if (e.textContent == "All") selectedProducts = products;
        else
            selectedProducts = products.filter((item) => {
                return item.category == e.textContent;
            });
        productList.innerHTML = "";
        selectedProducts.length > 0 ?
            selectedProducts.forEach((e) => {
                productList.innerHTML += `
            <div class="product">
                <div class="img">
                    <img src="./img/mainImg.jpg" alt="">
                </div>
                <div class="body">
                    <div class="head">
                        <h3>${e.name}</h3>
                        <h4>${e.price}</h4>
                        <h4>${e.category}</h4>
                    </div>
                    <div class="text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis deleniti minus, sapiente voluptates voluptas!</p>
                    </div>
                </div>
            </div>
`;
            }) :
            productList.innerHTML = `<h1>There Is No Products Under This Category!</h1>`;
    });
});
