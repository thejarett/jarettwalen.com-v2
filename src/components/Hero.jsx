// Hero/header: name, tagline, social links, and signature image.
// SOCIALS is the single source of truth for social URLs (shared intent with Contact).
const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/thejarett/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jarettwalen/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@jaybear64' },
]

export default function Hero() {
  return (
    <header className="hero" style={{ backgroundImage: "url('/images/hero-slices.jpg')" }}>
      <div className="hero-inner">
        <p className="hero-kicker">Artist &bull; Author &bull; Web Developer</p>
        <h1>Jarett Walen</h1>
        <p className="hero-sub">Ohio artist and super geek. He/him.</p>
        <nav className="socials" aria-label="Social links">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
              {s.name}
            </a>
          ))}
        </nav>
      </div>
      <img className="hero-sig" src="/images/moresig1white.png" alt="Jarett Walen signature" />
    </header>
  )
}
