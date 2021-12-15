import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 3rem 6rem;
	background-color: white;
	color: black;
	height: fit-content;
	padding: 1rem;
`;

const SideDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		max-width: 50%;
	}
`;

const AboutComponent = ({ image }) => {
	return (
		<AboutDiv>
			<h1>Milan Paunović</h1>
			<SideDiv>
				<GatsbyImage image={image} />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
					labore, aliquam esse eligendi quis soluta excepturi voluptatum fugiat
					molestiae dolor suscipit ipsum similique recusandae deleniti!
					Laudantium odit id aut nostrum. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Dolorum maxime, doloremque perspiciatis
					rem laborum est dolores excepturi, qui molestiae inventore laboriosam
					cumque nisi eum reiciendis. Quas obcaecati minus quo excepturi.
				</p>
			</SideDiv>
		</AboutDiv>
	);
};

export default AboutComponent;
