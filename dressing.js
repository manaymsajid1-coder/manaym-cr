let dr = document.getElementById("dressing")


let dressing1 = [
  {
    img: "categroies imgs/dressing mirror/ChatGPT Image Jan 10, 2026, 02_35_11 PM.png",
    p: "Specialized mirrors with optimal lighting and angles perfect for grooming and styling routines.",
    anchor: "dr1.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/dressing mirror/ChatGPT Image Jan 14, 2026, 06_54_18 AM.png",
    p: "Specialized mirrors with optimal lighting and angles perfect for grooming and styling routines.",
    anchor: "dr2.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/dressing mirror/ChatGPT Image Jan 14, 2026, 06_57_06 AM.png",
    p: "Specialized mirrors with optimal lighting and angles perfect for grooming and styling routines.",
    anchor: "dr3.html",
    button: "view detail"
  }
];

for(  var i = 0;i<dressing1.length;i++){
    dr.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${dressing1[i].img}"
              class="w-100 mt-3">

            <p class="cp">${dressing1[i].p}.
            </p>
            <a href="${dressing1[i].anchor}"><button class="mb-3">${dressing1[i].button}</button></a>


          </div>
        </div>


   
   
   
   
   
   
   
   
   
   
   
    `


}