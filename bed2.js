let a1 = document.getElementById("bedroom2")





let b2 = [
  {
    img: "categroies imgs/bedroom mirror/WhatsApp Image 2026-01-13 at 3.23.10 AM.jpeg",
    p: "Beautiful mirrors for your personal space, from full-length options to decorative pieces that complement your decor.",
    anchor: "bed4.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/bedroom mirror/ChatGPT Image Jan 13, 2026, 03_05_04 AM.png",
    p: "Beautiful mirrors for your personal space, from full-length options to decorative pieces that complement your decor.",
    anchor: "bed5.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/bedroom mirror/ChatGPT Image Jan 13, 2026, 02_55_56 AM.png",
    p: "Beautiful mirrors for your personal space, from full-length options to decorative pieces that complement your decor.",
    anchor: "bed6.html",
    button: "view detail"
  }
];
for(var i = 0 ; i<b2.length;i++){
    a1.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${b2[i].img}"
              class="w-100 mt-3">

            <p class="cp">${b2[i].p}
            </p>
            <a href="${b2[i].anchor}"><button class="mb-3">${b2[i].button}</button></a>


          </div>
        </div>


    
    
    
    
    
    
    
    
    
    
    `
}
