import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { extractCSVData } from "./d3DataRetrieving.js";
import {drawPlot} from "./bars.js";
import {planes} from "./planes.js";
import {lines} from "./lines.js";



let y = extractCSVData("/datafiles/GDP_Quarterly.csv");
let count = 0;
let data = [];
const width = 640;
const height = 400;



//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//reproducibility, reusable
//https://support.microsoft.com/en-us/office/change-the-display-of-a-3-d-chart-60c13909-d2a1-4e06-8b8c-bccba7868c9b
//small filter

//august: at the end of each week, point form, what I did this week. and 
//a short point for what I will do next week. Kim email. 
//bar chart 3d with a slider

// // // Declare the x (horizontal position) scale.
// const x = d3.scaleUtc()
//     .domain([new Date("2023-01-01"), new Date("2024-01-01")])
//     .range([marginLeft, width - marginRight]);

// // Declare the y (vertical position) scale.
// const y = d3.scaleLinear()
//     .domain([0, 100])
//     .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg1 = d3.create("a-scene")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "test")
// .call(d3.axisBottom(x));

planes(svg1);
lines(svg1);

// gui-slider.append("a-gui-slider")
//                  .attr("width", "2.5")
//                  .attr("height", "0.75")
//                  .attr("id", "slider")
//                  .attr("percent", "0.29")
//                  .attr("margin", "0 0 0.05 0")


//         <a-gui-slider 	
// 	width="2.5" height="0.75"
// 	onclick="slideActionFunction"
// 	percent="0.29"
// 	margin="0 0 0.05 0"
// >
// </a-gui-slider>



// // Add the x-axis.

// svg1.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x));


// svg1.append("g")
//     .attr("transform", `translate(${marginLeft},0)`)
//     .call(d3.axisLeft(y));

// // Add the y-axis.
// const gx = svg1.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x));

// // Append the SVG element.

//making a box using A-frame but appeding on d3






container.append(svg1.node());


y.then((x) => drawPlot(x, svg1))
console.log(count)
