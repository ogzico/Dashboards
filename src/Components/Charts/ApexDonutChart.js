import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexDonutChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [60, 80],
            options: {
                chart: {
                    type: 'donut',
                    width: '100%',
                },
                colors: ['#d2d2d2', '#2E93fA'],
                legend: {
                    show: true,
                    position: 'bottom'
                },
                labels: ['Spent Quota of 140Gb', 'Available Quota of 140Gb'],
                responsive: [
                    {
                        breakpoint: 1520,
                        options: {
                            chart: {
                                height: 250
                            }
                        }
                    },
                    {
                        breakpoint: 1440,
                        options: {
                            chart: {
                                height: 290
                            }
                        }
                    }
                ],
            },


        };
    }



    render() {
        return (


            <div id="donutchart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={290} />
            </div>


        );
    }
}

export default ApexDonutChart;