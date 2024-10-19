const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Perros', 'Gatos'],
        datasets: [{
            data: [70, 30], // 70% perros, 30% gatos
            backgroundColor: ['#FF6384', '#36A2EB']
        }]
    }
});

const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Perros', 'Gatos'],
        datasets: [{
            label: 'Cantidad',
            data: [50, 30], // Cantidad de perros y gatos
            backgroundColor: ['#FF6384', '#36A2EB']
        }]
    }
});

const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
            label: 'Mascotas adoptadas',
            data: [15, 25, 20, 30], // Ejemplo de adopciones de perros y gatos
            borderColor: '#FF6384',
            fill: false
        }]
    }
});