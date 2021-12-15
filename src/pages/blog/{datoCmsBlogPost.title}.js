import { graphql } from 'gatsby';
import React from 'react';
import { StructuredText } from 'react-datocms';
import Layout from '../../components/Layout';

const Post = ({ data: { title, blogContent } }) => {
	return (
		<Layout>
			<h1>{title}</h1>
			<StructuredText data={blogContent} />
		</Layout>
	);
};

export default Post;

export const blogQuert = graphql`
	query postQuery {
		datoCmsBlogPost(id: {}) {
			title
			blogContent {
				value
			}
		}
	}
`;
