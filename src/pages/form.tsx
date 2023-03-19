import * as React from "react"
import { Link } from "gatsby"

const FormPage = () => {
  return (
    <main>
      <title>Form</title>
      <h1>Form</h1>

      <form
        name="form"
        method="POST"
        data-netlify="true"
      // netlify
      >
        <input type="text" name="name" />
        <button type="submit">Send</button>
      </form>

      <Link to="/">Go home</Link>.

    </main >
  )
}

export default FormPage
