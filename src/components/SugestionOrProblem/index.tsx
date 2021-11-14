import React from 'react';
import ReactDOM from 'react-dom';
import { SugestionOrProblemsButton } from './styles';

export const SugestionOrProblem: React.FC = () =>
	ReactDOM.createPortal(
		<SugestionOrProblemsButton
			href="https://forms.gle/vkJFAyLPDcy4z2dL7"
			target="_blank"
		>
			<div className="sticky">Avalie o sistema!</div>
		</SugestionOrProblemsButton>,
		document.getElementById('body') as Element
	);
