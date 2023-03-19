import * as React from "react"
import { Link } from "gatsby"

const LightingPage = () => {
  return (
    <main>
      <title>Lighting</title>
      <h1>Lighting</h1>

      <form
        name="contact"
        data-netlify="true"
        method="POST"
        action="/success"
      >
        <label>Name
          <input type="text" name="name" />
        </label>

        <button type="submit">Send</button>
      </form>

    </main>
  )
}

export default LightingPage
