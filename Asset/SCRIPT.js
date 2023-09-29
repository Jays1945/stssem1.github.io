const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const pops = document.querySelectorAll(".pop");

window.addEventListener("scroll", checkpops);

checkpops();

function checkpops() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  pops.forEach((pop) => {
    const popTop = pop.getBoundingClientRect().top;

    if (popTop < triggerBottom) {
      pop.classList.add("out");
    } else {
      pop.classList.remove("out");
    }
  });
}

const geserkanans = document.querySelectorAll(".geserkanan");

window.addEventListener("scroll", checkgeserkanans);

checkgeserkanans();

function checkgeserkanans() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  geserkanans.forEach((geserkanan) => {
    const geserkananTop = geserkanan.getBoundingClientRect().top;

    if (geserkananTop < triggerBottom) {
      geserkanan.classList.add("out");
    } else {
      geserkanan.classList.remove("out");
    }
  });
}

// Typing animation
var typed = new Typed(".typing", {
  strings: ["ADIDAS", "STARBUCK", "KFC"],
  typeSpeed: 100,
  BackSpeed: 100,
  loop: true,
});
