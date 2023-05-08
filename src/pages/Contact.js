import { useEffect } from "react"

export default function Contact() {

  useEffect(function () {
    document.title = "Contact"
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">This is all of my contact</p>
    </section>
  )
}