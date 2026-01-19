let bath2 = document.getElementById("bathroom2")





let bathroom2 = [
  {
    img: "categroies imgs/bathroom mirror/WhatsApp Image 2026-01-04 at 7.40.33 AM.jpeg",
    p: "Functional and stylish mirrors designed for bathroom spaces, with options resistant to moisture and steam.",
    anchor: "bath4.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/bathroom mirror/WhatsApp Image 2026-01-04 at 7.40.34 AM (1).jpeg",
    p: "Functional and stylish mirrors designed for bathroom spaces, with options resistant to moisture and steam.",
    anchor: "bath5.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/bedroom mirror/ChatGPT Image Jan 13, 2026, 02_55_56 AM.png",
    p: "Functional and stylish mirrors designed for bathroom spaces, with options resistant to moisture and steam.",
    anchor: "bath6.html",
    button: "view detail"
  }
];

for(  var i = 0;i<bathroom2.length;i++){
    bath2.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${bathroom2[i].img}"
              class="w-100 mt-3">

            <p class="cp">${bathroom2[i].p}.
            </p>
            <a href="${bathroom2[i].anchor}"><button class="mb-3">${bathroom2[i].button}</button></a>


          </div>
        </div>


   
   
   
   
   
   
   
   
   
   
   
    `


}