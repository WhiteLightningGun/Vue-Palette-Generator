import { hsltoRGB, hexToHSL } from "../ColourCalculators.js";

function DrawColourWheel(canvasCtx, hexColour) {
  const lightness = hexToHSL(hexColour)[2];
  const ctx = canvasCtx;
  const width = 500;
  const halfWidth = width / 2;

  let imageData = ctx.createImageData(width, width);
  let data = imageData.data;
  let pixelIndex = 0;

  for (let i = 0; i < data.length; i += 4) {
    // i cannot be used directly as x and y coordinates
    let x = (pixelIndex % width) - halfWidth;
    let y = halfWidth - Math.floor(pixelIndex / width);

    let r = PolarCoordsR(x, y) * 0.4; //normalises r to 0-100
    let theta = PolarCoordsTheta(x, y);

    // Modify pixel data
    if (r <= 100) {
      let res = hsltoRGB(theta, r, lightness);
      data[i] = res[0]; // Red
      data[i + 1] = res[1]; // Green
      data[i + 2] = res[2]; // Blue
      data[i + 3] = 255; // Alpha
    }
    pixelIndex++;
  }

  ctx.putImageData(imageData, 0, 0);
}

export default DrawColourWheel;

function PolarCoordsR(x, y) {
  const r = Math.sqrt(x * x + y * y);
  return r;
}
function PolarCoordsTheta(x, y) {
  const theta = 180 + (Math.atan2(y, x) * 180) / Math.PI;
  //convert to degrees
  return theta;
}

// You need a function that can find the x,y coordinates of a point on the circle given a certain HSL argument
