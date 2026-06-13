const alan=document.getElementById('urunler');
products.forEach(p=>{
alan.innerHTML+=`<div class="card"><h3>${p.name}</h3>
<p>${p.price} TL</p>
<button onclick="ekle(${p.id})">Sepete Ekle</button></div>`;
});
function ekle(id){
let cart=JSON.parse(localStorage.getItem('cart'))||[];
cart.push(products.find(x=>x.id===id));
localStorage.setItem('cart',JSON.stringify(cart));
alert('Ürün sepete eklendi.');
}