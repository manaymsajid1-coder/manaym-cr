let bath1 = document.getElementById("bathroom1")



let bath = [
  {
    img: "categroies imgs/bathroom mirror/WhatsApp Image 2026-01-04 at 7.25.15 AM.jpeg",
    p: "Functional and stylish mirrors designed for bathroom spaces, with options resistant to moisture and steam.",
    anchor: "bath1.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/bathroom mirror/WhatsApp Image 2026-01-04 at 7.25.16 AM.jpeg",
    p: "Functional and stylish mirrors designed for bathroom spaces, with options resistant to moisture and steam.",
    anchor: "bath2.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/bathroom mirror/WhatsApp Image 2026-01-04 at 7.40.33 AM (1).jpeg",
    p: "Functional and stylish mirrors designed for bathroom spaces, with options resistant to moisture and steam.",
    anchor: "bath3.html",
    button: "view detail"
  }
];

for(  var i = 0;i<bath.length;i++){
    bath1.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${bath[i].img}"
              class="w-100 mt-3">

            <p class="cp">${bath[i].p}.
            </p>
            <a href="${bath[i].anchor}"><button class="mb-3">${bath[i].button}</button></a>


          </div>
        </div>


   
   
   
   
   
   
   
   
   
   
   
    `


}