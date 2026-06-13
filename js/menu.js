
const alan=document.getElementById('urunler');
products.forEach(p=>{
alan.innerHTML+=`<div class="card slide-up"><img src="${p.img}">
<h3>${p.name}</h3><p>${p.price} TL</p><button>Sepete Ekle</button></div>`;
});
