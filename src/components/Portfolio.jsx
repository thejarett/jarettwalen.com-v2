// Portfolio grid with lightbox.
// Artwork lives in /public/art; ALTS maps filenames to alt text and
// captions are hidden from display but kept for screen readers.
import { useState, useRef } from 'react'

const pieces = [
  { src: '/images/sketchpad-kylomatt.png', title: 'Matt (Kylo Ren) from SNL Skit' },
  { src: '/images/sketchpad-jakumi.png', title: 'Ripley and Newt from Alien', alpha: true },
  { src: '/images/anakin-clonewars-inahsoka.jpg', title: 'Anakin Skywalker, Clone Wars Commander' },
  { src: '/images/halloween2024-starwars.jpg', title: 'Star Wars Jedi, Various' },
  { src: '/images/gi-joes-snake-eyes.jpg', title: 'GI JOE, Snake Eyes & Timber' },
  { src: '/images/gi-joes-sgt-slaughter.jpg', title: 'GI JOE, Sgt Slaughter' },
  { src: '/images/gi-joes-zarana.jpg', title: 'GI JOE, Zarana' },
  { src: '/images/lokibearsnuggles.jpg', title: 'Sketch of my dogs, Loki & Bear' },
  { src: '/images/nixie-and-nebula.jpg', title: 'Sketch of my rat and dog, Galactus & Nixie' },
  { src: '/images/mybabies.jpg', title: 'Art of my dogs, Loki, Tali and Nixie' },
  { src: '/images/lukes.jpg', title: 'Star Wars, Luke Skywalker at various ages' },
  { src: '/images/print-zemodance.jpg', title: 'Marvel MCU, Baron Zemo dances' },
  { src: '/images/prisonmike.jpg', title: 'The Office, Prison Mike' },
  { src: '/images/redsoldiers.jpg', title: 'Concept art of warrior duo' },
  { src: '/images/chit2.jpg', title: 'Chit from the popular TikTok series' },
  { src: '/images/star-wars-stickers---rey.jpg', title: 'Star Wars, Rey Skywalker' },
  { src: '/images/the-wait-of-gravity-1-004.jpg', title: 'Page Sample from The Wait of Gravity #1' },
  { src: '/images/the-wait-of-gravity-1-017.jpg', title: 'Page Sample from The Wait of Gravity #1' },
  { src: '/images/vampiric-visions---act-3---p17.png', title: 'Page Sample from Vampiric Visions #1' },
  { src: '/images/vampiric-visions---act-3---p20.png', title: 'Page Sample from Vampiric Visions #1' },
  { src: '/images/highlights-01-storyboards.jpg', title: 'Storyboard sample' },
  { src: '/images/highlights-05-logos.jpg', title: 'Logo design sample' },
]

export default function Portfolio() {
  const [active, setActive] = useState(null)
  const closingRef = useRef(false)

  const close = () => {
    if (closingRef.current) return
    closingRef.current = true
    const el = document.querySelector('.lightbox')
    if (el) el.classList.add('closing')
    setTimeout(() => { setActive(null); closingRef.current = false }, 200)
  }

  return (
    <section id="portfolio" className="section section-alt">
      <h2>Portfolio</h2>
      <p>Illustration, comics, storyboards, and design work. Click any piece to view it full-size.</p>
      <div className="portfolio-grid">
        {pieces.map((p) => (
          <button
            key={p.src}
            className="portfolio-item"
            onClick={() => setActive(p)}
            aria-label={p.title}
          >
            <img
              src={`/images/thumbs/${p.src.split('/').pop().replace(/\.(png|jpg)$/i, '.jpg')}`}
              alt={p.title}
              loading="lazy"
            />
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <img src={active.src} alt={active.title} onClick={close} />
          <p className="lightbox-caption">{active.title} &mdash; <span>click anywhere to close</span></p>
          <button className="lightbox-close" onClick={close} aria-label="Close">&times;</button>
        </div>
      )}
    </section>
  )
}
