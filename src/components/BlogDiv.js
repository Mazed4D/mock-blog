import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MainDiv = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 3rem 6rem;
`;

const NavDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const NavBtn = styled.button`
	background-color: white;
	color: black;
	border: none;
	outline: none;
	width: 5rem;
	height: 5rem;
	font-size: 3rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:active,
	:hover {
		background-color: black;
		color: white;
		transform: ;
	}
`;

const BlogDiv = ({ children }) => {
	return (
		<MainDiv>
			{children}
			<NavDiv>
				<NavBtn
					style={{ color: 'grey', backgroundColor: 'black', cursor: 'default' }}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</NavBtn>
				<NavBtn>
					<FontAwesomeIcon icon={faArrowRight} />
				</NavBtn>
			</NavDiv>
		</MainDiv>
	);
};

export default BlogDiv;
