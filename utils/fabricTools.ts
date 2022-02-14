import { fabric } from "fabric";

export const makeCircle = (
  left,
  top,
  line1,
  line2,
  line3,
  line4,
  strokeColor = "#666"
) => {
  var c = new fabric.Circle({
    left: left,
    top: top,
    strokeWidth: 5,
    radius: 12,
    fill: "#fff",
    stroke: strokeColor,
  });
  c.hasControls = c.hasBorders = false;

  c.line1 = line1;
  c.line2 = line2;
  c.line3 = line3;
  c.line4 = line4;

  return c;
};

export const makeLine = (coords, fillColor = "red", strokeColor = "red") => {
  return new fabric.Line(coords, {
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: 5,
    selectable: false,
    evented: false,
  });
};
