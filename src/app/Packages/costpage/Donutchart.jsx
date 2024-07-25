import React from 'react';
import { VictoryPie } from 'victory';

const Donutchart = ({ builtUpCost, carParkingCost, septicTankCost }) => {

    const total = builtUpCost + carParkingCost + septicTankCost;

    const data = [
        {  y: builtUpCost },
        {  y: carParkingCost },
        {  y: septicTankCost },
      ];

      const colorScale = total === 0 ? ['#000' , "#000" , "#000"] : ['#FEAF5D', '#FFD4A4', '#726658'];
    return (
        <div className='donut-mxwd'>
            <VictoryPie
            data={data}
            colorScale={colorScale} 
            innerRadius={80} 
            labelRadius={100} 
            style={{ labels: { fill: 'white', fontSize: 1, fontWeight: 'bold' } }} 
            // labels={({ datum }) => `${datum.x}: ₹${datum.y}`} 
            animate={{ duration: 500 }} 
            />
        </div>
    );
}

export default Donutchart;
