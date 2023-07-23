function showCount() {
  const countEle = document.querySelector("#fbi-content > .count");
  let countNum = parseInt(countEle.textContent);
  countEle.innerHTML = countNum -= 1;

  if (countNum < 2) {
    countEle.style.color = "red";
    countEle.style.fontSize = "25px";
  }

  if (countNum === 0) {
    scare();
  }
}
