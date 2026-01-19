 let a = document.getElementById("bedroom1")



 let b = [
    {
    img:"categroies imgs/bedroom mirror/WhatsApp Image 2026-01-13 at 3.17.49 AM.jpeg",
    p:"Beautiful mirrors for your personal space, from full-length options to decorative pieces that complete your decor",
    anchor:"bed1.html",
    button:"view details"

 },
  {
    img:"categroies imgs/bedroom mirror/WhatsApp Image 2026-01-13 at 3.19.53 AM.jpeg",
    p:"Beautiful mirrors for your personal space, from full-length options to decorative pieces that complete your decor",
    anchor:"bed2.html",
    button:"view details",

 },
  {
    img:"categroies imgs/bedroom mirror/WhatsApp Image 2026-01-13 at 3.15.17 AM.jpeg",
    p:"Beautiful mirrors for your personal space, from full-length options to decorative pieces that complete your decor",
    anchor:"bed3.html",
    button:"view details"

 },
]
for(  var i = 0;i<b.length;i++){
    a.innerHTML+=`
    <div class="col-md-4 text-center">
        <div class="card C1">
          <div class="card-body">
            <img
              src="${b[i].img}"
              class="w-100 mt-3">

            <p class="cp">${b[i].p}.
            </p>
            <a href="${b[i].anchor}"><button class="mb-3">${b[i].button}</button></a>


          </div>
        </div>


   
   
   
   
   
   
   
   
   
   
   
    `


}