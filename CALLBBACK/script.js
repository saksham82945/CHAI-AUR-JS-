// sync async 
 // aisa code jo line by line chalw wo hai async code 
 // aisa code jo jab chalne ke liye ready ho jaye tab
 //  chalega wo hai async code 

 function kuchDerBadChalunga(val){
     setTimeout(() => {
        console.log(val);
     },
    Math.floor(Math.random()* 20)*1000
    );
 }
 kuchDerBadChalunga(12);
 