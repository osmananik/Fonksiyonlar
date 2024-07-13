
// const karealani=function(kenar){
//     // 
//     return kenar**2; //kenarın karesini return olarak döndürür ve globalde kulllanabilirsiniz.
// }
const karealani=kenar=>kenar**2; //arrow function tanımlarken ilk önce function ismini kaldırdık parametrenin yanına eşittir ve büyüktür işareti koyduk  eğer tek bir parametre alıyorsam parametre tanımlarken kullanılan parantezleri kullanmak zorunda değiliz birden fazla parametre alıyorsak parantez kullanmak zorundayız  eğer return tek bir satırsa burdaki süslüleri kullanmak zorunda değiliz returnude kullanmak zorunda değiliz
     
    




const sonuc=karealani(5);

//console.log(alan); //alan değişkeni lokalde tanımlandığı için globalde console basdırdığımızda hata alıcaktır alan değerini return etmemiz lazım

console.log(sonuc);

// const can=function()
// {
//     return "can";
// }



//arrow function şekilde tanımlıcaz

const can=()=>  "can";  

const bitis=can();
console.log(bitis);//boş parametre ve birden fazla parametre varsa parantezleri koyucaz

// const fatura=function(urunler,vergi){
//     let toplam=0;
//     for(let i=0;i<urunler.length;i++){
//         toplam+=urunler[i]+urunler[i]*vergi;
//     }
//     return toplam;
// }
const fatura=(urunler,vergi)=>{
    let toplam=0;
    for(let i=0;i<urunler.length;i++){
        toplam+=urunler[i]+urunler[i]*vergi;
    }
    return toplam;
}


console.log(fatura([10,20,30],0.25));