/* const data = {
  labels: ["1", "1", "1", "1", "1", "1", "1"],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["rgb(236, 119, 95)"],
      borderWidth: 0,
      borderRadius: 15,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      display: false,
      legend: {
        display: false, //This will do the task
      },
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
 */

let arr = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

let test = [];
let bigger = 0;
let table = document.querySelector("#custom__chart tbody");

arr.forEach((item) => {
  if (bigger < item.amount) {
    bigger = item.amount;
  }
  test.push(item.amount);
});

let sizes = [];
test.forEach((item) => {
  sizes.push((item * 100) / bigger / 100);
});

arr.forEach((item, index) => {
  table.innerHTML += `<tr>
  <th scope="row">${item.day}</th>
  <td style="--start: 0; --size: ${sizes[index]}">
    <span class="tooltip"> $ ${item.amount} </span>
  </td>
</tr>`;
});

let els = document.querySelectorAll("#custom__chart tbody td");
let lastItem;

els.forEach((item) => {
  item.addEventListener("click", function () {
    if (lastItem) {
      lastItem.classList.toggle("active");
    }
    item.classList.toggle("active");
    lastItem = item;
  });
});
