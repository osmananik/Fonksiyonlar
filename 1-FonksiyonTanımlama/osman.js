osman();  // fonksiyonu bu şekilde atama yapmadan tanımladığımızda heryerden çağırabiliz
osman();

function osman(){
    console.log("şampiyon galatasaray");
}

osman();
osman();   // fonksiyonu bu şekilde atama yapmadan tanımladığımızda heryerden çağırabiliz

const anik=function(){   //anik değişkeni tanımlayarak tanımladığımız fonksiyonu anik değişkenine atadık

    console.log("OSMAN ANIK");    //function expression şeklinde tanımlarsa 
}

anik();

// const anik=function(){   //anik değişkeni tanımlayarak tanımladığımız fonksiyonu anik değişkenine atadık

//     console.log("OSMAN ANIK");    //function expression şeklinde tanımlarsa fonksiyonu tanımladığımız şekilde yukarıda çağırırsak çalıştırmaz  function expression şekilde fonksiyon tanımlaması yapıyorsak önce tanımlamamız sonra çağırmaız gerekir
// }