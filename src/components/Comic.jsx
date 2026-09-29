// Comic section: promotes "Wait of Gravity" with an Amazon buy link.
export default function Comic() {
  return (
    <section id="comic" className="section section-alt">
      <h2>The Wait of Gravity</h2>
      <p className="comic-blurb">
        Nora Fox is a slightly depressed young woman who hates her life. Through a
        series of poor choices, she ends up taking a haphazard space voyage in a
        rebuilt star-shuttle &mdash; and finds herself catapulted into the future,
        faced with a blown-up Earth and no way home. Or even a home at all. She
        struggles to understand her new world while trying to recover something,
        anything, from her old life, in a rush to find out what happened to
        humanity.
      </p>
      <p><em>Crafted &amp; illustrated by me. A new novel is on the way.</em></p>
      <a
        className="btn"
        href="https://www.amazon.com/Wait-Gravity-001-Jarett-Walen-ebook/dp/B08YRXFXJ7/"
        target="_blank"
        rel="noreferrer"
      >
        Get issue #1 on Amazon
      </a>
    </section>
  )
}
