import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerButton = styled.button`
	position: fixed;
	top: 0;
	left: 0;
	padding: 0;
	margin: 0;
	background-color: white;
	color: black;
	border: none;
	outline: none;
	height: 5.7rem;
	width: 5.7rem;
	font-size: 3rem;
	cursor: pointer;
	z-index: 5;
`;

const Hamburger = ({ toggleFn }) => {
	const toggleMenu = () => {
		toggleFn();
	};

	return (
		<HamburgerButton onClick={toggleMenu}>
			<FontAwesomeIcon icon={faBars} />
		</HamburgerButton>
	);
};

export default Hamburger;
