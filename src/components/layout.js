import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./scss/layout.module.scss"
import { config } from "@fortawesome/fontawesome-svg-core"

const Layout = props => {
  config.autoAddCss = false
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          <div>{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
