let leftPos = true;

validate = () => {
  const btn = document.querySelector("#btn"),
    name = document.querySelector("#nameField").value,
    email = document.querySelector("#emailField").value;
  if (!name || !email) {
    btn.classList.add("error");
    changePosition(btn);
    return;
  }
  btn.classList.remove("error");
};

changePosition = () => {
  if (leftPos) {
    btn.style.marginLeft = "360px";
    leftPos = false;
    return;
  }
  btn.style.marginLeft = "0px";
  leftPos = true;
};
