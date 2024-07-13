

const anik=function(ad="osman",soyad="anık"){  
    console.log("AD: "+ad+" SOYAD: "+soyad);
    console.log(`Àd Soyad ${ad} ${soyad}`);
}
anik();//parametre olarak değer yollamazsam fonksiyon içinde default olarak tanımladığımız değer geçerlidir fonksiyona değer girseydik ilgi değer gerli olucaktı

anik("zeynep","anık");