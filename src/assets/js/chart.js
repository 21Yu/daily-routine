// load google chart
google.charts.load('current', {packages: ['corechart']});

function drawLoaferChart() {
    const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per day'],
        ['Eat', 2],
        ['gaming', 4],
        ['scrolling', 6],
        ['Sleep', 12]
    ]);

    const options = {
        title: 'loafer'
    };

    const chart = new google.visualization.PieChart(document.getElementById('loaferChart'));

    chart.draw(data, options);
} 

function drawSlaveChart() {
    const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 12],
        ['Eat', 3],
        ['Sleep', 7],
        ['commute', 2]
    ])

    const options = {
        title: 'slave'
    };

    const chart = new google.visualization.PieChart(document.getElementById('slaveChart'));

    chart.draw(data, options);
}

function drawRetireChart() {
    const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Investing', 5],
        ['Sleep', 9],
        ['Hobby', 4],
        ['Eat', 2],
        ['Teach kids', 4]
    ]);

    const options = {
        title: 'retire'
    };

    const chart = new google.visualization.PieChart(document.getElementById('retireChart'));

    chart.draw(data, options);
}

function drawBillionaireChart() {
    const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Sleep', 9],
        ['Investing', 6],
        ['Shopping', 2],
        ['Eating', 2],
        ['Networking', 3],
        ['reading', 2]
    ]);

    const options = {
        title: 'billionaire'
    };

    const chart = new google.visualization.PieChart(document.getElementById('billionaireChart'));

    chart.draw(data, options);
}

function selectOne() {
    const selectedOption = document.getElementById('options').value;
    if (selectedOption == 1) {
        console.log("generate loafer chart");
        google.charts.setOnLoadCallback(drawLoaferChart);
    } else if (selectedOption == 2) {
        console.log("generate slave chart");
        google.charts.setOnLoadCallback(drawSlaveChart);
    } else if (selectedOption == 3) {
        console.log("generate retire chart");
        google.charts.setOnLoadCallback(drawRetireChart);
    } else {
        console.log("generate billionaire chart");
        google.charts.setOnLoadCallback(drawBillionaireChart);
    }
}

const myButton = document.getElementById('mybtn');
myButton.addEventListener('click', selectOne);