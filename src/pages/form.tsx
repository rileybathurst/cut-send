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
        // data-netlify="true"
        netlify
      >
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <Link to="/">Go home</Link>.

    </main>
  )
}

export default FormPage
