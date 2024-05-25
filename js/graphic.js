let demo63 = document.getElementById("demo63");
demo63.innerHTML = 
"<hr>" + "<hr>" + "<hr>" +
"<h2>Js Graphics</h2>" +
"<h3>Graphic Libraries</h3>" +
"<ul>" +
"<li>Plotly.js</li>" +
"<li>Chart.js</li>" +
"<li>Google Chart</li>" +
"<li>HTML Canvas</li>" +
"</ul>";


//HTML Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height);

let xMax = canvas.height;
let yMax = canvas.width;

let slope = 1.2;
let intercept = 70;

const xArray = [20,30,40,50,60,70,80,90,100,110,120,130,140,150];
const yArray = [5,6,7,8,8,9,9,9,10,11,11,11,12,13,14];

//Plot Scatter
ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
     let x = xArray[i]*xMax/150;
     let y = yArray[i]*yMax/15;
     ctx.beginPath();
     ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
     ctx.fill();
}

//Plot Line
ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "blue";
ctx.stroke();

//Line Function
function f(x) {
     return x * slope + intercept;
}

// --------------------------------------------- PLOTLY.JS -----------------------------------------------------

let demo64 = document.getElementById("demo64");
demo64.innerHTML = 
"<br> <br> <br>" +
"<h2>Plotly.js</h2>" +
"It work with cdn < script src='https://cdn.plot.ly/plotly-latest.min.js2></script > <br>" +
"Added with id='myPlot'." +
"<br> <br> ";

const xArray2 = [
     "U. K.",
     "Germany", 
     "Austria", 
     "New Zealand", 
     "Australia", 
     "Switzerland", 
     "Israel", 
     "Netherlands"
];
const yArray2 = [100, 88, 87, 79, 78, 77, 75, 72];

const data = [{
     x:xArray2,
     y:yArray2,
     type:"bar",
     orientation:"v", //we can "h" for horizontal or "v" vertical
     marker: {color:"rgba(0,0,215,0.6)"}
}];

/* This is for Markers - scatter
const data = [{
     x:xArray2,
     y:yArray2,
     mode:"markers",
     type:"scatter",
     orientation:"v", //we can "h" for horizontal or "v" vertical
     marker: {color:"rgba(0,0,215,0.6)"}
}]; 

This is for Line Graphs
const data = [{
     x:xArray2,
     y:yArray2,
     mode:"lines",
     type:"scatter",
     orientation:"v", //we can "h" for horizontal or "v" vertical
     marker: {color:"rgba(0,0,215,0.6)"}
}]; 

*/

//const data = [{labels:xArray2, values:yArray2, type:"pie"}]; //This is for PIE CHART
//const data = [{labels:xArray2, values:yArray2, hole:.5, type:"pie"}]; //This is for Donut Charts

const layout = {
     xaxis: {range: [-1, 8], title: "Countries"},
     yaxis: {range: [0,100], title: "Popularity Score", tickformat: ',0.0%',},
     title:"Most Popular Countries for Veganism in 2022 <br> (Google Trends)"
};

Plotly.newPlot("myPlot", data, layout);

// --------------------------------------------- CHART.JS --------------------------------------------------------
let demo65 = document.getElementById("demo65");
demo65.innerHTML = 
"<br> <br> <br>" +
"<h2>Chart.js</h2>" +
"It work with cdn < script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js ></script > <br>" +
"Add a <b>< canvas> to the HTML page with an unique ID.</b>" +
"<br>" + "<br>" + "<br>";


const xValues = [
     "Auckland",
     "Mumbai",
     "Madrid",
     "Singapore",
     "Sydney",
     "Vancouver",
     "Paris",
     "Miami",
     "Dublin",
     "Monaco",
     "Seoul",
     "Florence",
     "Zurich",
     "Lisbon",
     "New York",
     "Melbourne",
     "Geneva",
     "Tokyo",
     "Shanghai",
     "Vienna",
     "Los Angeles",
     "Hong Kong",
     "London",
     "Berlin",
     "Edinburgh",
];
const yValues = [5, 5, 4, 4, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2, 2, 2, 2, 2, 2, 2, 1.5, 1.3, 1, 0.5, 0, -1, -3];
//const barColors = ["#0088A2", "#0088A2", "#0088A2", "#0088A2"]; if we want to give color one by one to charts.

new Chart("myChart", {
     type: "horizontalBar", //"bar" or "pie" or "doughnut"
     data: {
          labels: xValues,
          datasets: [{
               backgroundColor: "#0088A2",
               data: yValues
          }]
     },
     options: {
          legend: {display: false},
          title: {
               display: true,
               text: "Global Cities Residential Price Forecast 2023 - 2024(Knight Frank Research)"
          }
     }
});


// --------------------------------------------- GOOGLE CHART --------------------------------------------------

let demo66 = document.getElementById("demo66");
demo66.innerHTML = 
"<br> <br>" +
"<h2>Google Chart</h2>" +
"It work with cdn < script src='https://www.gstatic.com/charts/loader.js ></script > <br>" +
"Added with id='myChart2'. <br> <br>";

//Bar Chart - Google
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

     const data2 = google.visualization.arrayToDataTable([
          ['Country', 'Percentage'],
          ['Argentina',276.0],
          ['Lebanon',177.0],
          ['Syria',150.0],
          ['Venezuela',75.9],
          ['Turkey',67.1],
          ['Sudan',63.3],
          ['Zimbabwe',47.6],
          ['Siearra Leone',47.4],
          ['Congo',45.8]
     ])
     
     const options =  {
          title: "Top 9 Inflation rates in the world (source: Trading Economics)"
     };
     
     const chart = new google.visualization.BarChart(document.getElementById('myChart2'));
     chart.draw(data2, options);
}

//Pie Chart - Google
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

     const data3 = google.visualization.arrayToDataTable([
          ['Food', 'milligrams / 100g'],
          ['Tofu', 35],
          ['Flavoured tofu', 404],
          ['Meat-free burgers', 410],
          ['Meat-free sausages', 506],
          ['Falafel', 519],
          ['Meat-free bacon', 818],
          ['Other meat-free products', 393]
     ])

     const options = {
          title: "Average sodium levels of meat-free products",
          is3D: true //This is for 3D
     }

     const chart = new google.visualization.PieChart(document.getElementById('myChart3'));
     chart.draw(data3, options);
     //If we write '.ScatterChart' or '.LineChart' instead of '.PieChart', then we change the graph
}


let demo67 = document.getElementById("demo67");
demo67.innerHTML = 
"<br> <br>" +
"<h2>D3.js</h2>" +
"It work with cdn < script src='//d3js.org/d3.v3.min.js ></script > <br>" +
"Added with < svg id='myChart4' style='width:500px;height:500px'></ svg> <br> <br>";


//d3.select("body").append("p").text("hi");
const xSize = 250;
const ySize = 10;
const margin = 40;
const xMax2 = xSize - margin*2;
const yMax2 = ySize - margin*2;

const numPoints = 100;
const data4 = [];
for (let i = 0; i < numPoints; i++) {
  data.push([Math.random() * xMax, Math.random() * yMax]);
}

const svg = d3.select("#myChart4")
     .append("svg")
     .append("g")
     .attr("transform", "translate(" + margin + "," + margin + ")");

const x2 = d3.scaleLinear()
     .domain([0, 500])
     .range([0, xMax]);
   
   svg.append("g")
     .attr("transform", "translate(0," + yMax + ")")
     .call(d3.axisBottom(x2));

const y2 = d3.scaleLinear()
     .domain([0, 500])
     .range([yMax, 0]);

svg.append("g")
     .call(d3.axisLeft(y2));

     svg.append('g')
     .selectAll("dot")
     .data(data).enter()
     .append("circle")
     .attr("cx", function (d) { return d[0] } )
     .attr("cy", function (d) { return d[1] } )
     .attr("r", 4)
     .style("fill", "Purple");