var xValues = ["April/March", "May", "June", "July", "August", "Sept/Oct"];
var yValues = [0,.1,.2,.3,.4];
var barColors = ["red", "green","blue","orange","yellow"];

new Chart("chart_0", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [.225,.346,.287,.262,.336,.343],
      borderColor: "red",
      label: "Joe Mauer",
      fill: false
    }, { 
      data: [.147,.254,.184,.387,.324,.27],
      borderColor: "green",
      label: "Byron Buxton",
      fill: false
    }, { 
      data: [.242,.255,.25,.24,.319,.308],
      borderColor: "blue",
      label: "Brian Dozier",
      fill: false
    }, { 
        data: [.268,.269,.291,.321,.307,.276],
        borderColor: "orange",
        label: "Eddie Rosario",
        fill: false
      }, { 
        data: [.242,.26,.243,.26,.28,.269],
        borderColor: "yellow",
        label: "Minnesota Twins",
        fill: false
      }]
  },
  options: {
    labels:
    {
        display: true,
        text: yValues
    },
    title: {
        display: true,
        text: "2017 Monthly Batting Average Trends"
      }
  }
});

document.getElementById("chart_0").innerHTML = chart_0;