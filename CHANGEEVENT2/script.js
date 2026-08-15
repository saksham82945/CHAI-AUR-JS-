// approach 

// const h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(detail){
// if (detail.key === " "){
//     h1.textContent = "space pressed";
//    }   else {
//     h1.textContent = detail.key;
//     }



// });

// 2nd project 

// let btn = document.querySelector("#btn");
//  let fileinp = document.querySelector("#fileinp")
// btn.addEventListener("click",function (){
//     fileinp.click();
// });

// fileinp.addEventListener("change",function(details){
//    const file = details.target.files[0];
//     if (file) {
// btn.textContent = file.name;
//     } 
// });
 
// 3rd projectts 
 let form = document.querySelector("form");
  let inputs = document.querySelectorAll("input");
 
  let main = document.querySelector("#main");


  form.addEventListener("submit",function(details){
    details.preventDefault();

    let card = document.createElement("div");
    card.classList.add = ("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    card.appendChild(profile);
    console.log(card);


    let img = document.createElement("img");
   img.setAttribute("src",
    inputs[2].value 
    
   );
  let h3= document.createElement("h3");
  // h3.textContent = " Saksham Kumar ";
  h3.textContent = inputs[0].value;
  let h5= document.createElement("h5");
  // h5.textContent =  "Serving Human ";
  h5.textContent = inputs[1].value;
  let p = document.createElement("p");
p.textContent = inputs[3].value;

 


profile.appendChild(img);
card.appendChild(profile);

card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);

main.appendChild(card);

inputs.forEach(function(input){
  if (input.type !== "submit") {
     input.value = "";
  }
   
});

  });


