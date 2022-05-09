





 
 var arr = [{ avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161192845_RLLZ_2_large.jpg?v=1651753486",
 heading_4: "VALENTINO ROCKSTUD CAGED",
 para_1: "BACKPACKS",
 para_2: "$550.99 Save 10%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111058850_RLLZ_1_large.jpg?v=1651873670",
 heading_4: "VALENTINO ROMAN STUD",
 para_1: "HOBO BAGS",
 para_2: "$520.99 Save 7%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160615652_RLLZ_2_large.jpg?v=1652060312",
 heading_4: "SAINT LAURENT VIVI",
 para_1: "TOTE BAGS",
 para_2: "$400.99 Save 13%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111915529_RLLZ_2_large.jpg?v=1651866897",
 heading_4: "BALENCIAGA TRACK SNEAKER",
 para_1: "HOBO BAGS",
 para_2: "$800.99 Save 15%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161162954_RLLZ_2_large.jpg?v=1651942018",
 heading_4: "JIMMY CHOO ANISE",
 para_1: "BACKPACKS",
 para_2: "$800.99 Save 11%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161236054_RLLZ_2_large.jpg?v=1651963267",
 heading_4: "GUCCI BASKET LEATHER HIGH",
 para_1: "TOTE BAGS",
 para_2: "$700.99 Save 11%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/IMG_3807_cfb4afe5-6d1f-4a00-a511-938a491e2896_large.jpg?v=1651828892",
 heading_4: "VALENTINO ROMAN STUD",
 para_1: "HOBO BAGS",
 para_2: "$520.99 Save 7%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161192845_RLLZ_2_large.jpg?v=1651753486",
 heading_4: "SAINT LAURENT VIVI",
 para_1: "TOTE BAGS",
 para_2: "$400.99 Save 13%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160615652_RLLZ_2_large.jpg?v=1652060312",
 heading_4: "BALENCIAGA TRACK SNEAKER",
 para_1: "HOBO BAGS",
 para_2: "$800.99 Save 15%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161192845_RLLZ_2_large.jpg?v=1651753486",
 heading_4: "JIMMY CHOO ANISE",
 para_1: "BACKPACKS",
 para_2: "$800.99 Save 11%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111058850_RLLZ_1_large.jpg?v=1651873670",
 heading_4: "GUCCI BASKET LEATHER HIGH",
 para_1: "TOTE BAGS",
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
           