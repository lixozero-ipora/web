import Leaflet from 'leaflet'

import mapIconSvg from '../assets/images/trash-alt-solid.svg'

const mapIcon = Leaflet.icon({
	iconUrl: mapIconSvg,
	iconAnchor: [10, 29],
	iconSize: [20, 20],
})

export default mapIcon
