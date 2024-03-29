import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import mapIcon from '../../utils/mapIcon';
import { MapButton } from './styles';

interface ComplaintPopupProps {
	id: string;
	latitude: number;
	longitude: number;
	mapIconColor?: 'red' | 'green';
	onClick: (id: string) => void;
}

const ComplaintPopup: React.FC<ComplaintPopupProps> = ({
	latitude,
	longitude,
	id,
	mapIconColor = 'red',
	onClick,
}) => {
	const handleClick = () => {
		onClick(id);
	};

	return (
		<Marker icon={mapIcon[mapIconColor]} position={[latitude, longitude]}>
			<Popup
				position={[latitude, longitude]}
				closeButton={false}
				closeOnClick={false}
			>
				<MapButton type="button" onClick={handleClick}>
					Abrir reclamações
				</MapButton>
			</Popup>
		</Marker>
	);
};

export default ComplaintPopup;
