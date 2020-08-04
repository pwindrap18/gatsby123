import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./scss/blog.module.scss"
import Head from "../components/head"

const BlogPages = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const {
    allContentfulBlogPost: { edges },
  } = data

  return (
    <Layout>
      <Head title="Blog"></Head>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map((edge, index) => (
          <li className={blogStyles.post} key={index}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPages
