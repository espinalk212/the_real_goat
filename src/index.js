import "./styles/index.scss";
import * as d3 from 'd3';
import Chart from './scripts/chart';
import LebronStats from './playerStats/lebron_season_stats.json'



document.addEventListener("DOMContentLoaded", () => {
  const svgChart = document.getElementById("#d3-container")
  const chart = new Chart(svgChart, LebronStats)
  chart
})
  