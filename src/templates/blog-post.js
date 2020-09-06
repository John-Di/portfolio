import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	return (
		<BlogLayout>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<div
				css={css`
				background: yellow;
				height: 100vh;
				width: 100vh;
            `}>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</BlogLayout>
	)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
