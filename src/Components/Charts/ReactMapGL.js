import * as React from 'react';
import { Component } from 'react';
import MapGL, {
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

import Pins from './pins';
import CityInfo from './city-info';


const TOKEN = 'pk.eyJ1Ijoib2d6aXNjaWVuY2UiLCJhIjoiY2tleTB4YjEyMDByZzJ6b2c5cHV6OXFpayJ9.g8cSYTiotK0ml0f72tDIow'; // Set your mapbox token here

const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const fullscreenControlStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
};

const navStyle = {
    position: 'absolute',
    top: 72,
    left: 0,
    padding: '10px'
};

const scaleControlStyle = {
    position: 'absolute',
    bottom: 36,
    left: 0,
    padding: '10px'
};

export default class ReactMapGL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 41.015137,
                longitude: 28.979530,
                zoom: 2,
                bearing: 0,
                pitch: 0
            },
            popupInfo: null
        };
    }

    _updateViewport = viewport => {
        this.setState({ viewport });
    };

    _onClickMarker = city => {
        this.setState({ popupInfo: city });
    };

    _renderPopup() {
        const { popupInfo } = this.state;

        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={parseInt(popupInfo.longitude)}
                    latitude={parseInt(popupInfo.latitude)}
                    closeOnClick={false}
                    onClose={() => this.setState({ popupInfo: null })}
                >
                    <CityInfo info={popupInfo} />
                </Popup>
            )
        );
    }

    render() {
        const { viewport } = this.state;

        return (
            <MapGL
                {...viewport}
                width="100%"
                height="285px"
                mapStyle="mapbox://styles/ogziscience/ckf28aaal3r5p1at0ho0durtj"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN}
            >
                <Pins data={this.props.data} onClick={this._onClickMarker} />

                {this._renderPopup()}

                <div style={geolocateStyle}>
                    <GeolocateControl />
                </div>
                <div style={fullscreenControlStyle}>
                    <FullscreenControl />
                </div>
                <div style={navStyle}>
                    <NavigationControl />
                </div>
                <div style={scaleControlStyle}>
                    <ScaleControl />
                </div>

                {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
            </MapGL>
        );
    }
}