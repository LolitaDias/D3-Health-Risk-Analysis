# D3 - Data Journalism and D3

![Newsroom](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif)

## Background

The goal of this project was to use JavaScript to present a visualization of pre-selected census data from each state within a web page. Since the baseline data was provided in CSV format, D3 was used to import and process the data, as well as generate the required visualization.

### Dataset
The data set included with the assignment is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml), but you are free to investigate a different data set. The current data set incldes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

https://github.com/LolitaDias/D3-Health-Risk-Analysis/blob/master/assets/data/data.csv

### Questions

1. For each state, what is the percentage of the population lacking healthcare versus the percentage of the population living in poverty?

### Tasks

1. Import the data from the CSV file.
2. Set the locations and ranges for the x and y axes.
3. Plot the x and y axes.
4. Set the coordinates and dimensions for the circles representing the data for each state.
5. Plot the circles representing the data for each state.
6. Add a text label of each state's abbreviation within the appropriate circle for identification purposes.


### Result

We have created a scatter plot between two of the data variables such as `Healthcare vs. Poverty`. Using the D3 techniques, we created a scatter plot that represents each state with circle elements. 

We have:

* Included state abbreviations in the circles.

* Created and situated our axes and labels to the left and bottom of the chart.

![4-scatter](Images/4-scatter.jpg)

GitHub deployed link: https://lolitadias.github.io/D3-Health-Risk-Analysis/
