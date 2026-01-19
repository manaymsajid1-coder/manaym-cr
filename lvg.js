let l = document.getElementById("living room")


let l1 = [
  {
    img: "categroies imgs/living room mirror/ChatGPT Image Jan 4, 2026, 06_09_10 AM.png",
    p: "Elegant mirrors to enhance your living space, creating an illusion of more room and adding a touch of sophistication.",
    anchor: "lvg1.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/living room mirror/ChatGPT Image Jan 4, 2026, 06_36_55 AM.png",
    p: "Elegant mirrors to enhance your living space, creating an illusion of more room and adding a touch of sophistication.",
    anchor: "lvg2.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/living room mirror/ChatGPT Image Jan 4, 2026, 06_10_20 AM.png",
    p: "Elegant mirrors to enhance your living space, creating an illusion of more room and adding a touch of sophistication.",
    anchor: "lvg3.html",
    button: "view detail"
  }
];
for(  var i = 0;i<l1.length;i++){
    l.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${l1[i].img}"
              class="w-100 mt-3">

            <p class="cp">${l1[i].p}.
            </p>
            <a href="${l1[i].anchor}"><button class="mb-3">${l1[i].button}</button></a>


          </div>
        </div>


   
   
   
   
   
   
   
   
   
   
   
    `}