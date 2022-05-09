





 
 var arr = [{ avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312172240_RLLZ_2_large.jpg?v=1649824433",
 heading_4: "VALENTINO ROCKSTUD CAGED",
 para_1: "LEATHER PUMP",
 para_2: "$550.99 Save 10%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312295145_RLLZ_2_large.jpg?v=1650956885",
 heading_4: "VALENTINO ROMAN STUD",
 para_1: "LEATHER SANDALS",
 para_2: "$520.99 Save 7%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2254954_large.jpg?v=1651781726",
 heading_4: "SAINT LAURENT VIVI",
 para_1: "LEATHER PUMP",
 para_2: "$400.99 Save 13%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1912242_large.jpg?v=1644447053",
 heading_4: "BALENCIAGA TRACK SNEAKER",
 para_1: "SNEAKERS",
 para_2: "$800.99 Save 15%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/product-61ba143c3437c_19f86c24-74db-4d94-ad11-53dc758dff46_large.jpg?v=1650651031",
 heading_4: "JIMMY CHOO ANISE",
 para_1: "SANDAL",
 para_2: "$800.99 Save 11%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/368494-9068-10g__2_large.jpg?v=1652053814",
 heading_4: "GUCCI BASKET LEATHER HIGH",
 para_1: "SNEAKER",
 para_2: "$700.99 Save 11%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312295145_RLLZ_2_large.jpg?v=1650956885",
 heading_4: "VALENTINO ROMAN STUD",
 para_1: "LEATHER SANDALS",
 para_2: "$520.99 Save 7%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2254954_large.jpg?v=1651781726",
 heading_4: "SAINT LAURENT VIVI",
 para_1: "LEATHER PUMP",
 para_2: "$400.99 Save 13%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1912242_large.jpg?v=1644447053",
 heading_4: "BALENCIAGA TRACK SNEAKER",
 para_1: "SNEAKERS",
 para_2: "$800.99 Save 15%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/product-61ba143c3437c_19f86c24-74db-4d94-ad11-53dc758dff46_large.jpg?v=1650651031",
 heading_4: "JIMMY CHOO ANISE",
 para_1: "SANDAL",
 para_2: "$800.99 Save 11%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/368494-9068-10g__2_large.jpg?v=1652053814",
 heading_4: "GUCCI BASKET LEATHER HIGH",
 para_1: "SNEAKER",
 para_2: "$700.99 Save 11%"},
 

 

      ];

      var gridView = localStorage.setItem("grid",JSON.stringify(arr))
      var count = JSON.parse(localStorage.getItem("grid").length) || 0
      localStorage.setItem("counter",JSON.stringify(count))
      
     var bestB = document.querySelector("#bestSellingDiv>p>b")
     bestB.innerText = count

   
   

 
 arr.forEach(function(el){
 
    var ndiv = document.createElement("div")
    ndiv.style.textAlign="center"

    var imga = document.createElement("img")
    imga.setAttribute("src",el.avatar)
    var h4 = document.createElement("h4")
    h4.innerText = el.heading_4
    var p1 = document.createElement("p")
    p1.innerText = el.para_1
    var p2 = document.createElement("p")
    p2.innerText=el.para_2

    var button = document.createElement("button")
    button.setAttribute("id","btn_1")
    button.innerText = "Add To Cart"
    button.addEventListener("click",cart)
   
    
    
    ndiv.append(imga,h4,p1,p2,button)
    
     var x = document.querySelector("#container")
     x.append(ndiv)
 
 
 }) ;

 function cart(){

   alert("item added to cart Sucessfully") 
   window.location.href=""
 }
           