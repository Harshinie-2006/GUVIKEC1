import '@/styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">GUVI</h3>
            <p className="footer-text">
              A leading coding platform transforming tech education through practical learning and industry-focused curriculum.
            </p>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">KEC</h3>
            <p className="footer-text">
              Kumaraguru College of Engineering, driving excellence in engineering education and innovation since its inception.
            </p>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Partnership</h3>
            <p className="footer-text">
              Together creating opportunities for students to gain real-world skills and practical experience in technology.
            </p>
          </div>
        </div>
        <div className="footer-divider">
          <p className="footer-copyright">&copy; 2024 GUVI & KEC Partnership. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
