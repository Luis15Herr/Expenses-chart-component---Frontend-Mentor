let data;
let amounts = [];
let biggerAmount = 0;
let biggerIndex = 0;
let table = document.querySelector("#custom__chart tbody");

fetch("data.json")
  .then((data) => data.json())
  .then((json) => {
    data = json;
    getData();
  });

function getData() {
  data.forEach((item, index) => {
    if (biggerAmount < item.amount) {
      biggerAmount = item.amount;
      biggerIndex = index;
    }
    amounts.push(item.amount);
  });
  let sizeOfColumns = [];
  amounts.forEach((item) => {
    sizeOfColumns.push((item * 100) / biggerAmount / 100);
  });

  data.forEach((item, index) => {
    table.innerHTML += `<tr>
  <th scope="row">${item.day}</th>
  <td style="--start: 0; --size: ${sizeOfColumns[index]}">
    <span class="tooltip"> $${item.amount} </span>
  </td>
</tr>`;
  });

  let columns = document.querySelectorAll("#custom__chart tbody td");
  let lastItem;

  columns.forEach((item, index) => {
    if (index === biggerIndex) {
      item.classList.add("biggerColumn");
    }
    item.addEventListener("click", function () {
      if (lastItem) {
        lastItem.classList.toggle("active");
      }
      item.classList.toggle("active");
      lastItem = item;
    });
  });
}
