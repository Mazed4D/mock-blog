import React from 'react';
import styled from 'styled-components';

const BlogDiv = styled.div`
	background-color: white;
	padding: 1rem;
	margin-bottom: 2rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:active,
	:hover {
		background-color: black;
		color: white;
		transform: ;
	}
`;

const BlogHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BlogCard = () => {
	return (
		<BlogDiv>
			<BlogHeader>
				<h3>Blog title</h3>
				<p>DD/MM/YYYY</p>
			</BlogHeader>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt
				consequuntur tenetur aut ratione, non autem nulla, a quod, commodi alias
				corrupti nesciunt at repudiandae rerum provident dignissimos pariatur
				odit?...
			</p>
		</BlogDiv>
	);
};

export default BlogCard;
