import React, { useState } from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import BlogDiv from './BlogDiv';
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import Overlay from './Overlay';
import SideMenu from './SideMenu';

const LayoutDiv = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: grid;
	grid-template-rows: 5.7rem auto;
	background-color: black;
`;

const Layout = ({ children }) => {
	const [menuToggle, setMenuToggle] = useState(false);
	const toggleFn = () => {
		setMenuToggle((state) => {
			return !state;
		});
	};

	return (
		<LayoutDiv>
			<div>
				<Hamburger toggleFn={toggleFn} />
				<Navbar />
				{menuToggle && (
					<>
						<SideMenu />
						<Overlay closeMenuFn={toggleFn} />
					</>
				)}
			</div>
			{children}
		</LayoutDiv>
	);
};

export default Layout;
