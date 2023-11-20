function labelTabla() {
    let labels = [];
    let contador = 1;
    while (contador <= 5) {
        labels.push("Prueba: " + contador);
        contador++;
    }
    return labels;
}


let ctx = document.getElementById("lineChart").getContext("2d");
let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labelTabla(),
        datasets: [
            {
                label: "Computadora #1",
                data: [520, 1035, 974, 636, 1428],
                backgroundColor: "rgba(153,205,1,0.6)",
            },
            {
                label: "Computadora #2",
                data: [435, 885, 873, 769, 1622],
                backgroundColor: "rgba(203,50,52,0.6)",
            },
            {
                label: "Computadora #3",
                data: [1191, 2139, 2067, 1428, 2765],
                backgroundColor: "rgba(10,10,220,0.6)",
            },
        ],
    },
});


let ctxWoman = document.getElementById("lineChartWoman").getContext("2d");
let myChartWoman = new Chart(ctxWoman, {
    type: "line",
    data: {
        labels: labelTabla(),
        datasets: [
            {
                label: "Computadora #1",
                data: [5867, 13671, 12183, 7980, 1428],
                backgroundColor: "rgba(153,205,1,0.6)",
            },
            {
                label: "Computadora #2",
                data: [5234, 12378, 11105, 8132, 16358],
                backgroundColor: "rgba(203,50,52,0.6)",
            },
            {
                label: "Computadora #3",
                data: [5125, 0, 10463, 7390, 0],
                backgroundColor: "rgba(10,10,220,0.6)",
            },
        ],
    },
});

