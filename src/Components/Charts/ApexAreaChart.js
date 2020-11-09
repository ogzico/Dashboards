import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexAreaChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Daily Total Cases",
                data: Object.values(this.props.data)
            }],
            options: {
                chart: {
                    background: '#fff',
                    foreColor: '#d2d2d2',
                    type: 'area',
                    width: "100%",
                    zoom: {
                        enabled: false
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.5,
                        gradientToColors: ['#2469ce', '#fff'],
                        inverseColors: false,
                        opacityFrom: 0.1,
                        opacityTo: 0.7,
                        stops: [0, 50, 100],
                        colorStops: []
                    }
                },
                grid: {
                    show: true,
                    borderColor: '#d2d2d2',
                    strokeDashArray: 5,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    row: {
                        colors: undefined,
                        opacity: 0.5
                    },
                    column: {
                        colors: undefined,
                        opacity: 0.5
                    },
                    padding: {
                        top: 10,
                        right: 20,
                        bottom: 10,
                        left: 20
                    },
                },
                markers: {
                    size: 4,
                    colors: '#fff',
                    strokeColors: '#2469ce',
                    strokeWidth: 2,
                    strokeOpacity: 0.9,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: undefined,
                    onDblClick: undefined,
                    showNullDataPoints: true,
                    hover: {
                        size: 8,
                        sizeOffset: 3
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },

                title: {
                    text: 'Daily Total Cases',
                    align: 'left',
                    style: {
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'Avenir, Arial, Helvetica, Tahoma, sans-serif',
                        color: '#3e4676'
                    },
                },
                // subtitle: {
                //     text: 'Price Movements',
                //     align: 'left'
                // },
                // labels: series.dates,
                labels: Object.keys(this.props.data),
                xaxis: {
                    // type: 'datetime',
                    type: 'string',
                },
                yaxis: {
                    opposite: false
                },
                legend: {
                    horizontalAlign: 'left'
                },
                responsive: [
                    {
                        breakpoint: 1600,
                        options: {
                            chart: {
                                height: 300
                            }
                        }
                    },
                    {
                        breakpoint: 1500,
                        options: {
                            chart: {
                                height: 325
                            }
                        }
                    },
                    {
                        breakpoint: 1440,
                        options: {
                            chart: {
                                height: 275
                            }
                        }
                    }
                ],
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={275} />
            </div>
        );
    }
}

export default ApexAreaChart;