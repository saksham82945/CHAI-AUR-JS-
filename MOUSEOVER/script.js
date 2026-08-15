  let abcd = document.querySelector("#abcd");

 // jab tak mouse whaa rhegga tab tak event trigger hoga
// abcd.addEventListener("mouseover",function(){
//      abcd.style.backgroundColor="yellow"
// }); 

 //  mouse oiut me aap wha se mouse hatayenge tab events honge 
// abcd.addEventListener("mouseout",function(){
//      abcd.style.backgroundColor="red"
// });

// jha jha mouse jayega waha waha event hoga like wo move karega with 
//mouse like their x axis and y axis 
window.addEventListener("mousemove",function(dets){
abcd.style.top = dets.clientY + "px";
abcd.style.left = dets.clientX + "px";

}); 
 
// 
abcd.addEventListen("click",function(dets){
      console.log(dets);
});