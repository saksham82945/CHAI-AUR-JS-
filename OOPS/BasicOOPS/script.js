function CreateBiscuits(name,price,qty,color,taste,category) {
 this.name = "Parle G";
 this.color = " brown";
 this.price = 10;
 this.taste = "sweet";
 this.category = "regular";
this.qty = 12;
}

let biscuit1 = new CreateBiscuits("Oreo",20,4,"black-white","sweet","cookies");4
let biscuit2= new CreateBiscuits("Fantasy",)
 let biscuit3 = new CreateBiscuits("bourbon",10,6,"dark-brown")

 // humein yha sikhna hai factories banana, matlab ki aap ek bar blueprint bana do ki har object kaise dikhega and hmm log 
 // naye naye objects with differenet  values bana payenge , yahi upar uppar se poora kaam hai OOPS mein

   function CreatePencil(name,color,price,type){
    this.name = name;
    this.color = color;
    this.company= company;
    this.price = price;
    this.type = type;
    this.isBroken = false;
    // this.write = function() {
    //     let h1 = document.createElement("h1");
    //     h1.textContent = this.name+ "brand is used";
    //     h1.style.color = color;
    //      document.body.append(h1);
    // }
CreatePencil.prototype.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
               h1.style.color = this.color;
         document.body.append(h1);
    }
   }

   CreatePencil.prototype.company = "shreyains";
   let pencil1 = new CreatePencil("Faber-Castell", "yellow", 10, "HB");
   let pencil2 = new CreatePencil("Natraj", "green", 5, "2B");
 
   // new se  this ki value blank ho jayeggi
  // agar tumarha constructoir function koi field aapne prototype pe attach kar le tu uss contrcutor
  //  se banne wale sabhi new instances yanii ki
  //  object ke pass wo field automatically chali jatii hai 

  // iska yahi advantage hai kii 