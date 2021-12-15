import React from 'react';
import styled from 'styled-components';

const OverlayDiv = styled.div`
	position: fixed;
	min-width: 100vw;
	min-height: 100vh;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.4);
	animation: appear 0.1s ease-in forwards;
	@keyframes appear {
		to {
			background-color: (0, 0, 0, 0);
		}
	}
`;

const Overlay = ({ closeMenuFn }) => {
	return <OverlayDiv onClick={closeMenuFn} />;
};

export default Overlay;
