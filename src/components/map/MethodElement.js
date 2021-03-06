import React from 'react';
import PropTypes from 'prop-types';
import PositionCalculator from './PositionCalculator';

function MethodElement({ element, mapDimensions, method }) {
	const positionCalc = new PositionCalculator();
	const x = () =>
		positionCalc.maturityToX(element.maturity, mapDimensions.width);
	const y = () =>
		positionCalc.visibilityToY(element.visibility, mapDimensions.height);

	const defineStoke = function() {
		switch (method.method) {
			case 'outsource':
				return '#444444';
			case 'build':
				return '#000000';
			default:
				return '#D6D6D6';
		}
	};

	const defineFill = function() {
		switch (method.method) {
			case 'outsource':
				return '#444444';
			case 'build':
				return '#D6D6D6';
			default:
				return '#AAA5A9';
		}
	};

	return (
		<g
			id={'method_' + element.id}
			transform={'translate (' + x() + ',' + y() + ')'}
		>
			<circle
				id={'element_circle_' + element.id}
				cx="0"
				cy="0"
				r="20"
				fill={defineFill()}
				stroke={defineStoke()}
			/>
		</g>
	);
}

MethodElement.propTypes = {
	element: PropTypes.shape({
		id: PropTypes.number,
		maturity: PropTypes.number,
		visibility: PropTypes.number,
	}),
	mapDimensions: PropTypes.shape({
		width: PropTypes.number,
		height: PropTypes.number,
	}),
	method: PropTypes.shape({
		method: PropTypes.string,
	}),
};

export default MethodElement;
