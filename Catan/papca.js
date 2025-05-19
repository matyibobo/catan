const grid = document.getElementById("hexGrid");
const horizontalSpacing = 86.5;
const verticalSpacing = 75;

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
    const cx = 45, cy = 52;
    const radius = 50;

    for (let p = 0; p < 6; p++) {
      const angle = (Math.PI / 3) * p - Math.PI / 2;
      const px = cx + radius * Math.cos(angle);
      const py = cy + radius * Math.sin(angle);

      const point = document.createElement("div");
      point.className = "point";
      point.style.left = `${px}px`;
      point.style.top = `${py}px`;

      // Kattintható pont esemény
      point.addEventListener("click", () => {
        point.classList.toggle("clicked");
        console.log(`Kattintottál egy pontra a(z) ${hex.textContent}. hatszögön (csúcs index: ${p})`);
      });

      wrapper.appendChild(point);
    }


    grid.appendChild(wrapper);
  }
});