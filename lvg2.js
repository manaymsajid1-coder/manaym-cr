let lvg2 = document.getElementById("Livingroom2");

let l2 = [
  {
    img: "categroies imgs/living room mirror/ChatGPT Image Jan 4, 2026, 06_39_06 AM - Copy (2).png",
    p: "Elegant mirrors to enhance your living space, creating an illusion of more room and adding a touch of sophistication.",
    anchor: "lvg4.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/living room mirror/WhatsApp Image 2026-01-04 at 7.04.05 AM (1).jpeg",
    p: "Elegant mirrors to enhance your living space, creating an illusion of more room and adding a touch of sophistication.",
    anchor: "lvg5.html",
    button: "view detail"
  },
  {
    img: "categroies imgs/living room mirror/WhatsApp Image 2026-01-04 at 7.04.05 AM.jpeg",
    p: "Elegant mirrors to enhance your living space, creating an illusion of more room and adding a touch of sophistication.",
    anchor: "lvg6.html",
    button: "view detail"
  }
];

for (var i = 0; i < l2.length; i++) {
  lvg2.innerHTML += `
    <div class="col-md-4 text-center">
      <div class="card C1">
        <div class="card-body">
          <img src="${l2[i].img}" class="w-100 mt-3">
          <p class="cp">${l2[i].p}</p>
          <a href="${l2[i].anchor}">
            <button class="mb-3">${l2[i].button}</button>
          </a>
        </div>
      </div>
    </div>
  `;
}
