const butyButton = document.querySelector(".buty");
const panel = document.getElementById("premium-panel");

if (butyButton && panel) {
  butyButton.addEventListener("click", function () {
    panel.style.display = "flex";
  });
}

const back = document.querySelector(".info");
back.addEventListener("click",()=>{
    window.location.href ='index.html';
})