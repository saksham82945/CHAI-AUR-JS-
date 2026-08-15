// change event tab chaklta hai jab aapka koi 
// input select ya text area mein koi change ho jayye 

 let select = document.querySelector("select");
select.addEventListener("change",function(detail){
// console.log(detail);
console.log(detail.target.value);    
})
