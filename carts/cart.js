function incrementValue()
{
    var value=parseInt(document.getElementById('number').value, 10);
    value=isNaN(value)? 0: value;
    if(value<10){
        value++;
        document.getElementById('number').value=value;
    }
}
function decrementValue()
{
    var value=parseInt(document.getElementById('number').value, 10);
    value=isNaN(value)? 0: value;
    if(value>1){
        value--;
        document.getElementById('number').value=value;
    }
}
let testData = [
    {
        image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111458056_RLLZ_1_large.jpg?v=1651865209",
        title: "DR. BRANDT",
       
        price: "8.99 ",
        color: "blue"
    },

    {
        image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111809028_RLLZ_2_large.jpg?v=1651865207",
        title: "SHISEIDO",
        
        price: "18.99 ",
        color: "blue"
    },

    {
        image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/92069216_large.jpg?v=1649458425",
        title: "SALVATORE FERRAGAMO",
       
        price: "83.00 ",
        color: "blue"
    },

    {
        image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/92071080_large.jpg?v=1650269361",
        title: "DOLCE & GABBANA",
       
        price: "75.00 ",
        color: "blue"
    },
    
    ];
    // let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cart = testData;
    function showCart() {
      let cartBlock = document.querySelector("#cartBlock");
      let priceTotal = 0;
      cartBlock.innerHTML = null;
      cart.map(({ img, title, color, price }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "cartCard");
        let Img = document.createElement("img");
        Img.setAttribute("src", img);
        let cartDel = document.createElement("div");
        cartDel.setAttribute("class", "cartDel");
        let h2 = document.createElement("h2");
        h2.innerHTML = title;
        h2.setAttribute("class", "cartT");
        let cartColor = document.createElement("p");
        cartColor.setAttribute("class", "cartColor");
        cartColor.innerHTML = color;
        let priceCart = document.createElement("p");
        priceCart.setAttribute("class", "priceCart");
        priceCart.innerHTML = "$" + price;
        priceTotal += price;
        cartDel.append(h2, cartColor, priceCart);
        div.append(Img, cartDel);
        cartBlock.append(div);
      });
      document.querySelector("#TotalCart").innerHTML = "$" + priceTotal;
    }
    showCart();