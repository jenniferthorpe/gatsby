import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple`, fontSize: `72px` }}>
    <Link to="/">Home</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
