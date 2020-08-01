import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./scss/footer.module.scss"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}{" "}
        <FontAwesomeIcon icon={faCopyright} /> 2020
      </p>
    </footer>
  )
}

export default Footer
