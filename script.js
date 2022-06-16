function playNow() {
  let firstRandomNum = Math.floor(Math.random() * 6 + 1);
  let scondRandomNum = Math.floor(Math.random() * 6 + 1);
  const firstDiceImg = "images/dice" + firstRandomNum + ".png";
  const scondDiceImg = "images/dice" + scondRandomNum + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", firstDiceImg);
  document.querySelectorAll("img")[1].setAttribute("src", scondDiceImg);
  if (firstRandomNum > scondRandomNum) {
    document.querySelector("h1").innerHTML = "player 1 is the winner";
  } else if (firstRandomNum < scondRandomNum) {
    document.querySelector("h1").innerHTML = "player 2 is the winner";
  } else {
    document.querySelector("h1").innerHTML = "draw";
  }
}
