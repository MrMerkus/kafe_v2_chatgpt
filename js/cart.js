const cart=JSON.parse(localStorage.getItem('cart'))||[];
const alan=document.getElementById('cart');
if(cart.length===0){alan.innerHTML='<p>Sepet boş.</p>';}
else{
let toplam=0;
cart.forEach(i=>{toplam+=i.price;alan.innerHTML+=`<p>${i.name} - ${i.price} TL</p>`});
alan.innerHTML+=`<h3>Toplam: ${toplam} TL</h3>`;
}