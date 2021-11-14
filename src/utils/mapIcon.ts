import Leaflet from 'leaflet';

import redMapIconSvg from '../assets/images/trash-alt-solid-orange.svg';
import greenMapIconSvg from '../assets/images/trash-alt-solid-green.svg';

const mapIconRed = Leaflet.icon({
	iconUrl: redMapIconSvg,
	iconAnchor: [10, 29],
	iconSize: [20, 20],
	popupAnchor: [0, -27],
});

const mapIconGreen = Leaflet.icon({
	iconUrl: greenMapIconSvg,
	iconAnchor: [10, 29],
	iconSize: [20, 20],
	popupAnchor: [0, -27],
});

export default { red: mapIconRed, green: mapIconGreen };
