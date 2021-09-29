// align:  alignment of flipbook (vertically / horizontally)
// direction:  movement direction of mouse (column / row)
// pStart: position of mouse by the axic on screen that will start to slide flipbook
// pEnd: position of mouse by the axic on screen that will finish to slide flipbook
// ----pStart > pEnd => mouse from right/bottom to left/top
// ----pStart < pEnd => mouse from left/top to right/bottom
// fStart: the starting frame of the flipbook
const slideFlipBook = (
  align = "vertically",
  direction = "column",
  pStart,
  pEnd,
  fStart
) => {
  const startSlide = (e) => {
    //the ideal is like a flipbook
    //We use mouse to slide the flipbook
    const flipbook = document.getElementById("flipbook");
    const frame = document.getElementById("frame");

    if (!flipbook && !frame) {
      console.log("Not found flipbook or frame");
      return;
    }
    let frameSizeByAxis;
    let flipbookSizeByAxis;

    if ((align = "horizontally")) {
      frameSizeByAxis = frame.offsetWidth;
      flipbookSizeByAxis = flipbook.offsetWidth;

      //default = vertically
    } else {
      frameSizeByAxis = frame.offsetHeight;
      flipbookSizeByAxis = flipbook.offsetHeight;
    }
    if (e.type == "mousemove") {
      //p is position of mouse on screen by specified direction
      if (direction == "row") {
        p = e.clientX;
      }
      //default = column
      else {
        p = e.clientY;
      }
    } else {
      if (direction == "row") {
        p = e.touches[0].clientX;
      }
      //default = column
      else {
        p = e.touches[0].clientY;
      }
    }

    // flipbook includes multiple images(frames) aligned consecutive vertically/ horizontally
    // so number of frames (fMax) = (SizeByAxis of flipbook) / (SizeByAxis of a frame)
    const fMax = Math.floor(flipbookSizeByAxis / frameSizeByAxis);
    const fMin = fStart <= fMax ? fStart : 0;
    let f;

    if (isInRange(p, pStart, pEnd)) {
      frame.style.backgroundColor = "red";

      // this is a formula to calculate which frame of flipbookk to display ;
      // it is based on ratio of
      // p : pStart -> pEnd
      // f : fMax -> fMin
      f =
        fMin +
        Math.floor(
          ((fMax - fMin) * Math.abs(pStart - p)) / Math.abs(pStart - pEnd)
        ) -
        1;
    } else {
      frame.style.backgroundColor = "white";

      if (pStart > pEnd) {
        if (p > pStart) {
          f = fMin;
        }
        if (p < pEnd) {
          f = fMax - 1;
        }
      }
    }
    if ((align = "horizontally")) {
      flipbook.style.left = `-${f * frameSizeByAxis}px`;
      // flipbook.style.left = `-${f * frameSizeByAxis}px`;
      // alert(frameSizeByAxis);

      //default = vertically
    } else {
      flipbook.style.top = `-${f * frameSizeByAxis}px`;
    }
  };

  window.onmousemove = (event) => startSlide(event);
  window.ontouchmove = (event) => startSlide(event);
};
const isInRange = (x, start, end) => (x - start) * (x - end) <= 0;
