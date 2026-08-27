// this keyword special keyword hai , kyuki jais
//  ki baaki saare keyword ki value ya unka nature same rheta hai 
// this ki value ya nature badal jata hai iss bat se ki aap kha pr use kar rhe hoo 


// 1. GLobal  scope  -- 
// window haii pardhan mantri -- supreme person

// console.log(this);

// function abcd()
// {
     
//     console.log(this); // function ke under iska value  
// }
// abcd();

// METHOD KE UNDER 

//  let obj = {
//      name :"harsh",
//      age: 32,
//      sayName: function () { // ye ek function hai object ka 
//          console.log(this); // this is called method bcz 
   // object ke under haii isliye iski value object ho jayega 
//           console.log(this.age);
//      }
//  }
//  obj.sayName();
//   let obj1 = {
//      name :"harsh",
//      age: 32,
//      sayName: () => { // ye ek arrow function hai jisme this ka value window ho jayega 
          // wo aaona value loose kar dega 
//          console.log(this);  
//           console.log(this.age)
//      }
//  }
//  obj1.sayName();

 // EVENT HANDLER 
//  document.querySelector("h1").addEventListener("click",function () {
//     console.log(this.style.color="red"); // event handler ke andr this ka value wo element
    //  hota hai jispr event trigger hua hai 
    

 
//  })

 // call apply bind 
  // function ko call karte waqt aap set kar sakte ho ki 
  // uski value kyya hoogi \

   let obj5 = {
     name: " harsh",
     age: 45,
   };

    function abcd(a,b,c){
        console.log(this.age);

    }
    abcd.call(obj5,a,b,c);
     
    // Apply 
    
   let obj = {
     name: " harsh",
     age: 45,
   };

    function abcd(a,b,c){
        console.log(this,a,b,c);

    }
    abcd.apply(obj,[a,b,c]);   

    // Bind 
     let obj3 = {
     name: " harsh",
     age: 45,
   };

    function abcd(a,b,c){
        console.log(this,a,b,c);

    }
    abcd.bind(obj3,a,b,c);   
     
    let fnc = abcd.bind(obj3,1,2,3)
    fnc();
     