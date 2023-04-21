//module to edit and change background color and innerText of a button

function disabledBtn(btn, removedClasses) {
  btn.innerText = "wait...";
  removedClasses.forEach((el) => btn.classList.remove(el));
  btn.classList.remove("hover:cursor-pointer");
  btn.classList.add("bg-gray-500");
}

function enabledBtn(btn, text, addedClasses) {
  btn.innerText = text;
  btn.classList.remove("bg-gray-500");
  addedClasses.forEach((el) => btn.classList.add(el));
  btn.classList.add("hover:cursor-pointer");
}

export { disabledBtn, enabledBtn };
