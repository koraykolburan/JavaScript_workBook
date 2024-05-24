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

// --------------------------------------------- PLOTLY.JS --------------------------------------------------------

let demo64 = document.getElementById("demo64");
demo64.innerHTML = 
"<h3>Plotly.js</h3>" +
"It work with cdn < script src='https://cdn.plot.ly/plotly-latest.min.js2></script > <br>";

const xArray2 = ["U. K.", "Germany", "Austria", "New Zealand", "Australia", "Switzerland", "Israel", "Netherlands"];
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
     yaxis: {range: [60, 110], title: "Popularity Score"},
     title:"Most Popular Countries for Veganism in 2022 <br> (Google Trends)"
};

Plotly.newPlot("myPlot", data, layout);

// --------------------------------------------- CHART.JS --------------------------------------------------------
let demo65 = document.getElementById("demo65");
demo65.innerHTML = 
"<h3>Plotly.js</h3>" +
"It work with cdn < script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js ></script > <br>" +
"Add a <b>< canvas> with unique ID.</b>";


const xValues = ["U. K.", "Germany", "Austria", "New Zealand", "Australia", "Switzerland", "Israel", "Netherlands"];
const yValues = [100, 88, 87, 79, 78, 77, 75, 72];
const barColors = ["red", "purple", "green", "yellow", "brown", "orange", "grey", "pink"];

new Chart("myChart", {
     type: "horizontalBar", //"bar" or "pie" or "doughnut"
     data: {
          labels: xValues,
          datasets: [{
               backgroundColor: barColors,
               data: yValues
          }]
     },
     options: {
          legend: {display: false},
          title: {
               display: true,
               text: "Most Popular Countries for Veganism in 2022(Google Trends)"
          }
     }
});


// --------------------------------------------- GOOGLE CHART --------------------------------------------------------

let demo66 = document.getElementById("demo66");
demo66.innerHTML = 
"<h3>Google Chart</h3>" +
"It work with cdn < script src='https://www.gstatic.com/charts/loader.js ></script > <br>" +
"";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

     const data2 = google.visualization.arrayToDataTable([
          ['Contry', 'Mhl'],
          ['Italy',55],
          ['France',49],
          ['Spain',44],
          ['USA',24],
          ['Argentina',15]
     ])
     
     const options =  {
          title: "Most Popular Countries for Veganism in 2022(Google Trends)"
     };
     
     const chart = new google.visualization.BarChart(document.getElementById('myChart2'));
     chart.draw(data, options);

}

