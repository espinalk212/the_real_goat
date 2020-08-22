import * as d3 from 'd3';
import Chart from './chart';
import LebronStats from '../playerStats/lebron_season_stats.json'

class Main {
  constructor() {
    this.chart = new Chart(LebronStats.data)
  }

  season(yr) { 
    return dataset.data.filter(game => {
      return game.season === yr
    })
  }

  seasonAvg(season, category) { 
    season.map(game => {
      return game.category === category
    })
    // .reduce(function (a + b) { 
    //   return a + b }) / season.length

  }
  
  

}

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
