import '@/styles/about.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="page-header-title">About Our Partnership</h1>
          <p className="page-header-subtitle">
            Discover the vision and mission behind GUVI and KEC collaboration
          </p>
        </div>
      </section>

      {/* About GUVI */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="about-title">About GUVI</h2>
              <p className="about-text">
                GUVI is India's leading vernacular coding platform, dedicated to democratizing technology education across linguistic barriers. Founded with a mission to make coding accessible to everyone, GUVI has transformed the lives of thousands of learners.
              </p>
              <p className="about-text">
                With a focus on practical, industry-relevant skills, GUVI offers comprehensive courses in full-stack development, data science, machine learning, and emerging technologies. Our expert instructors bring real-world experience, ensuring students learn what companies actually need.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Industry-focused curriculum designed with leading tech companies</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Learn in your preferred language - Tamil, Telugu, Kannada, and more</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Hands-on projects and real-world problem-solving experience</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Strong job placement support and career guidance</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Mentorship from experienced industry professionals</p>
                </div>
              </div>
            </div>
            <div className="highlights-box">
              <h3 className="highlights-title">Key Highlights</h3>
              <div className="highlights-items">
                <div className="highlight-card">
                  <p className="highlight-label">Learning Platform</p>
                  <p className="highlight-description">Interactive courses with live mentorship and doubt-solving sessions</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-label">Job Placement</p>
                  <p className="highlight-description">Network of 1000+ hiring partners across India and globally</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-label">Skill Development</p>
                  <p className="highlight-description">Comprehensive programs covering web, mobile, and cloud development</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-label">Community</p>
                  <p className="highlight-description">Active learner community with peer support and networking opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About KEC */}
      <section className="about-section kec-section">
        <div className="section-container">
          <div className="about-grid kec-grid">
            <div className="about-content kec-order">
              <h2 className="about-title">About KEC</h2>
              <p className="about-text">
                Kumaraguru College of Engineering (KEC) is one of India's premier engineering institutions, established with a vision to produce engineers who are not just technically proficient but also socially responsible. Located in Coimbatore, KEC has built a reputation for academic excellence and innovation.
              </p>
              <p className="about-text">
                With state-of-the-art infrastructure, experienced faculty, and a strong emphasis on research and innovation, KEC provides a comprehensive engineering education. The institution maintains strong ties with industry leaders and focuses on holistic development of its students.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Accredited programs in various engineering disciplines</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>State-of-the-art laboratories and research centers</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Strong industry collaborations and internship opportunities</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Faculty expertise spanning multiple engineering domains</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">★</span>
                  <p>Focus on innovation, research, and entrepreneurship</p>
                </div>
              </div>
            </div>
            <div className="highlights-box white-box">
              <h3 className="highlights-title">Core Strengths</h3>
              <div className="highlights-items">
                <div className="highlight-card">
                  <p className="highlight-label">Academic Excellence</p>
                  <p className="highlight-description">Rigorous curriculum aligned with industry standards and emerging technologies</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-label">Research & Innovation</p>
                  <p className="highlight-description">Active research programs in AI, IoT, renewable energy, and more</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-label">Industry Connect</p>
                  <p className="highlight-description">Partnerships with leading companies for internships and placements</p>
                </div>
                <div className="highlight-card">
                  <p className="highlight-label">Student Development</p>
                  <p className="highlight-description">Holistic approach to developing technical, soft, and entrepreneurial skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Vision */}
      <section className="vision-section">
        <div className="section-container">
          <h2 className="section-title">Our Partnership Vision</h2>
          <div className="vision-box">
            <p className="vision-text">
              The collaboration between GUVI and KEC represents a commitment to transform engineering education by combining the best of both worlds: practical industry skills and comprehensive academic excellence.
            </p>
            <p className="vision-text">
              Together, we aim to:
            </p>
            <div className="vision-grid">
              <div className="vision-item">
                <h4 className="vision-item-title">Enhance Learning Outcomes</h4>
                <p className="vision-item-text">
                  Bridge the gap between theoretical knowledge and practical application through integrated learning experiences.
                </p>
              </div>
              <div className="vision-item">
                <h4 className="vision-item-title">Foster Innovation</h4>
                <p className="vision-item-text">
                  Create an environment where students can ideate, experiment, and develop solutions to real-world problems.
                </p>
              </div>
              <div className="vision-item">
                <h4 className="vision-item-title">Build Industry-Ready Professionals</h4>
                <p className="vision-item-text">
                  Equip students with both hard technical skills and soft skills essential for successful careers.
                </p>
              </div>
              <div className="vision-item">
                <h4 className="vision-item-title">Create Opportunities</h4>
                <p className="vision-item-text">
                  Open doors for students through mentorship, internships, and career opportunities in leading companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
