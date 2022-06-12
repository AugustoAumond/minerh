import styled from 'styled-components';
import ApexChart from 'apexcharts';

function Column(){

    setTimeout(() => {
        let chart = document.querySelector('#graphics'); 
    
        let options =  {
            series: [{
                name: 'País',
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            chart: {
                type: 'bar',
                height: 310, 
                width: '100%',
                toolbar: false, 
                },
                plotOptions: {
                bar: 
                    {
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
        <Graphic id="graphics">

        </Graphic>
    )    
}
export default Column;

const Graphic = styled.div`
position: relative;
max-width: 603px;
min-width: 290px;
top: 15px;
left: 18px;
width: 90%;
`