/*
 * MIT License
 *
 * Copyright (c) 2024 Mohamed Amine Zouaoui
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
