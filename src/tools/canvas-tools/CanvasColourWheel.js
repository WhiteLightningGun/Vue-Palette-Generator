import { hsltoRGB, hexToHSL } from "../ColourCalculators.js";

function HSLColourWheel(canvasCtx, hexColour) {
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

    let r = PolarCoordsR(x, y) * 0.4; // *0.4 normalises r to 0-100
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

export { HSLColourWheel };

function DrawPointsAndLines(canvasCtx, hexColourArray) {
  const hslArray = hexColourArray.map(hexToHSL);
  const drawLight = hslArray[0][2] > 50 ? 0 : 100;

  for (let i = 0; i < hslArray.length - 1; i++) {
    const r = hslArray[i][1] * 2.5; // normalises r to a circle with radius 250 pixels
    const theta = (hslArray[i][0] - 180) * (Math.PI / 180);
    const start = PolarCoordsToCartesian(r, theta);
    const end = PolarCoordsToCartesian(
      hslArray[i + 1][1] * 2.5,
      (hslArray[i + 1][0] - 180) * (Math.PI / 180)
    );
    drawLineAndCircle(canvasCtx, start, end, hexColourArray[i], drawLight);
  }
  const lastPoint = PolarCoordsToCartesian(
    hslArray[hslArray.length - 1][1] * 2.5,
    (hslArray[hslArray.length - 1][0] - 180) * (Math.PI / 180)
  );
  drawCircle(
    canvasCtx,
    lastPoint[0] + 250,
    250 - lastPoint[1],
    6,
    hexColourArray[hslArray.length - 1],
    drawLight
  );
}

function drawLineAndCircle(ctx, start, end, color, drawLight) {
  ctx.strokeStyle = drawLight ? "#FFFFFF" : "#003300";
  ctx.beginPath();
  ctx.moveTo(start[0] + 250, 250 - start[1]);
  ctx.lineTo(end[0] + 250, 250 - end[1]);
  ctx.stroke();
  drawCircle(ctx, start[0] + 250, 250 - start[1], 6, color, drawLight);
}

export { DrawPointsAndLines };

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

function PolarCoordsR(x, y) {
  const r = Math.sqrt(x * x + y * y);
  return r;
}
/**
 *
 * @param {number} x - integer coordinate
 * @param {number} y - integer coordinate
 * @returns {number} angle in degrees
 */
function PolarCoordsTheta(x, y) {
  const theta = 180 + (Math.atan2(y, x) * 180) / Math.PI;
  return theta;
}

function PolarCoordsToCartesian(r, theta) {
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return [x, y];
}

function drawCircle(ctx, x, y, radius, color, drawLight = false) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = drawLight ? "#FFFFFF" : "#003300";
  ctx.stroke();
}
