import { graphql } from 'gatsby';
import React from 'react';
import AboutComponent from '../../components/AboutComponent';
import Layout from '../../components/Layout';

const About = ({ data }) => {
	console.log(data);

	return (
		<Layout>
			<AboutComponent image={data.file.childImageSharp.gatsbyImageData} />
		</Layout>
	);
};

export const query = graphql`
	query profileQuery {
		file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				gatsbyImageData(quality: 100, width: 300)
			}
		}
	}
`;

export default About;
