import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const ContactDiv = styled.div`
	margin: 6rem auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	/* margin: 3rem 6rem; */
	background-color: white;
	color: black;
	height: fit-content;
	padding: 1rem;
	width: fit-content;
`;

const ContactComponent = () => {
	return (
		<ContactDiv>
			<p>Milan Paunović</p>
			<p>+381XXXXXXXXXX</p>
			<p>fake@email.com</p>
			<p>Fake Street 22, Fake New City</p>
		</ContactDiv>
	);
};

export default ContactComponent;
