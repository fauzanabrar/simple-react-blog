import { useEffect } from "react"

export default function Home() {
  useEffect(function () {
    document.title = "Home"
  }, [])
  return (
    <section className="section">
      <h1 className="section-title">Welcome to this Blog</h1>
      <p className="section-description">This is just practice react to create website blog</p>
    </section>
  )
}