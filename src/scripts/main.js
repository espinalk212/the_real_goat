import * as d3 from 'd3';
import Chart from './chart';
import LebronStats from '../playerStats/lebron_season_stats.json';
import MichaelStats from '../playerStats/michael_season_stats.json';

class Main {
  constructor() {
    this.chart = new Chart(this.seasonAvg(LebronStats.data), this.seasonAvg(MichaelStats.data))
    this.seasonAvg = this.seasonAvg.bind(this);
  }

  // season(yr) { 
  //   return dataset.data.filter(game => {
  //     return game.season === yr
  //   })
  // }

  // seasonAvg(arrayObj) {
  //   let totalSum = [];
  //   Object.values(arrayObj).map(season => {
  //     
  //     let sum = 0
  //     const seasons = Object.values(season).map(game => { 
  //       if (game.ast !== null) {
  //       return sum += game.ast
  //       }
  //     })
   
  //     return totalSum.push(Math.floor((sum/ seasons.length)));
  //   })
  //   return totalSum
  // }
  seasonAvg(arrayObj) {
    let sum = 0
    Object.values(arrayObj).map((season, idx) => {
      // debugger;
      if (season[idx].pts !== null) {
        return sum += season[idx].pts
      }
      const avg = (Math.floor(sum / season.length));
      return avg
    })
  }


  
  
  

}
  // document.addEventListener(onmouseover, () => {})

export default Main;

// to return avg of one season
// dataset.season1.map(game => { return game.pts}).reduce(function (a, b) {
// return a + b;
// }) / dataset.season1.length

// to key in to season .. dataset.data.`season${[i]}`



// this will allow to create a dropdown that allows the user to select based on category(pts, ast etc)

//next step is implementing Michael Jordan's stats in the bar chart


// create middle component 
// pass click handlers and data to be filtered



