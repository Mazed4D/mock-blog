import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 5.7rem;
	color: black;
	h1 {
		background-color: white;
		padding: 0 1rem;
		margin: 0;
		height: 5.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<h1>Lorem Ipsum Blog</h1>
		</Nav>
	);
};

export default Navbar;
