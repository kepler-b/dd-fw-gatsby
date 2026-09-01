import * as React from "react"

export default function IndexPage() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "4rem" }}>
      <h1>Gatsby</h1>
      <p>A minimal Gatsby site deployed on DataDack Cloud.</p>
    </main>
  )
}

export const Head = () => <title>Gatsby on DataDack</title>
