import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexAngleCircle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                ((this.props.series.recovered / this.props.series.confirmed) * 100).toFixed(2),
                ((this.props.series.deaths / this.props.series.confirmed) * 100).toFixed(2),
                ((this.props.series.critical / this.props.series.confirmed) * 100).toFixed(2)
            ],
            options: {
                chart: {
                    type: 'radialBar',
                    width: '100%'
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 360,
                        hollow: {
                            margin: 5,
                            size: '40%',
                            background: '#fff',
                        },
                        dataLabels: {
                            name: {
                                show: true,
                            },
                            value: {
                                show: true,
                            },
                            total: {
                                show: true,
                                label: "Covid-19",
                                color: "#153d77",
                                fontSize: "12px",
                                fontWeight: 500,
                                formatter: function () {
                                    return ""
                                },
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                labels: ['Recovered', 'Death', 'Critical'],
                legend: {
                    show: true,
                    // floating: true,
                    fontSize: '12px',
                    horizontalAlign: "left",
                    position: 'bottom',
                    // offsetX: 100,
                    // offsetY: 15,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
                        // return seriesName + ":  " + quotaInfo[opts.seriesIndex]
                        // return seriesName + ":  " + quotaInfoList[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 1440,
                    options: {
                        chart: {
                            height: 290
                        },
                        legend: {
                            fontSize: '14px',
                        }
                    }
                },
                    // {
                    //     breakpoint: 480,
                    //     options: {
                    //         legend: {
                    //             show: false
                    //         }
                    //     }
                    // }
                ]
            }
        };
    }


    render() {
        return (


            <div id="radialBar">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={330} />
            </div>


        );
    }
}

export default ApexAngleCircle;