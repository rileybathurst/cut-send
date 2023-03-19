import * as React from "react"

import Hello from "../components/hello"

const HelloPage = () => {
  return (
    <main>
      <Hello />
      <Hello name="steve" />
    </main>
  )
}

export default HelloPage
