import Link from 'next/link'
import '@/styles/home.css'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering the Future of Education
            </h1>
            <p className="hero-subtitle">
              A strategic collaboration between GUVI and Kumaraguru College of Engineering, bridging the gap between theoretical knowledge and practical industry skills.
            </p>
            <div className="button-group">
              <Link
                href="/about"
                className="btn btn-primary"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="partnership-overview">
        <div className="section-container">
          <h2 className="section-title">Why This Partnership?</h2>
          <div className="cards-grid">
            <div className="card">
              <h3 className="card-title">Industry Expertise</h3>
              <p className="card-text">
                GUVI brings cutting-edge coding curriculum and real-world project experience, ensuring students learn what industry demands.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Academic Excellence</h3>
              <p className="card-text">
                KEC provides a strong academic foundation and world-class infrastructure, enabling comprehensive engineering education.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Student Empowerment</h3>
              <p className="card-text">
                Together, we create opportunities for students to master both theory and practice, becoming industry-ready professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Highlights */}
      <section className="highlights-section">
        <div className="section-container">
          <h2 className="section-title">What We Offer Together</h2>
          <div className="highlights-grid">
            <div className="highlights-column">
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div>
                  <h4 className="highlight-title">Integrated Curriculum</h4>
                  <p className="highlight-text">
                    Seamlessly blend theoretical engineering knowledge with practical coding skills and industry best practices.
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div>
                  <h4 className="highlight-title">Industry Projects</h4>
                  <p className="highlight-text">
                    Work on real-world projects with mentorship from GUVI's experienced instructors and KEC's faculty experts.
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div>
                  <h4 className="highlight-title">Career Opportunities</h4>
                  <p className="highlight-text">
                    Direct access to GUVI's job placement network and KEC's industry connections for career advancement.
                  </p>
                </div>
              </div>
            </div>
            <div className="highlights-column">
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div>
                  <h4 className="highlight-title">Skill Development</h4>
                  <p className="highlight-text">
                    Comprehensive training in full-stack development, data structures, algorithms, and emerging technologies.
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div>
                  <h4 className="highlight-title">Expert Mentorship</h4>
                  <p className="highlight-text">
                    Guidance from industry professionals and academic leaders in shaping your technical and professional journey.
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div>
                  <h4 className="highlight-title">Global Recognition</h4>
                  <p className="highlight-text">
                    Earn certifications recognized worldwide, enhancing your resume and career prospects globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container text-center">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of students who are transforming their careers through our innovative partnership.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
