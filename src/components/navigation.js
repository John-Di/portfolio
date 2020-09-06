import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Navigation({ children }) {
	const data = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
	)
	return (
		<nav
			css={css`
      `}
		>
			<Link to={`/`}>
				<h3
					css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
				>
					{data.site.siteMetadata.title}
				</h3>
			</Link>
			<Link
				to={`/blogs/`}
				css={css`
          float: right;
        `}
			>
				Blogs
      </Link>
			<Link
				to={`/about/`}
				css={css`
          float: right;
        `}
			>
				About
      </Link>
			{children}
		</nav>
	)
}
