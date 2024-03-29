let menu_btn = document.getElementById("menu-bars");
let header = document.querySelector("header");
let a = document.querySelectorAll(".nav-bar a");
menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("fa-times");
  header.classList.toggle("active");
});

let spans = document.querySelectorAll(".progress span");

let numbers = document.querySelectorAll(".skill p span");
let skills = document.querySelector(".skills");

function getCount(el) {
  let goal = el.dataset.count;
  let c = 1;
  let count = setInterval(() => {
    c++;
    el.innerHTML = `${c}%`;
    if (c == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}

let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }

  if (window.scrollY >= skills.offsetTop - 200) {
    if (!started) {
      spans.forEach((e) => {
        e.style.width = e.dataset["width"];
      });
      numbers.forEach((num) => {
        getCount(num);
      });
    }
    started = true;
  } else {
    started = false;
    spans.forEach((e) => {
      e.style.width = 0;
    });
    numbers.forEach((num) => {
      num.innerHTML = 0;
    });
  }

  if (window.scrollY == 0) {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    a[0].classList.add("active");
  } else if (window.scrollY >= 721 && window.scrollY < 1400) {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    a[1].classList.add("active");
  } else if (window.scrollY >= 1400 && window.scrollY < 2060) {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    a[2].classList.add("active");
  } else if (window.scrollY >= 2060 && window.scrollY < 2850) {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    a[3].classList.add("active");
  } else if (window.scrollY >= 2850 && window.scrollY < 3850) {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    a[4].classList.add("active");
  } else if (window.scrollY >= 3850) {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    a[5].classList.add("active");
  }
});

let scrollUp = document.querySelector(".scrollUp");
scrollUp.addEventListener("click", () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

a.forEach((e) => {
  e.addEventListener("click", () => {
    a.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    menu_btn.classList.remove("fa-times");
    header.classList.remove("active");
  });
});


// 


AOS.init();