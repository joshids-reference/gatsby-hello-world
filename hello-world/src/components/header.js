import React from "react"
import { Link } from "gatsby"

export default props => (
  <div>
    <div>
      <Link to="/">Home</Link> | <Link to="/about/">About</Link> |{" "}
      <Link to="/contact/">Contact</Link>
    </div>
    <h1>{props.headerText}</h1>
  </div>
)
