import styled from 'styled-components';
import './App.css'
import ApexChart from 'apexcharts';

import Header from './components/header/Header';
import Title from './components/title/Title';
import Graphics from './components/graphics/Graphics';

function App() {

  setTimeout(() => {
    let chart = document.querySelector('#graphics'); 

    console.log(chart);

    let options =  {
        series: [{
            name: 'País',
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
            type: 'bar',
            height: 290, 
            width: 600,
            },
            plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
            },
            dataLabels: {
            enabled: false
            },
            xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
            ],
        }
    }
    
    let apexChart = new ApexChart(chart, options);

    apexChart.render();

  }, )

  return (
    <DivApp>

      <Header/>
      
      <Title/>

      <Graphics/>

    </DivApp>
  );
}
export default App;

const DivApp = styled.div` 
max-width: 1440px;
height: 1024px;
border: solid;
`