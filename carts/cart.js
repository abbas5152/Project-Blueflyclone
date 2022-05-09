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
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9301c991-9112-4446-91c1-8b9146a43b81_180x.jpg?v=1620800351",
        title:
          "Christian Dior Women's DIOREVOLS-02M2-2K Diorev 58mm Gold and Black Sunglasses",
        price: 110,
        color: "Grey",
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9301c991-9112-4446-91c1-8b9146a43b81_180x.jpg?v=1620800351",
        title:
          "Christian Dior Women's DIOREVOLS-02M2-2K Diorev 58mm Gold and Black Sunglasses",
        price: 110,
        color: "Grey",
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9301c991-9112-4446-91c1-8b9146a43b81_180x.jpg?v=1620800351",
        title:
          "Christian Dior Women's DIOREVOLS-02M2-2K Diorev 58mm Gold and Black Sunglasses",
        price: 110,
        color: "Grey",
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9301c991-9112-4446-91c1-8b9146a43b81_180x.jpg?v=1620800351",
        title:
          "Christian Dior Women's DIOREVOLS-02M2-2K Diorev 58mm Gold and Black Sunglasses",
        price: 110,
        color: "Grey",
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