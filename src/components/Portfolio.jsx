import { useState } from 'react'

const pieces = [
  { src: '/images/sketchpad-kylomatt.png' },
  { src: '/images/sketchpad-jakumi.png', alpha: true },
  { src: '/images/anakin-clonewars-inahsoka.jpg' },
  { src: '/images/halloween2024-starwars.jpg' },
  { src: '/images/gi-joes-snake-eyes.jpg' },
  { src: '/images/gi-joes-sgt-slaughter.jpg' },
  { src: '/images/gi-joes-zarana.jpg' },
  { src: '/images/lokibearsnuggles.jpg' },
  { src: '/images/nixie-and-nebula.jpg' },
  { src: '/images/mybabies.jpg' },
  { src: '/images/lukes.jpg' },
  { src: '/images/print-zemodance.jpg' },
  { src: '/images/prisonmike.jpg' },
  { src: '/images/redsoldiers.jpg' },
  { src: '/images/chit2.jpg' },
  { src: '/images/star-wars-stickers---rey.jpg' },
  { src: '/images/the-wait-of-gravity-1-004.jpg' },
  { src: '/images/the-wait-of-gravity-1-017.jpg' },
  { src: '/images/vampiric-visions---act-3---p17.png' },
  { src: '/images/vampiric-visions---act-3---p20.png' },
  { src: '/images/highlights-01-storyboards.jpg' },
  { src: '/images/highlights-05-logos.jpg' },
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
            aria-label="portfolio piece"
          >
            <img
              src={`/images/thumbs/${p.src.split('/').pop().replace(/\.(png|jpg)$/i, '.jpg')}`}
              alt=""
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <img src={active.src} alt="" onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption"><span>click anywhere to close</span></p>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close">&times;</button>
        </div>
      )}
    </section>
  )
}
