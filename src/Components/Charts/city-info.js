import * as React from 'react';
import { PureComponent } from 'react';

export default class CityInfo extends PureComponent {
    render() {
        const { info } = this.props;
        // const displayName = `${info.city}(${info.subscription})`;

        return (
            <div>
                <div className="map-popup-info">
                    <h6>{info.country}</h6>
                    <p><b>{info.deaths}</b></p>
                </div>
            </div>
        );
    }
}