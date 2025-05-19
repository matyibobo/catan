const grid = document.getElementById("hexGrid");
const horizontalSpacing = 86;
const verticalSpacing = 74;

const layout = [
  { count: 3, offset: 2 },
  { count: 4, offset: 1.5 },
  { count: 5, offset: 1 },
  { count: 4, offset: 1.5 },
  { count: 3, offset: 2 }
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