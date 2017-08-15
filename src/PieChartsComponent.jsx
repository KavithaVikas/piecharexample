import React from 'react';
import { render } from 'react-dom';
import { PieChart } from 'react-d3-basic';

export default class PieCharts extends React.Component {

    render() {
        var pieData = [{ label: "Margarita", value: 20.0 }, { label: "John", value: 55.0 }, { label: "Tim", value: 25.0 }];
        var value = function () {
            return '1';
        }
            var name = function () {
                return '2';
            }
        var chartSeries = [
            {
                "field": "<5",
                "name": "less than 5"
            },
            {
                "field": "5-13",
                "name": "5 to 13"
            },
            {
                "field": "14-17",
                "name": "14 to 17"
            },
            {
                "field": "18-24",
                "name": "18 to 24"
            },
            {
                "field": "25-44",
                "name": "25 to 44"
            },
            {
                "field": "45-64",
                "name": "45 to 64"
            }
        ];
        return (
            <div>
                <p> test pie chart </p>
                <PieChart
                    data={pieData}
                    width={450}
                    height={400}
                    radius={110}
                    innerRadius={20}
                    sectorBorderColor="white"
                    title="Pie Chart"
                    chartSeries={chartSeries}
                    value={value}
                    name={name}
                />
            </div>
        )
    }

}