const grid = document.getElementById("hexGrid");
const horizontalSpacing = 86.5;
const verticalSpacing = 75;

const pointHorizontal = 87.05;
const pointVertical = 75.7;

const layout = [
  { count: 3, offset: 2 },
  { count: 4, offset: 1.5 },
  { count: 5, offset: 1 },
  { count: 4, offset: 1.5 },
  { count: 3, offset: 2 }
];
const pointLayoutOdd = [
  { count: 3, offset: 2.5 },
  { count: 4, offset: 2 },
  { count: 5, offset: 1.5 },
  { count: 6, offset: 1 },
  { count: 5, offset: 1.5 },
  { count: 4, offset: 2 }
];
const pointLayoutEven = [
  { count: 4, offset: 2 },
  { count: 5, offset: 1.5 },
  { count: 6, offset: 1 },
  { count: 5, offset: 1.5 },
  { count: 4, offset: 2 },
  { count: 3, offset: 2.5 }
];

let count = 1;
layout.forEach((row, rowIndex) => {
  
  for (let i = 0; i < row.count; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "hex-wrapper";

    const hex = document.createElement("div");
    hex.className = "hex";

    const left = (row.offset + i) * horizontalSpacing;
    const top = rowIndex * verticalSpacing;

    wrapper.style.left = `${left}px`;
    wrapper.style.top = `${top}px`;

    wrapper.appendChild(hex);
    grid.appendChild(wrapper);
  }
});

pointLayoutOdd.forEach((row, rowIndex) => {
  for (let i = 0; i < row.count; i++) {
    const point = document.createElement("div");
    point.className = "point";

    const left = (row.offset + i) * pointHorizontal;
    const top = rowIndex * pointVertical;

    point.style.left = `${left}px`;
    point.style.top = `${top}px`;

    grid.appendChild(point);
  }
})
pointLayoutEven.forEach((row, rowIndex) => {
  for (let i = 0; i < row.count; i++) {
    const point = document.createElement("div");
    point.className = "point";

    const left = (row.offset + i) * pointHorizontal;
    const top = rowIndex * pointVertical;

    point.style.left = `${left}px`;
    point.style.top = `${top + 0.32 * pointVertical}px`;

    grid.appendChild(point);
  }
})