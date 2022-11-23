const options = {
    chart: {
        /* type:'line', */
        type: 'bar',
        height:"100%"
}, 

series: [
    {
        'name':'sightings',
        'data':[10, 13, 15, 22, 24, 28]
    },
    {
        'name':'temperature',
        'data':[31, 32, 27, 29, 28, 31]
    }
],
xaxis:{
        categories:['Jan','Feb','Mar','Apr','May','Jun']
    }
}

// create the chart
const chartElement = document.querySelector("#chart");
// create a new instance of ApexCharts (i.e. create a new chart)
const chart = new ApexCharts(chartElement, options);
// we need to render the chart
chart.render();

