import { styled } from '@mui/material';
import { Fragment } from 'react';
import React from 'react';
import GoogleMapReact from 'google-map-react';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TrackingAnalytics = () => {

	const defaultProps = {
		center: {
		  lat: -26.2041,
		  lng: 28.0473
		},
		zoom: 8
	  };
	// render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '100vh', width: '100%' }}>
			  <GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyCQvYXL_fWTxQddv4sHBGDuC8ICJC6SIXE" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			  >
				<AnyReactComponent
				  lat={-26.2041}
				  lng={28.0473}
				  text=""
				/>
			  </GoogleMapReact>
			</div>
		);
	// }
};

export default TrackingAnalytics;