import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setSending(true)
    const data = new FormData(e.target)
    const res = await fetch('https://formsubmit.co/ajax/thejarett@proton.me', {
      method: 'POST',
      body: data,
    })
    setSending(false)
    if (res.ok) setSent(true)
  }

  return (
    <section id="contact" className="section section-alt">
      <h2>Interested in working together?</h2>
      <p>
        Whether you&rsquo;re here for art, a website, or a logo &mdash; or you&rsquo;re
        looking for my r&eacute;sum&eacute; &mdash; I&rsquo;d love to hear from you.
      </p>
      {sent ? (
        <p className="form-success">Message sent &mdash; I&rsquo;ll get back to you soon!</p>
      ) : (
        <form className="contact-form" onSubmit={submit}>
          <input type="hidden" name="_subject" value="New message from jarettwalen.com" />
          <input type="hidden" name="_captcha" value="false" />
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn" type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send message'}
          </button>
        </form>
      )}
      <p className="contact-alt">
        Don&rsquo;t like forms? Feel free to contact me on{' '}
        <a href="https://www.instagram.com/thejarett/" target="_blank" rel="noreferrer">Instagram</a>,{' '}
        <a href="https://www.tiktok.com/@jaybear64" target="_blank" rel="noreferrer">TikTok</a> or{' '}
        <a href="https://www.linkedin.com/in/jarettwalen/" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  )
}
