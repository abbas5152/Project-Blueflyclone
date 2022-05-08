var arr = JSON.parse(localStorage.getItem('jpd')) || [];

document.querySelector('form').addEventListener('submit',sudip)

function sudip(){
    event.preventDefault();
    obj = {
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
        d_price: document.querySelector("#d_price").value,
        discount: document.querySelector("#discount").value,
        typeof: document.querySelector("#typeof").value,
        brand: document.querySelector("#brand").value,
        color: document.querySelector("#color").value,
        i1: document.querySelector("#i1").value,
        i2: document.querySelector("#i2").value,
        i3: document.querySelector("#i3").value,
        dec: document.querySelector("#dec").value,
    }
    arr.push(obj);
    localStorage.setItem('jpd',JSON.stringify(arr));
    window.location.href='jpage1.html'
}
