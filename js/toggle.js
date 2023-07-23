function toggle() {
  const ele = document.querySelector("#fbi-content");

  if (ele.style.display === "") {
    ele.style.display = "block";
    showCount();
  } else if (ele.style.display === "block") {
    ele.style.display = "";
  }
}
