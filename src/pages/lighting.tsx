import * as React from "react"
import { Link } from "gatsby"

const LightingPage = () => {
  return (
    <main>
      <title>Lighting</title>
      <h1>Lighting</h1>
      <p>
        <form
          name="contact"
          data-netlify="true"
          className="measure"
          netlify-honeypot="bot-field"
          method="POST"
          action="/Lighting-success"
        >

          <input type="hidden" name="Lighting-name" value="contact" />

          <input type="hidden" name="subject"
            value={`Contact Lighting from sierra.lighting`} />

          <label>Name
            <input type="text" name="name" />
          </label>
          <label>Email
            <input type="email" name="email" />
          </label>
          <label>Phone
            <input type="tel" name="tel" />
          </label>
          <label>Message
            <textarea name="message" />
          </label>
          <p className="sr-only">
            <label>
              Don&#39;t fill this out if you&#39;re human:
              <input name="bot-field" />
            </label>
          </p>
          <button type="submit">Send</button>
        </form>

        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default LightingPage
