var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our scatter plot, and shift the latter by left and top margins.
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
//d3.csv("assets/data/data.csv").then(function(journalismData) {
d3.csv("assets/data/data.csv").then(function(journalismData) {
  //console.log(journalismData)
  // Step 1: Parse Data/Cast as numbers
    // ==============================
  journalismData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
    // console.log(data.healthcare);
  });
  // Step 2: Create scale functions
  // ==============================
  var xLinearScale = d3.scaleLinear().range([0, width]);
  var yLinearScale = d3.scaleLinear().range([height, 0]);
  
  // Step 3: Create axis functions
  // ==============================
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Scale the domain
  var xMin;
  var xMax;
  var yMin;
  var yMax;

  xMin = d3.min(journalismData, function(data) {
    return +data.poverty * 1;
  });

  xMax = d3.max(journalismData, function(data) {
    return +data.poverty * 1;
  });

  yMin = d3.min(journalismData, function(data) {
    return +data.healthcare * 1;
  });

  yMax = d3.max(journalismData, function(data) {
    return +data.healthcare *1;
  });

  xLinearScale.domain([xMin, xMax]);
  yLinearScale.domain([yMin, yMax]);

  // Step 4: Append Axes to the chart
  // ==============================
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

  // Step 5: Create Circles
  // ==============================
  var circlesGroup = chartGroup.selectAll("circle")
    .data(journalismData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", "15")
    .attr("fill", "lightskyblue")
    .attr("opacity", ".5");

  // Add a label 
  chartGroup.append("text")
  .style("text-anchor", "middle")
  .style("font-size", "12px")
  .selectAll("tspan")
  .data(journalismData)
  .enter()
  .append("tspan")
      .attr("x", function(data) {
          return xLinearScale(data.poverty - 0);
      })
      .attr("y", function(data) {
          return yLinearScale(data.healthcare - 0.2);
      })
      .text(function(data) {
          return data.abbr
      });

  // // Step 6: Initialize tool tip
  // // ==============================
  // // Initialize tooltip 
  // var toolTip = d3
  //   .tip()
  //   .attr("class", "tooltip")
  //   .offset([80, -60])
  //   .html(function(data) {
  //       var poverty_data = +data.poverty;
  //       var healthcare_data = +data.healthcare;
  //       return (
  //           '  Poverty: ' + poverty_data + '%  Healtcare: ' + healthcare_data +'%'
  //       );
  //   });
  // Step 7: Create tooltip in the chart
  // ==============================
  //chartGroup.call(toolTip);

  // Step 8: Create event listeners to display and hide the tooltip
  // ==============================
  circlesGroup.on("click", function(data) {
    toolTip.show(data, this);
    })
      // onmouseout event
    .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });
      // Step 7: Create tooltip in the chart
    // ==============================
    //chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

// Create axes labels
// Append x-axis labels
chartGroup
    .append("text")
    .attr(
        "transform",
        "translate(" + width / 2 + " ," + (height + margin.top + 30) + ")"
    )
    .attr("class", "axis-text")
    .text("In Poverty (%)");

// Append y-axis label
chartGroup
.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0-margin.left + 40)
.attr("x", 0 - height/2)
.attr("dy","1em")
.attr("class", "axis-text")
.text("Lacks Healthcare (%)")

}); 
