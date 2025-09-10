const text = "I’VE PUT TOGETHER TWO BOOKS FOR YOU—WOULD YOU LIKE TO TAKE A LOOK ?";
let i = 0;
const typingEl = document.getElementById("typing");
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");

function typing() {
    if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    } else {
        setTimeout(() => {
          enterBtn.classList.add("show");
        }, 500);
    }
}

window.addEventListener("load", () => {
  intro.classList.add("show");
  typing();
});

enterBtn.addEventListener("click", () => {
    intro.classList.add("fade");

    setTimeout(() => {
      intro.style.display = "none";
      content.style.display = "block"; 
      
      setTimeout(() => {
        content.classList.add("show");
      }, 100);
    }, 500);
});
