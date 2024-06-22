// U5223-1368

const data = [100, 420, 230, 850, 560, 925];

const svgWidth = 500;
const height = 20;
const margin = 1;
const svgHeight = data.length * (height + margin);

const svg = d3.select("#chart")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([50, svgWidth - 50]);