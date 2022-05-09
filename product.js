let product = JSON.parse(localStorage.getItem("data"));
console.log("product",product);


append(product);
function append(data){
    document.getElementById("g-product").innerHTML=null;
   data.map(function(el){
       let innerdiv=document.createElement("div");
       innerdiv.setAttribute("class","g-innerdiv");

       let img= document.createElement("img");
       img.src=el.image;
       img.setAttribute("class","g-image")

       let title= document.createElement("h3");
       title.innerText=el.title;
       title.setAttribute("class","g-title");

       let d= document.createElement("p");
       d.innerText=el.detail;
    //    img.setAttribute("class","g-image")

    let p= document.createElement("h3");
      p.innerText=`$${el.price}`;
    //    img.setAttribute("class","g-image")

       innerdiv.append(img,title,d,p);

       document.getElementById("g-product").append(innerdiv);
       
   } )
}
// sort function
document.getElementById("select-tag").addEventListener("click",sort);
function sort(){
  let select = document.getElementById("select-tag").value;

  if(select==="HTL"){
    product.sort((a,b)=>{
      b=Number(b.price);
      a=Number(a.price);
        return b-a;
    });
  }
    if(select==="LTH"){
      product.sort((a,b)=>{
        b=Number(b.price);
        a=Number(a.price);
          return a-b;
      });
    }
    if(select==="ATZ"){
      product.sort((a,b)=>{
        if(a.title>b.title)
        return 1;

        if(a.title<b.title)
        return -1;

        return 0;
    })
  }
  if(select==="ZTA"){
    product.sort((a,b)=>{
      if(a.title>b.title)
      return -1;

      if(a.title<b.title)
      return 1;

      return 0;
  })
}
    append(product);

}