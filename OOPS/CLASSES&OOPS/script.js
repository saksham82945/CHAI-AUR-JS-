class CreatePencil {
     constructor(name,company,color,price,quality){
        this.name = name;
        this.company = company;
        this.color = color;
        this.price = price;
        this.quality = quality;
         
     }
     erase(){
document.body.querySelectorAll("h1").forEach((elem) => {
   if(elem.style.color === this.color){
    elem.remove();
   }

});


     }

write(text) {
     let h1 = document.createElement("h1");
      h1.textContent = text;
      h1.style.color = this.color;
      document.body.appendChild(h1);
} 
}
 let p1 =  new CreatePencil("natraj","natrajfusion","black",12,"best");
let p2 = new CreatePencil("aspara","asparaggems","red",10,"premium");
