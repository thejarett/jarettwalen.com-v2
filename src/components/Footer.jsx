export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <img src="/images/moresig1.png" alt="Jarett Walen signature" className="footer-sig" />
      <p>&copy; {year} Jarett Walen. All rights reserved.</p>
    </footer>
  )
}
