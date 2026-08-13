
 const clock = document.getElementById('click')
// const clock = document.getElementById('click')


setInterval(function (){
let date = new Date()
//console.log(date.toLocaleTimeString())
clock.innerText = date.toLocaleTimeString();
}, 1000);