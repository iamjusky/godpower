window.onload = () => {
  const screenWidth = document.body.offsetWidth;
  const frameWidth = document.getElementById("frame").offsetWidth;
  const pStart = (screenWidth + frameWidth) / 2;
  const pEnd = (screenWidth - frameWidth) / 2;
  const fStart = 0;

  slideFlipBook("horizontally", "row", pStart, pEnd, fStart);
};
