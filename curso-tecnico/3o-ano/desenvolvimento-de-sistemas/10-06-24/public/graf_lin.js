let ctx = document.getElementById('graf').getContext('2d')

// Configuração do gráfico 

Chart.defaults.backgroundColor = 'green'
Chart.defaults.borderColor = 'white'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 24
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'

// https://www.chartjs.org/docs/latest/general/colors.html
// https://www.chartjs.org/docs/latest/charts/line.html

fetch('http://localhost:3000/dados')
.then(response => response.json())
.then(dados => {
    console.log(dados)
    const data = {
        labels: dados.meses,  // valores do back end
        datasets: [{
            label: 'Faturamento',  
            data: dados.dados, // valores do back end
            fill: true,
            borderColor: 'white',
            borderWidth: 8,     // largura da linha
            pointRadius: 0,     // tamanho do ponto
            pointBackgroundColor: 'blue', // Cor de fundo dos pontos
            tension: 0.3,
            color: '#f1f1f1',
        }]
    };
    
    // Configuração do gráfico
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true // Oculta a legenda
                },
                title: {
                    display: true,
                    color: 'f1f1f1',
                    text: 'Gráfico de Vendas' // Título do gráfico
                },
                datalabels: {
                    display: true,
                    align: 'top',
                    color: 'f1f1f1',
                    font: {
                        weight: 'bold'
                    }
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Mês'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Valor'
                    }
                }
            }
        },
        plugins: [ChartDataLabels]  // plugin para os rótulos dos dados
    }
// Dados do gráfico
const grafic = new Chart(ctx, config)
})