const data = {
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
      y: {
        beginAtZero: false,
        display: false,
      },
    },
    datasets: {},
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
