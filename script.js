const items = [
  {
    name: "Espada",
    desc: "Una espada básica de acero.",
    img: "https://cdn-icons-png.flaticon.com/512/108/108693.png",
    count: 1
  },
  {
    name: "Poción",
    desc: "Restaura 50 HP.",
    img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    count: 5
  },
  {
    name: "Llave",
    desc: "Abre una puerta misteriosa.",
    img: "https://cdn-icons-png.flaticon.com/512/565/565547.png",
    count: 2
  }
];

const inventory = document.getElementById("inventory");
const info = document.getElementById("info");

function renderInventory() {
  inventory.innerHTML = "";

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      <img src="${item.img}">
      <div class="count">x${item.count}</div>
    `;

    div.addEventListener("click", () => {
      showInfo(item);
    });

    inventory.appendChild(div);
  });
}

function showInfo(item) {
  info.innerHTML = `
    <h2>${item.name}</h2>
    <p>${item.desc}</p>
  `;
}

renderInventory();
