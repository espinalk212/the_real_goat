import "./styles/index.scss";
import * as d3 from 'd3';
import Chart from './scripts/chart';
import LebronStats from './playerStats/lebron_season_stats.json';
import Main from './scripts/main';



document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  const content = new Main()

})


// to key in to season .. dataset.data.game.season

// iterate over data, key into game.season && then based on the season, average out all the stats

// const season = yr => { dataset.data.filter(game => {
// return game.season === yr
//})}
// seasonAvg = category => { season.map(game => {
// return game.category
//})
// return (seasonAvg / seasonAvg.length) 
//}


// this will allow to create a dropdown that allows the user to select based on category(pts, ast etc)

//next step is implementing Michael Jordan's stats in the bar chart


// create middle component 
// pass click handlers and data to be filtered 
