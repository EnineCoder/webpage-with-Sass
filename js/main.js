let bulettsDiv = document.querySelectorAll(".buletts span");
let imgs = document.querySelectorAll(".box-img img");
let imageDiv = document.querySelector(".box");
let iconLeft = document.querySelector(".left");
let iconRight = document.querySelector(".right");

imgs.forEach((ele) => {
  ele.addEventListener("mouseover", (e) => {
    bulettsDiv.forEach((ele) => {
      ele.classList.remove("active");
    });
    document.querySelector(e.currentTarget.dataset.ta).classList.add("active");
  });
});

let x = 0;
iconRight.onclick = function () {
  if (imageDiv.offsetLeft === -imageDiv.offsetWidth * 4) {
    imageDiv.style.right = 0 + "px";
  } else {
    x -= imageDiv.offsetWidth;
    imageDiv.style.left = x + "px";
  }
};

iconLeft.onclick = function () {
  if (imageDiv.offsetLeft === 0) {
    imageDiv.style.right = 0 + "px";
  } else {
    x += imageDiv.offsetWidth;
    imageDiv.style.left = x + "px";
  }
};

let header = document.querySelector("header");
let bars = document.querySelector(".bars");
let closeIcon = document.querySelector("nav span");
let nav = document.querySelector("nav");
let lis = document.querySelectorAll("nav ul li");

bars.onclick = function () {
  nav.classList.toggle("open");
};
closeIcon.onclick = function () {
  nav.classList.toggle("open");
};

lis.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.classList.toggle("open");
  });
});

window.onscroll = function () {
  if (scrollY > 300) {
    header.style.position = "fixed";
    header.style.backgroundColor = "#fbfbfb";
    header.style.width = "100%";
  } else {
    header.style.backgroundColor = "#fff";
    header.style.position = "relative";
  }
};
