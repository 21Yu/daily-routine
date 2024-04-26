import { drawLoaferChart, drawSlaveChart, drawRetireChart, drawBillionaireChart} from './chart';

// load google chart
google.charts.load('current', {packages: ['corechart']});

function selectOne() {
    const selectedOption = document.getElementById('options').value;
    if (selectedOption == 1) {
        google.charts.setOnLoadCallback(drawLoaferChart);
    } else if (selectedOption == 2) {
        google.charts.setOnLoadCallback(drawSlaveChart);
    } else if (selectedOption == 3) {
        google.charts.setOnLoadCallback(drawRetireChart);
    } else {
        google.charts.setOnLoadCallback(drawBillionaireChart);
    }
}

const myButton = document.getElementById('mybtn');
myButton.addEventListener('click', selectOne);


