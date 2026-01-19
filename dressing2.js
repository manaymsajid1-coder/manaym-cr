let dr2 = document.getElementById ("dressing2")





let dressing2 = [
  {
    img: "categroies imgs/dressing mirror/ChatGPT Image Jan 14, 2026, 07_10_55 AM.png",
    p: "Specialized mirrors with optimal lighting and angles perfect for grooming and styling routines.",
    anchor: "dr4.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/dressing mirror/WhatsApp Image 2026-01-14 at 7.16.54 AM.jpeg",
    p: "Specialized mirrors with optimal lighting and angles perfect for grooming and styling routines.",
    anchor: "dr5.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/dressing mirror/WhatsApp Image 2026-01-14 at 7.16.54 AM (1).jpeg",
    p: "Specialized mirrors with optimal lighting and angles perfect for grooming and styling routines.",
    anchor: "dr6.html",
    button: "view detail"
  }
];

for(  var i = 0;i<dressing2.length;i++){
    dr2.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${dressing2[i].img}"
              class="w-100 mt-3">

            <p class="cp">${dressing2[i].p}.
            </p>
            <a href="${dressing2[i].anchor}"><button class="mb-3">${dressing2[i].button}</button></a>


          </div>
        </div>


   
   
   
   
   
   
   
   
   
   
   
    `


}