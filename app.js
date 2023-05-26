
const loader = document.getElementById("loader");
const container = document.querySelector(".wrap");

function loading(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;

  setTimeout(() => {
    loader.style.opacity = "0";
    container.classList.remove("hide");
   loader.style.display = "none";
  },2000);
}


