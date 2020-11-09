import React, { Component } from 'react';

import './Covid.css';
import { connect } from 'react-redux';
import { getCovidData, getCovidTotal, getCovidHistorical } from '../../Action/Covid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFileMedicalAlt,
    faTable,
    faCheckCircle,
    faLungsVirus,
    faHeartbeat,
    faSadTear
}
    from "@fortawesome/free-solid-svg-icons";

import ApexAreaChart from '../Charts/ApexAreaChart';
import ReactMapGL from '../Charts/ReactMapGL';
import ApexAngleCircle from '../Charts/ApexAngleCircle';

import Loading from '../Loading/Loading';


class Covid extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCovidData()
        this.props.getCovidTotal()
        this.props.getCovidHistorical()
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    render() {
        const historicalArray = this.props.success_Covid_Historical && Object.values(this.props.success_Covid_Historical.data.cases)
        return (
            <>
                <div className="content">
                    <div className="container-fluid">
                        <div className="header">
                            <h1 className="header-title">COVID-19 Dashboard</h1>
                            <p className="header-subtitle">Keep your distance, wash your hands and drink more coffee.</p>
                        </div>
                        <div className="row" id="chartContainer">
                            <div className="d-flex col-xxl-5 col-xl-6">
                                <div className="w-100">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <OverviewCard
                                                cardTitle="Total Confirmed Case"
                                                icon={faCheckCircle}
                                                data={this.props.success_Covid_Total && this.numberWithCommas(this.props.success_Covid_Total[0].confirmed)}
                                                dataText="people"
                                                percentage="Updated :"
                                                percentageColor="text-success"
                                                percentageText={this.props.success_Covid_Total && this.props.success_Covid_Total[0].lastUpdate.substring(0, 10)}
                                                isLoading_Covid_Total={this.props.isLoading_Covid_Total}
                                                fail_Covid_Total={this.props.fail_Covid_Total}
                                            />
                                            <OverviewCard
                                                cardTitle="Total Recovered Case"
                                                icon={faHeartbeat}
                                                data={this.props.success_Covid_Total && this.numberWithCommas(this.props.success_Covid_Total[0].recovered)}
                                                dataText="people"
                                                percentage="Updated :"
                                                percentageColor="text-success"
                                                percentageText={this.props.success_Covid_Total && this.props.success_Covid_Total[0].lastUpdate.substring(0, 10)}
                                                isLoading_Covid_Total={this.props.isLoading_Covid_Total}
                                                fail_Covid_Total={this.props.fail_Covid_Total}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <OverviewCard
                                                cardTitle="Total Critical Case"
                                                icon={faLungsVirus}
                                                data={this.props.success_Covid_Total && this.numberWithCommas(this.props.success_Covid_Total[0].critical)}
                                                dataText="people"
                                                percentage="Updated :"
                                                percentageColor="text-success"
                                                percentageText={this.props.success_Covid_Total && this.props.success_Covid_Total[0].lastUpdate.substring(0, 10)}
                                                isLoading_Covid_Total={this.props.isLoading_Covid_Total}
                                                fail_Covid_Total={this.props.fail_Covid_Total}
                                            />
                                            <OverviewCard
                                                cardTitle="Total Death Case"
                                                icon={faSadTear}
                                                data={this.props.success_Covid_Total && this.numberWithCommas(this.props.success_Covid_Total[0].deaths)}
                                                dataText="people"
                                                percentage="Updated :"
                                                percentageColor="text-success"
                                                percentageText={this.props.success_Covid_Total && this.props.success_Covid_Total[0].lastUpdate.substring(0, 10)}
                                                isLoading_Covid_Total={this.props.isLoading_Covid_Total}
                                                fail_Covid_Total={this.props.fail_Covid_Total}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex col-xxl-7 col-xl-6">
                                <div className="flex-fill w-100 card">
                                    <div className="card-body">
                                        <div className="chart chart-sm">
                                            {this.props.isLoading_Covid_Historical ?
                                                <Loading />
                                                : this.props.success_Covid_Historical ?
                                                    <ApexAreaChart
                                                        data={this.props.success_Covid_Historical.data.cases}
                                                    />
                                                    : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex col-xxl-7 col-xl-6">
                                <div className="flex-fill w-100 card">
                                    <div id="map-chart" className="card-body">
                                        <div className="row">
                                            <div className="mt-0 col">
                                                <h5 className="card-title">
                                                    Corona Virus Daily Cases Map
                                                    </h5>
                                            </div>
                                        </div>
                                        <div className="chart chart-sm">
                                            {this.props.isLoading_Covid ?
                                                <Loading />
                                                : this.props.success_Covid ?
                                                    <ReactMapGL
                                                        data={this.props.success_Covid}
                                                    /> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex col-xxl-5 col-xl-6">
                                <div className="w-100">
                                    <div className="row">
                                        <div className="d-flex col-sm-6">
                                            <div className="flex-fill w-100 card">
                                                <div id="circle-chart" className="card-body">
                                                    <div className="row">
                                                        <div className="mt-0 col">
                                                            <h5 className="card-title">Percantages of Cases</h5>
                                                        </div>
                                                    </div>
                                                    <div className="chart chart-sm">
                                                        {this.props.isLoading_Covid_Total ?
                                                            <Loading />
                                                            : this.props.success_Covid_Total ?
                                                                <ApexAngleCircle
                                                                    series={
                                                                        this.props.success_Covid_Total[0]
                                                                    }
                                                                />
                                                                : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <OverviewCard
                                                cardTitle="Daily Change"
                                                icon={faFileMedicalAlt}
                                                data={historicalArray && (((historicalArray[historicalArray.length-1] - historicalArray[historicalArray.length - 2])/historicalArray[historicalArray.length - 2])*100).toFixed(0)}
                                                dataText="%"
                                                percentage={historicalArray && this.numberWithCommas(historicalArray[historicalArray.length-1] - historicalArray[historicalArray.length - 2])}
                                                percentageColor="text-danger"
                                                percentageText="new cases"
                                                isLoading_Covid_Total={this.props.isLoading_Covid_Historical}
                                                fail_Covid_Total={this.props.fail_Covid_Historical}
                                            />
                                            <OverviewCard
                                                cardTitle="Monthly Change"
                                                icon={faTable}
                                                data={historicalArray && (((historicalArray[historicalArray.length-1] - historicalArray[0])/historicalArray[0])*100).toFixed(0)}
                                                dataText="%"
                                                percentage={historicalArray && this.numberWithCommas(historicalArray[historicalArray.length-1] - historicalArray[0])}
                                                percentageColor="text-danger"
                                                percentageText="new cases"
                                                isLoading_Covid_Total={this.props.isLoading_Covid_Historical}
                                                fail_Covid_Total={this.props.fail_Covid_Historical}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isLoading_Covid: state.Covid.isLoading_Covid,
    success_Covid: state.Covid.success_Covid,
    fail_Covid: state.Covid.fail_Covid,
    isLoading_Covid_Total: state.Covid.isLoading_Covid_Total,
    success_Covid_Total: state.Covid.success_Covid_Total,
    fail_Covid_Total: state.Covid.fail_Covid_Total,
    isLoading_Covid_Historical: state.Covid.isLoading_Covid_Historical,
    success_Covid_Historical: state.Covid.success_Covid_Historical,
    fail_Covid_Historical: state.Covid.fail_Covid_Historical
});

export default connect(mapStateToProps, { getCovidData, getCovidTotal, getCovidHistorical })(Covid)


export function OverviewCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                {props.isLoading_Covid_Total ?
                    <Loading />
                    :
                    <>
                        <div className="row">
                            <div className="mt-0 col">
                                <h5 className="card-title">
                                    {props.cardTitle}
                                </h5>
                            </div>
                            <div className="col-auto col">
                                <div className="avatar">
                                    <div className="avatar-title rounded-circle bg-primary-dark">
                                        <FontAwesomeIcon icon={props.icon} color="#fff" size="lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {(props.fail_Covid_Total && props.fail_Covid_Total.status !== 200) ?
                            <div className="fail-alert">
                                An error occured, please refresh your page.
                            </div>
                            :
                            <>
                                <h1 className="display-5 mt-1 mb-3">{props.data}
                                    <span className="data-text">{props.dataText}</span>
                                </h1>
                                <div className="mb-0">
                                    <span className={props.percentageColor}>{props.percentage}</span>
                                    <span className="percentage-text">{props.percentageText}</span>
                                </div>
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}