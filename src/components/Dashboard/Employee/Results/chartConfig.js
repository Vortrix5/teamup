export const data = {
  labels: [
    'Extraversion',
    'Agreeableness',
    'Openness',
    'Conscientiousness',
    'Neuroticism',
  ],
  datasets: [
    {
      label: 'Trait Scores',
      backgroundColor: 'rgba(47, 171, 252, 0.2)',
      borderColor: 'rgba(47, 171, 252, 0.8)',
      pointBackgroundColor: 'rgba(47, 171, 252, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(47, 171, 252, 1)',
      data: [] // Initialize as empty, will be filled with scores
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  scale: {
    ticks: {
      beginAtZero: true,
      max: 60,
      stepSize: 5,
    },
    pointLabels: {
      fontSize: 14,
    },
  }
}
