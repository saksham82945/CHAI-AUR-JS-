let nm = document.querySelector("#name");
let form = document.querySelector("form");

// form.addEventListener("submit",function(details){
//     details.preventDefault();
//     if ( nm.value.length <= 2){
// document.querySelector("#hide").style.display = "block";
//     }
//     else{
//          document.querySelector("#hide").style.display = "none";
//     }
    
// }) 

form.addEventListener("submit", function(details){
    details.preventDefault(); 
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let ans = regex.test("harsh@test.com");
console.log(ans);
}) 