import Chart from './chart';
import LebronStats from '../playerStats/lebron_season_stats.json';
import MichaelStats from '../playerStats/michael_season_stats.json';

class Main {
  constructor(dropdownOption) {
    this.chartHeightMax = 0
    this.chart = new Chart(this.seasonAvg(LebronStats.data, dropdownOption), this.seasonAvg(MichaelStats.data, dropdownOption), this.chartHeightMax)
    
    this.seasonAvg = this.seasonAvg.bind(this);
  }

  // season(yr) { 
  //   return dataset.data.filter(game => {
  //     return game.season === yr
  //   })
  // }


  seasonAvg(arrayObj, category) {
    let totalSum = [];
    Object.values(arrayObj).map(season => {
      let sum = 0
      const seasons = Object.values(season).map(game => { 
        if (game[category] !== null) {
          return sum += game[category]
        }
      })
      if (this.chartHeightMax < Math.floor((sum / seasons.length))) {
        this.chartHeightMax = Math.floor((sum / seasons.length))
      }
      return totalSum.push(Math.floor((sum/ seasons.length)));
    })
    return totalSum
  }





  // seasonAvg(arrayObj) {
  //   let sum = 0
  //   let seasons = Object.values(arrayObj).map((season, idx) => {
  //     debugger;
  //     if (season[idx].pts !== null) {
  //       return sum += season[idx].pts
  //     }
  //   })
  //   const avg = (Math.floor(sum / seasons.length));
  //   return avg
  // }


  
  
  

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



