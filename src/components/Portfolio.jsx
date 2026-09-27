import { useState } from 'react'

const pieces = [
  { src: '/images/sketchpad-kylomatt.png', title: 'Kylo Ren (Sketch)' },
  { src: '/images/sketchpad-jakumi.png', title: 'Jakumi (Sketch)', alpha: true },
  { src: '/images/anakin-clonewars-inahsoka.jpg', title: 'Anakin — Clone Wars Style' },
  { src: '/images/halloween2024-starwars.jpg', title: 'Halloween 2024 Star Wars' },
  { src: '/images/gi-joes-snake-eyes.jpg', title: 'Snake Eyes' },
  { src: '/images/gi-joes-sgt-slaughter.jpg', title: 'Sgt. Slaughter' },
  { src: '/images/gi-joes-zarana.jpg', title: 'Zarana' },
  { src: '/images/lokibearsnuggles.jpg', title: 'Loki Bear Snuggles' },
  { src: '/images/nixie-and-nebula.jpg', title: 'Nixie and Nebula' },
  { src: '/images/mybabies.jpg', title: 'My Babies' },
  { src: '/images/lukes.jpg', title: "Luke's" },
  { src: '/images/print-zemodance.jpg', title: 'Zemo Dance (Print)' },
  { src: '/images/prisonmike.jpg', title: 'Prison Mike' },
  { src: '/images/redsoldiers.jpg', title: 'Red Soldiers' },
  { src: '/images/chit2.jpg', title: 'Chit' },
  { src: '/images/star-wars-stickers---rey.jpg', title: 'Rey (Sticker)' },
  { src: '/images/the-wait-of-gravity-1-004.jpg', title: 'The Wait of Gravity #1 — page 4' },
  { src: '/images/the-wait-of-gravity-1-017.jpg', title: 'The Wait of Gravity #1 — page 17' },
  { src: '/images/vampiric-visions---act-3---p17.png', title: 'Vampiric Visions — Act 3, p17' },
  { src: '/images/vampiric-visions---act-3---p20.png', title: 'Vampiric Visions — Act 3, p20' },
  { src: '/images/highlights-01-storyboards.jpg', title: 'Storyboard Highlights' },
  { src: '/images/highlights-05-logos.jpg', title: 'Logo Highlights' },
]

export default function Portfolio() {
  const [active, setActive] = useState(null)

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
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <img src={active.src} alt={active.title} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">{active.title} &mdash; <span>click anywhere to close</span></p>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close">&times;</button>
        </div>
      )}
    </section>
  )
}
