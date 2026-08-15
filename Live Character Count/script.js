let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input", function (){
   let left = 20 - input.value.length;

   if(left < 0) {
     span.textContent= left;
     span.style.color = "red";
   }
   else{
    span.textContent= left;
    span.style.color = "pink";

   } 
})
