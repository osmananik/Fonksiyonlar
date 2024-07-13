
const karealani=function(kenar){
    // 
    return kenar**2; //kenarın karesini return olarak döndürür ve globalde kulllanabilirsiniz.
}

const sonuc=karealani(5);

//console.log(alan); //alan değişkeni lokalde tanımlandığı için globalde console basdırdığımızda hata alıcaktır alan değerini return etmemiz lazım

console.log(sonuc);