var spobj = JSON.parse(localStorage.getItem('quickview'))

myfunction(spobj)

function myfunction(obj){

    var main_img = document.querySelector("#main_img")
    var img1 = document.createElement("img")
    img1.setAttribute('src',obj.i1)
    main_img.append(img1)

    var si1 = document.querySelector("#si1")
    var img2 = document.createElement("img")
    img2.setAttribute('src',obj.i1)
    si1.append(img2)

    var si2 = document.querySelector("#si2")
    var img3 = document.createElement("img")
    img3.setAttribute('src',obj.i2)
    si2.append(img3)

    var si3 = document.querySelector("#si3")
    var img4 = document.createElement("img")
    img4.setAttribute('src',obj.i3)
    si3.append(img4)

    var brand = document.querySelector('#brand')
    brand.innerText=obj.brand

    var name = document.querySelector('#name')
    name.innerText=obj.name

    var op = document.querySelector('#op')
    op.innerText='$ ' +obj.price

    var dp = document.querySelector('#dp')
    dp.innerText= '$ ' + obj.d_price

    var d = document.querySelector('#d')
    d.innerText= obj.discount

    var dela  = document.querySelector('#dela ')
    dela .innerText= 'FREE SHIPPING ON ORDERS OVER $99'

    var color  = document.querySelector('#color')
    color.innerText= 'COLOR  -  ' + obj.color

    var color_pic = document.querySelector('#color_pic')
    color_pic.setAttribute('src',obj.i1)

    var dep = document.querySelector('#dep')
    dep.innerText= obj.dec;
}



document.querySelector('#si2').addEventListener('click',function(){
    no1image(spobj)
})
function no1image(obj){
    // window.location.reload();
    var main_img = document.querySelector("#main_img")
    main_img.innerHTML="";

    var img1 = document.createElement("img")
    img1.setAttribute('src',obj.i2)
    main_img.append(img1)
    var boxx1 = document.querySelector("#si2")
    var boxx2 = document.querySelector("#si1")
    var boxx3 = document.querySelector("#si3")
    boxx1.style.border = "2px solid black"
     boxx2.style.border = "0px solid white"
     boxx3.style.border = "0px solid white"

}


document.querySelector('#si1').addEventListener('click',function(){
    no1imag(spobj)
})
function no1imag(obj){
    // window.location.reload();
    var main_img = document.querySelector("#main_img")
    main_img.innerHTML="";

    var img1 = document.createElement("img")
    img1.setAttribute('src',obj.i1)
    main_img.append(img1)
    var boxx1 = document.querySelector("#si1")
    var boxx2 = document.querySelector("#si2")
    var boxx3 = document.querySelector("#si3")
    boxx1.style.border = "2px solid black"
    boxx2.style.border = "0px solid white"
    boxx3.style.border = "0px solid white"
}


document.querySelector('#si3').addEventListener('click',function(){
    no1ima(spobj)
})
function no1ima(obj){
    // window.location.reload();
    var main_img = document.querySelector("#main_img")
    main_img.innerHTML="";

    var img1 = document.createElement("img")
    img1.setAttribute('src',obj.i3)
    main_img.append(img1)
    var boxx1 = document.querySelector("#si1")
    var boxx2 = document.querySelector("#si2")
    var boxx3 = document.querySelector("#si3")
    boxx1.style.border = "0px solid white"
    boxx2.style.border = "0px solid white"
    boxx3.style.border = "2px solid black"
}

// start middle product

var marr = [
    {
        name: 'BCBG MAX AZRIA WOMENS SLEEVELESS FAUX WRAP FORMAL DRESS',
        brand: 'Aquatalia',
        price: '398.00',
        d_price: '49.99',
        color: 'Salmon',
        discount: 'Save 87%',
        typeof: 'Womens Dresses - Day',
        dec: `Manufacturer: BCBGMAXAZRIA
        Suggested Price: $398.00
        Condition:
        Style Type: Sheath
        Collection: BCBGMAXAZRIA
        Sleeve Length: Sleeveless`,
        i1: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gEr6bcFkOStXRpaJp90dhh4EHK3A1yLA-25_360x.jpg?v=1651564623',
        i2: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/LUBN9ZQ6M3vxnfTOaGDm7s7goh6pVD6U-25_360x.jpg?v=1651564624',
        i3: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Gk1RnNwThUDdfilr0ke7bUzSENJAimDY-25_360x.jpg?v=1651564625',   
    },
        
        {
            name: "DIAMOND C INITIAL PENDANT 18 NECKLACE 14K WHITE GOLD ",
            brand: ' POMPEII3',
            price: '600.00',
            d_price: "254.99",
            discount: 'Save 58%',
            color: "Whie",
            dec: 'This petite womens pendant features 20 round cut natural diamonds. All diamonds are set in solid 14k white gold. An 18 14k white gold clasp lock chain is included.',
            i1: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/cinitialpendant_360x.jpg?v=1651584432',
            i2: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/a__2_511ae29b-f340-4e1f-93ad-edc5272744c4_360x.jpg?v=1651584433',
            i3: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pompeii3boxsmall_4908cb88-74cb-483d-a309-516d1f23825b_360x.jpg?v=1651584434',
        }, 
    
        {
            name: 'TIGER MIST WOMENS SNAKE PRINT FAUX LEATHER SLIP DRESS',
            brand: 'Barbour',
            price: '99.00',
            d_price: '23.99',
            color: 'Snake',
            discount: 'Save 76%',
            typeof: 'Womens Crossbody Bags',
            dec: `Manufacturer: Tiger Mist
            Suggested Price: $99.00
            Condition:
            Style Type: Seath`,
            i1: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/obSiwKZ2dAwEtcEBb7sfEd3SXln9lWZH-25_360x.jpg?v=1650629238',
            i2: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DgJb2g25e5g5pVZpSUpqFHhxNOhKlI37-25_360x.jpg?v=1650629240',
            i3: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/obSiwKZ2dAwEtcEBb7sfEd3SXln9lWZH-25_360x.jpg?v=1650629238',   
        },
    
        {
            name: "DIAMOND R INITIAL PENDANT 18 NECKLACE 14K WHITE GOLD",
            brand: 'POMPEII3',
            price: '600.00',
            d_price: "254.99",
            discount: 'Save 58%',
            color: "White",
            dec: 'This petite womens pendant features 27 round cut natural diamonds. All diamonds are set in solid 14k white gold. An 18 14k white gold clasp lock chain is included.',
            i1: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pdrlargez_67ae4d88-a73d-4a19-bc2d-849664cef36a_360x.jpg?v=1651516182',
            i2: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/a__2_d9fbd822-5bf2-4fed-9e93-b3ece6ade5d9_360x.jpg?v=1651516184',
            i3: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pompeii3boxsmall_49704732-2228-43e3-a763-3e8f47031741_360x.jpg?v=1651516186',
        },
    
        {
            name: 'FORTA RUN GIRLS BIG KIDS GYM RUNNING SHOES',
            brand: 'Burberry',
            price: '55.00',
            d_price: '48.99',
            color: 'White',
            discount: 'Save 11%',
            typeof: 'baby-kids/boys/shoes',
            dec: `Manufacturer: Adidas
            Suggested Price: $55.00
            Condition:
            Style Type: Running Shoes
            Collection: Adidas`,
            i1: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/6pglectWHYf0a49JMh80O2KpH6Ww9QG4-25_360x.jpg?v=1651910894',
            i2: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/PsORVUjzsEa1Tbdv0eDT578sl16Yr6uv-25_360x.jpg?v=1651910896',
            i3: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/EglzPlHvfMN7VplnVvATnpQ4PDd51anG-25_360x.jpg?v=1651910897',   
        },
        
    
    ]

hello(marr)

function hello(arr){

arr.forEach(function(elem){
    
    var di = document.createElement("div")
    di.setAttribute('class','world')
    di.addEventListener('click',function(){
        dipfunction(elem)
    })


    var imgg = document.createElement("img")
    imgg.setAttribute("src",elem.i1)
    var name = document.createElement("p")
    name.innerText=elem.name
    name.setAttribute('id','n_me')
    var p1 = document.createElement("s")
    p1.innerText= '$ '+elem.price
    p1.setAttribute('id','g1')
    var p2 = document.createElement("p")
    p2.innerText='$ '+elem.d_price
    p2.setAttribute('id','g2')
    var p3 = document.createElement("p")
    p3.innerText=elem.discount;
    p3.setAttribute('id','g3')

   
   di.append(imgg,name,p1,p2,p3)
   document.querySelector("#flex").append(di);
})

}

function dipfunction(elem){
    localStorage.setItem('quickview',JSON.stringify(elem))
    window.location.reload();
}