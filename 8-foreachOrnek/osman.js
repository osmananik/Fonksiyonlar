const ulum=document.querySelector(".main");

let ogrencilerim=["osman","zeynep","yusuf","kübra"];

let html= ``;

ogrencilerim.forEach(ogrenci=>{
    html+=`<li>${ogrenci}</li>`
})

console.log(html);

ulum.innerHTML=html;