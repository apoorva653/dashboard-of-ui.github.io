// Activity Chart (Line)
const ctx = document.getElementById('activityChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Activity',
      data: [12, 19, 8, 15, 20, 14, 17],
      borderColor: '#3a7bd5',
      backgroundColor: 'rgba(58,123,213,0.1)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#3a7bd5'
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
      x: { grid: { display: false } }
    }
  }
});

// Circular Progress (Definition)
function drawCircle(percent) {
  const circle = document.getElementById('progressCircle');
  const size = 120, stroke = 10, radius = (size - stroke) / 2, circ = 2 * Math.PI * radius;
  circle.innerHTML = `
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${radius}" stroke="#e0eafc" stroke-width="${stroke}" fill="none"/>
      <circle cx="${size/2}" cy="${size/2}" r="${radius}" stroke="#3a7bd5" stroke-width="${stroke}" fill="none"
        stroke-dasharray="${circ}" stroke-dashoffset="${circ - circ * percent / 100}" stroke-linecap="round"/>
    </svg>
    <span id="progressValue">${percent}%</span>
  `;
}
drawCircle(86.75);