// let form = document.querySelector("form");

// form.addEventListener("submit",function(details){
//      details.preventDefault();
//   default refresh nhi hooga  jaise data daloge wiasa hi rhegga 

// })

// jispe  event aayega agaqr uspar listener nhi hua to hmara event
//  uske parent par listener dhundhega aur aisa karte karte upper ki tarah move kareega  

// min div 
      // nav div 
          // links 
             // button  //increrases in descending order
             

            //  document.querySelector("#nav").addEventListener("click",function () {
            //      alert("clicked");

            //  });
//   let ul = document.querySelector("#ul");
  
//   ul.addEventListener("click" , function(details){
//      details.target.classList.add("lt")
//   })

// bubbling me event jump karke 
 let a = document.querySelector(".a")
 let b = document.querySelector(".b")
 let c = document.querySelector(".c")
 let button = document.querySelector("button")

 button.addEventListener("click",function(details){
      console.log("button clicked ");

 })
  button.addEventListener("click",function(){
      console.log("button a")
      a.style.backgroundColor = "black";
 },true)
  button.addEventListener("click",function(){
      console.log("button b")
      b.style.backgroundColor = "pink"
 },true)
 button.addEventListener("click",function(){
      console.log("button c")
      c.style.backgroundColor = "red"
 },
true)

 // jab bhi aap click karte ho ya koi bhi event raise karte ho to 
 // aapka jo event flow 2 phases me chalta hai 

 // phase1 :: event top level element se neeche ki taraf ayyega 
 // phase 2 : event raise element sw parent ki tARAF JAYEGA 

 // and phele phase1  hoti hai  par wo by default off rahti hai,
 // agar hmm use on kar dein to phele phase 1 ka answer milega 
 
 

 