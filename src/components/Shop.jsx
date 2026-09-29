// Shop section: merch links. Sooper entry is commented out
// until that shop goes live; uncomment to re-add.
const shops = [
  // Hidden until the Sooper shop is live:
  // { name: 'Sooper', url: 'https://sooper.app/thejarett', desc: 'Commissions and web dev work' },
  { name: 'TeePublic', url: 'https://www.teepublic.com/user/thejarett', desc: 'Shirts and merch' },
  { name: 'Threadless', url: 'https://thejarett.threadless.com/', desc: 'Shirts and merch' },
]

export default function Shop() {
  return (
    <section id="shop" className="section">
      <h2>Prints, Stickers, Comics &amp; More</h2>
      <p>Prints, stickers, postcards, comic books, and other cool stuff lives in these spots:</p>
      <div className="card-grid">
        {shops.map((shop) => (
          <a className="card" key={shop.name} href={shop.url} target="_blank" rel="noreferrer">
            <h3>{shop.name}</h3>
            <p>{shop.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
