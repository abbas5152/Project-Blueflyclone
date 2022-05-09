





 
 var arr = [{ avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111896494_RLLZ_2_large.jpg?v=1651687587",
 heading_4: "VALENTINO ROCKSTUD CAGED",
 para_1: "HAT",
 para_2: "$550.99 Save 10%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/417424_206265-2_large.png?v=1650218372",
 heading_4: "VALENTINO ROMAN STUD",
 para_1: "SCARVES",
 para_2: "$520.99 Save 7%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/91479812_large.jpg?v=1651730685",
 heading_4: "SAINT LAURENT VIVI",
 para_1: "UMBRELLA",
 para_2: "$400.99 Save 13%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/104306.01_437691f0-52e7-4543-906a-e34c9c6f5fc4_large.jpg?v=1651966731",
 heading_4: "BALENCIAGA TRACK SNEAKER",
 para_1: "SCARVES",
 para_2: "$800.99 Save 15%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111896494_RLLZ_2_large.jpg?v=1651687587",
 heading_4: "VALENTINO ROCKSTUD CAGED",
 para_1: "HAT",
 para_2: "$550.99 Save 10%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/417424_206265-2_large.png?v=1650218372",
 heading_4: "VALENTINO ROMAN STUD",
 para_1: "SCARVES",
 para_2: "$520.99 Save 7%"},

 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/91479812_large.jpg?v=1651730685",
 heading_4: "SAINT LAURENT VIVI",
 para_1: "UMBRELLA",
 para_2: "$400.99 Save 13%"},
 { avatar:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/104306.01_437691f0-52e7-4543-906a-e34c9c6f5fc4_large.jpg?v=1651966731",
 heading_4: "BALENCIAGA TRACK SNEAKER",
 para_1: "SCARVES",
 para_2: "$800.99 Save 15%"},
 
 
 

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
           