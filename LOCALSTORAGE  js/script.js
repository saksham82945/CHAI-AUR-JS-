// locasl Storage - Aapke browser ke under data store karna jo ki browser band 
// hone par bhi delete nhi hooga 
// Session Storage --> ye aapka data temporarily store karta hai maatlab
//  ki tab band hua aur data gyya 


// Cookies --> ye bhi data store karta hai and aapka 
// data browser ke cookie name ki property me save hotta hai 
// and ye cookie concept small data / light data ke liye hota hai 

// Local Storage --> 
// Store Kaise Kare  -> setItem
// Data fetch kaise kare  -> getItem
// remove kaise kare 
// update kaise kare 

// Store Kaise Kare 
// localStorage.setItem("name" ,"saksham");

// get kaise kare 
// let val = localStorage.getItem("name");

// remove kaise kare 
// localStorage.removeItem("name");

//update kaise kare 
// localStorage.setItem("name", "sakshi");
// agar phele se data hoga to update kar dega nhi to naya fill bana degga 
// puri data ko clear kaise karee 
//localStorage.clear();

// you cannot store array or object in localStorage 
// localStorage.setItem("friend", [ "akash","sumit", "saksham"]);
// localStorage.setItem("friends",{one: "akash",two:"sumit"});

// isliye unhe string bana ek store karte hai  and jabb hmm unhe wapas
//  nikalte hai to string milta hai 

localStorage.setItem("friends", JSON.stringify(["akash", "harsh","saksham"]));
 let  fr = JSON.parse(localStorage.getItem("friends"));


// Session Storage 

// store kaise kare 
// sessionStorage.setItem("name", "saksham");

// get kaise kare 
// let val3 = sessionStorage.getItem("name");

// remove kaise kare 
//sessionStorage.removeItem("name");

//update kaise kare 
//sessionStorage.setItem("name", "sakshi");

// clear data 
//sessionStorage.clear();

// agar phele se data hoga to update kar dega nhi to naya fill bana degga 
// jaise hi hmm tab close karenge  data gyya 


                  // COOKIES 

// Cookies -- Browser me chota chota data store karne ke liye 
// cookies ka use hota and ye backend ke server pe jata hai 

// Cookies ~ 4KB 
// Local Storage / Session Storage - ~5MB 
// cookies me jo bhi data store karioge wo data page
//  reload par automatically  server par  chal ajyega 

// document.cookie = "name=saksham";
// console.log(document.cookie);
 // ye cookie me data save kar dega 

// document.cookie= "age =27";


// project overview 
function setDarkOrLight() {
if (window.matchMedia("(prefers-color-scheme: dark)").matches){

} else {
     document.body.classList.add("Light");
}
}
setDarkOrLight();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change")