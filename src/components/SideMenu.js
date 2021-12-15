import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Menu = styled.div`
	position: fixed;
	background-color: white;
	color: black;
	min-height: 100vh;
	width: 42vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 100;
	transform: translatex(-100%);
	animation: come-in 0.1s ease-in forwards;
	a {
		text-decoration: none;
		margin: 3rem 0;
		padding: 1rem 0;
		width: 100%;
		font-size: 2rem;
		text-align: center;
		background-color: white;
		color: black;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		&:hover,
		:active {
			background-color: black;
			color: white;
			font-weight: 800;
		}
	}
	@keyframes come-in {
		to {
			transform: translateX(0);
		}
	}
`;

const SideMenu = () => {
	return (
		<Menu>
			<Link to='/'>Blog</Link>
			<Link to='/about'>About</Link>
			<Link to='/contact'>Contact</Link>
		</Menu>
	);
};

export default SideMenu;
