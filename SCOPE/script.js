
// scope  hai ki aap aapne created variables and functions kha
//  tak use kar sakte haii 

//   -- Functional scope -- function ke andar create ki gayi variables and functions ko function ke andar hi use kar sakte hai 
//   -- Global Scope -- function ke bahar create ki gayi variables and functions ko function ke andar bhi use kar sakte hai  
//   --Block Scope -- {} ke andar create ki gayi variables and functions ko {} ke andar hi use kar sakte hai 

function abcd(){ // functional scope
      
    var a = 12;

}
// Curly brackets akele lagge hai to vo block scope hote hai 12
//  function ke andar hai to functional scope hai 


 // Agar aapka code kisi bhi {} ke under nhi
 //  hai to aapka code global hai 

 // Execution Content -- 

 // js sabse phele jaise hi aapka function dekhta hai
 //  sabse phele js banaata hai execution context ,ye ek 
 //process hai jo ki different phase mein chalta hai , 
// memoty phase and dusee ka name hai execution force 
 // 1. creation phase -- 
 // 2. execute phase 

 function abcd() {
      var a = 12;
var b = 23;
let c = 15;

 }

 // javascript -use  lexical scoping -> ki aap kha pr physcially available
 //  ho ye puri tarike se depend karta hai ki aap kya access kar sakte hai 
// function abcd(){
//      let a = 12;
//      function functiondef() {
//         console.log(a);
//      }
  
// }
 // dynamic scoping -> Kha se call kar rhe ho uspe depend karega ki kya value milegi 

//  let a = 12;
//  function pqr(){
// console.log(a);
//  }

//  function defg() {
//      let a = 13;
//      pqr();
//  }
//  defg();

// dynamic scoping kam nhi karta js me yha sirf lexcial scoping hotta hai means value 
// kha pe define hai wo depend karta hai  na ki kha se call hoo rhha haii 

// closures hote hai function jo ki kisi parent functio ke under ho aur under wala 
//function return ho rhha hai , and returning funcyion usse kare , function ka
// koi bhi variable
// ex -->
function abcd() {
     let a = 12;
     return function () {
         console.log(a);
     }
}
abcd();

 // Benefits & loss -- >
 // private variables 
 // global pollution 

 