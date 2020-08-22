import * as d3 from 'd3';
import { svg } from 'd3';


class Chart {
  constructor(dataset) {
    this.width = 1300;
    this.height = 600;
    this.margin = { top: 20, bottom: 20, right: 20, left: 35 }
    this.svg = 
    d3.select('#d3-container')
    .append('svg')
    .attr('height', this.height - this.margin.top - this.margin.bottom)
    .attr('width', this.width - this.margin.left - this.margin.right)
    .attr('viewBox', [0, 0, this.width, this.height ])
    

    this.x = d3.scaleBand()
      .domain(d3.range(Object.keys(dataset).length))
      .range([this.margin.left, this.width - this.margin.right])
      .padding(0.1)

    this.y = d3.scaleLinear()
      .domain([0, 70])
      .range([this.height - this.margin.bottom, this.margin.top])

      debugger;
    this.svg
      .append('g')
      .attr('fill', 'orange')
      .selectAll('rect')
      .data(dataset)
      .join('rect')
        .attr('x', (d, i) => this.x(i))
      .attr('y', (d, i) => this.y(d[`season${i}`][0].pts))
        .attr('height', (d, i) => this.y(0) - this.y(Object.keys(d)[i][0].pts))
        .attr('width', this.x.bandwidth())
        .attr('class', 'rect')
        
    this.xAxis = (g) => {
      g.attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(this.x).tickFormat(i => Object.keys(dataset)[i]))
      .attr('font-size','12px')
    }

    this.yAxis = (g) => {
      g.attr("transform", `translate(${this.margin.left}, 0)`)
      .call(d3.axisLeft(this.y).ticks(null, dataset.format))
      .attr("font-size", "12px");
    };

    this.svg.append('g').call(this.xAxis)
    this.svg.append('g').call(this.yAxis)
    this.svg.node()
  }
  
  
  







    
  
}


export default Chart;

