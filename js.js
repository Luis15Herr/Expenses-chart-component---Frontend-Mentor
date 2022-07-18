let data;
let amounts = [];
let biggerAmount = 0;
let table = document.querySelector("#custom__chart tbody");
let columns = document.querySelectorAll("#custom__chart tbody td");
let lastItem;

fetch("data.json")
  .then((data) => data.json())
  .then((json) => {
    data = json;
    getData();
  });

function getData() {
  data.forEach((item) => {
    if (biggerAmount < item.amount) {
      biggerAmount = item.amount;
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
    <span class="tooltip"> $ ${item.amount} </span>
  </td>
</tr>`;
  });

  columns.forEach((item) => {
    item.addEventListener("click", function () {
      if (lastItem) {
        lastItem.classList.toggle("active");
      }
      item.classList.toggle("active");
      lastItem = item;
    });
  });
}
