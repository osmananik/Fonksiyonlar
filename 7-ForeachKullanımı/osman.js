// const a =(callBacka)=>{
//     let yas=32;
//     callBacka(yas);
// };

// a(function(value)
// {
//     console.log(value);
// })

let ogrencilerim=["osman","zeynep","yusuf","kübra"];

ogrencilerim.forEach(function(){  //öğrencilerim dizinin içinde kaç adet elaman varsa o kadar selam basar

    console.log("selam");

})

ogrencilerim.forEach(function(kisi,index){   //dizi içindeki değerleri sırası ile basar parametre atarsak index ve sırasınıda tutar

    console.log(kisi,index);

})

const ogrenci=(kisi,index)=>{
    console.log(`${index}--${kisi}`);
}

ogrencilerim.forEach(ogrenci);