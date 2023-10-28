document.addEventListener("DOMContentLoaded", function() {
    // Sample data
    var data = [
        { label: "A", value: 30 },
        { label: "B", value: 20 },
        { label: "C", value: 50 }
    ];

    // Create a pie chart
    var pie = d3.pie().value(function(d) {
        return d.value;
    });

    var width = 300;
    var height = 300;
    var radius = Math.min(width, height) / 2;

    var svg = d3.select("#pie-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.label); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return d.data.label; });
});
