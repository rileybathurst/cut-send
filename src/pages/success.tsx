import * as React from "react"
import { Link } from "gatsby"

const SuccessPage = () => {
  return (
    <main>
      <title>Success</title>
      <h1>Success</h1>
      <p>
        Yay
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default SuccessPage
