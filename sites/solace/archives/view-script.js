/* plot graph */

/* using dummy data */
var trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
  y: [1, 1, 2, 3, 4, 4, 4, 4, 2, 1, 3, 4, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 5, 5, 5, 5, 4],
  mode: 'markers',
  type: 'scatter',
  name: 'Team A',
  marker: {color: '#83B5E9', size: 16}
};

/* trace data */
var data = [ trace1 ];
var layout = {
  xaxis: {
    range: [ 0, 31.5 ]
  },
  yaxis: {
    range: [0, 5.5]
  },
  title: 'MARCH 2018',
  font: {
    family: 'Montserrat, sans-serif',
    size: 12,
    color: '#000'
  },
  xaxis:{zeroline:false, title: 'Date of Entry'},
  yaxis:{zeroline:false, title: 'Feeling Scale'}
};

/* plot graph */

Plotly.newPlot(chartDiv, data, layout);

/* innerHTML journal entry */

document.getElementById("textDiv").innerHTML = "ENTRY OF MARCH 21, 2018 <br><br> I am having an anxiety attack right now. I am about to walk into an exam room and I am really nervous about it. I studied really hard, but for some reason my anxiety is getting the best of me. I am trying not to throw up. My hands are sweaty, my heart is racing, and I just want to dash back home. This has been the case for all my exams. It is really hard to shake off this feeling. It sucks because we are on a quarter system and we have exams every week. I think I am just overthinking and I am usually okay afterwards, but it’s just the worst right before an exam. I can’t wait for the exam to be over. At least I’m doing something to distract me right now or I think I might hurl on the bus. It’s so crowded in here and it’s not helping. I just need to vent this somewhere. I think I might just listen to some calming music from the playlist from Unwind.";

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("results").className = "";
}, false);
