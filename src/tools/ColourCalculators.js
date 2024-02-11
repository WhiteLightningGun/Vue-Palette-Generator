function hexToHSL(hex) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length == 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return [h, s, l];
}

export { hexToHSL };

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}
export { hslToHex };

function hsltoRGB(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h <= 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
}

export { hsltoRGB };

function AtmosphericPentad(hexColour) {
  let hexArray = [];
  let hsl = hexToHSL(hexColour);
  hexArray.push(hexColour);

  for (let i = 1; i < 5; i++) {
    let nextHue = (hsl[0] + i * 45) % 360;
    let tempHex = hslToHex(nextHue, hsl[1], hsl[2]);
    hexArray.push(tempHex);
  }
  //console.log(hexArray);
  return hexArray;
}

function InterpolatedDiad(hexColour) {
  let hexArray = [hexColour];
  let hsl = hexToHSL(hexColour);
  let radialStep = (2 * hsl[1]) / 4;

  for (let i = 1; i < 5; i++) {
    let radialMovement = hsl[1] - i * radialStep;
    if (radialMovement < 0) {
      radialMovement = -radialMovement;
      let nextHue = (hsl[0] + 180) % 360;
      let nextHSL = [nextHue, radialMovement, hsl[2]];
      let tempHex = hslToHex(nextHSL[0], nextHSL[1], nextHSL[2]);
      hexArray.push(tempHex);
    } else {
      let nextHSL = [hsl[0], radialMovement, hsl[2]];
      let tempHex = hslToHex(nextHSL[0], nextHSL[1], nextHSL[2]);
      hexArray.push(tempHex);
    }
  }
  return hexArray;
}

function Triad(hexColour) {
  let hexArray = [];
  let hsl = hexToHSL(hexColour);
  hexArray.push(hexColour);

  for (let i = 1; i < 3; i++) {
    let nextHue = (hsl[0] + i * 120) % 360;
    let tempHex = hslToHex(nextHue, hsl[1], hsl[2]);
    hexArray.push(tempHex);
  }

  return hexArray;
}

function SplitComplementary(hexColour) {
  let hexArray = [];
  let hsl = hexToHSL(hexColour);
  hexArray.push(hexColour);

  let nextHue = (hsl[0] + 150) % 360;
  let tempHex = hslToHex(nextHue, hsl[1], hsl[2]);
  hexArray.push(tempHex);

  let nextHue2 = (hsl[0] + 210) % 360;
  let tempHexB = hslToHex(nextHue2, hsl[1], hsl[2]);
  hexArray.push(tempHexB);

  return hexArray;
}

function Monochromatic(hexColour) {
  let hexArray = [];
  let hsl = hexToHSL(hexColour);

  for (let i = 0; i < 5; i++) {
    let nextLuminance = (hsl[2] + i * 10) % 100;
    let tempHex = hslToHex(hsl[0], 100, nextLuminance);
    hexArray.push(tempHex);
  }
  //sort hexArray in order of luminance
  hexArray.sort((a, b) => {
    let aHSL = hexToHSL(a);
    let bHSL = hexToHSL(b);
    return bHSL[2] - aHSL[2];
  });

  return hexArray;
}

function Square(hexColour) {
  let hexArray = [];
  let hsl = hexToHSL(hexColour);
  hexArray.push(hexColour);

  for (let i = 1; i < 4; i++) {
    let nextHue = (hsl[0] + i * 90) % 360;
    let tempHex = hslToHex(nextHue, hsl[1], hsl[2]);
    hexArray.push(tempHex);
  }

  return hexArray;
}

let ColourCalculators = [
  { name: "Atmospheric Pentad", newSwatches: AtmosphericPentad },
  { name: "Complementary Diad", newSwatches: InterpolatedDiad },
  { name: "Triad", newSwatches: Triad },
  { name: "Split Complementary", newSwatches: SplitComplementary },
  { name: "Monochromatic", newSwatches: Monochromatic },
  { name: "Square", newSwatches: Square },
];

export { ColourCalculators };
