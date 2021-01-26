import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const TutorialPage = ({ data }) => (
  <Layout pageContext={{ frontmatter: { title: data.mdx.frontmatter.title } }}>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </Layout>
);

export const query = graphql`
  query($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default TutorialPage;