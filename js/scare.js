function scare() {
  document.documentElement.requestFullscreen();

  const mainEle = document.querySelector("#main");
  mainEle.style.display = "none";

  setTimeout(() => {
    const horrorEle = document.querySelector("#horror");
    horrorEle.style.display = "block";

    setTimeout(() => {
      const horrorH1Ele = document.querySelector("#horror > h1");
      horrorH1Ele.style.display = "none";

      const horrorImgEle = document.querySelector("#horror > #horror-image");
      horrorImgEle.style.display = "block";
    }, 1500);
  }, 1500);
}
