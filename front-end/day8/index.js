const boxes = document.querySelectorAll(".box");

const toggleClickedClass = (e) => {
  if (e.target.className.includes("clicked")) {
    e.target.className = "box";
  } else {
    e.target.className = "box clicked";
  }
};

[...boxes].forEach((box) => {
  box.addEventListener("click", toggleClickedClass);
});
