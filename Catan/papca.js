const grid = document.getElementById("hexGrid");
const horizontalSpacing = 86.5;
const verticalSpacing = 75;

const pointHorizontal = 87.05;
const pointVertical = 75.7;

const nextBtn = document.getElementById("next")

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


class Point {
  constructor(point) {
    this.point = point
    this.color = "none"
  }
}

players = []
for (let i = 0; i < 3; i++) {
  players.push({
    id: i,
    vp: 0,
    wood: 0,
    brick: 0,
    wool: 0,
    wheat: 0,
    stone: 0,
    settlement: 5,
    city: 4,
    road: 15,
  })
}

let points = []
Array.from(document.getElementsByClassName("point")).forEach((e) => {
  points.push(new Point(e))
})

let r = [...Array(4).fill("wood"), ...Array(4).fill("wheat"), ...Array(4).fill("wool"), ...Array(3).fill("stone"), ...Array(3).fill("brick"), "desert"]
let n = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

shuffle(r)
shuffle(n)

let resources = document.getElementsByClassName("hex")
Array.from(resources).forEach((e) => {
  e.classList.add(r.pop())
  if (!e.classList.contains("desert")) e.innerText = Math.floor(Math.random() * 12) + 1
})

let game = true
let turn = 0

function playTurn() {
  nextBtn.removeEventListener("click", playTurn)

  let currentPlayer = players[turn % 3]

  let roll = () => { return Math.floor(Math.random() * 6) + 1 }
  showRoll(roll(), roll())
  console.log(roll)
}

function showRoll(d1, d2) {
  let dice = document.createElement("div")
  dice.innerText = `${d1} | ${d2}`
  dice.classList.add("dice")
  document.body.appendChild(dice)

  setTimeout(() => {
    dice.remove()
  }, 3000)
}

nextBtn.addEventListener("click", playTurn)
