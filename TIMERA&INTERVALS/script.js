//   let tm = setTimeout(function(){ // set the time for work 
// console.log("Hello ")

// }, 5000);

 // clear the timeout/delay 
// clearTimeout(tm);

//  let count = 10;

//   let interval= setInterval(function(){
//      count--;
//     if (count >= 0) {
       

// console.log(count);
//     }
// else
//      clearInterval(interval);

//  },1000);
// setTimeout() - ek bar chalta haii or clear interval - har baar 

// Project Start Here 

let count = 0;
let progress=  document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let interval= setInterval(function(){
if(count<150){
    count++;
   progress.style.width = `${count}%`;
    percentText.textContent =`${count}%`;
}
else if(count == 150) {
     document.querySelector("h2").textContent = "Downloaded";
     document.querySelector("#statusText").textContent= "Connected To Server ";
    }
else {
    clearInterval(interval);
}
},10000 /150)