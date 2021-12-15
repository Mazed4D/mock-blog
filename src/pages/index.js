import React from 'react';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import BlogDiv from '../components/BlogDiv';
import './global.css';

const index = () => {
	return (
		<Layout>
			<BlogDiv>
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</BlogDiv>
		</Layout>
	);
};

export default index;
