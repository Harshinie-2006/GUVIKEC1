'use client'

import React, { useState, useEffect } from 'react'
import '@/styles/contact.css'

export default function Contact() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  if (!isHydrated) {
    return (
      <div className="contact-page">
        <section className="page-header">
          <div className="section-container">
            <h1 className="page-header-title">Get in Touch</h1>
            <p className="page-header-subtitle">
              Reach out to us with your questions, feedback, or partnership inquiries
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="page-header-title">Get in Touch</h1>
          <p className="page-header-subtitle">
            Reach out to us with your questions, feedback, or partnership inquiries
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-cards">
            {/* GUVI Contact Card */}
            <div className="contact-card">
              <h3 className="card-title">GUVI</h3>
              <div className="card-content">
                <div className="card-item">
                  <p className="card-label">Address</p>
                  <p className="card-value">
                    GUVI Learning Platform
                    <br />
                    Coimbatore, Tamil Nadu
                    <br />
                    India
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Email</p>
                  <p className="card-value">
                    <a href="mailto:contact@guvi.in" className="link">
                      contact@guvi.in
                    </a>
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Phone</p>
                  <p className="card-value">
                    <a href="tel:+914044264264" className="link">
                      +91 404-426-4264
                    </a>
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Website</p>
                  <p className="card-value">
                    <a href="https://www.guvi.in" target="_blank" rel="noopener noreferrer" className="link">
                      www.guvi.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* KEC Contact Card */}
            <div className="contact-card">
              <h3 className="card-title">KEC</h3>
              <div className="card-content">
                <div className="card-item">
                  <p className="card-label">Address</p>
                  <p className="card-value">
                    Kumaraguru College of Engineering
                    <br />
                    Coimbatore - 641 049
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Email</p>
                  <p className="card-value">
                    <a href="mailto:info@kec.ac.in" className="link">
                      info@kec.ac.in
                    </a>
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Phone</p>
                  <p className="card-value">
                    <a href="tel:+914225639900" className="link">
                      +91 422-2563-9900
                    </a>
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Website</p>
                  <p className="card-value">
                    <a href="https://www.kec.ac.in" target="_blank" rel="noopener noreferrer" className="link">
                      www.kec.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership Contact Card */}
            <div className="contact-card">
              <h3 className="card-title">Partnership</h3>
              <div className="card-content">
                <div className="card-item">
                  <p className="card-label">General Inquiries</p>
                  <p className="card-value">
                    For questions about the GUVI-KEC partnership program, student enrollment, or collaboration opportunities.
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Business Partnerships</p>
                  <p className="card-value">
                    <a href="mailto:partnerships@guvi.in" className="link">
                      partnerships@guvi.in
                    </a>
                  </p>
                </div>
                <div className="card-item">
                  <p className="card-label">Response Time</p>
                  <p className="card-value">
                    We aim to respond to all inquiries within 24-48 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-container">
            <h2 className="form-title">Send us a Message</h2>

            {submitted && (
              <div className="success-message">
                Thank you for your message! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="student">Student Inquiry</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input textarea"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-title">How do I enroll in the program?</h3>
              <p className="faq-text">
                You can enroll through either GUVI or KEC's respective enrollment portals. For the collaborative program, please contact the partnership team for specific enrollment details.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-title">What are the eligibility criteria?</h3>
              <p className="faq-text">
                Eligibility varies based on the specific program. Generally, students with basic knowledge of computers and a keen interest in learning technology are welcome.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-title">Are there job placement opportunities?</h3>
              <p className="faq-text">
                Yes! Both GUVI and KEC have strong placement cells with ties to leading companies. Our partnership provides enhanced placement opportunities.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-title">Can I learn in my preferred language?</h3>
              <p className="faq-text">
                GUVI offers courses in multiple vernacular languages. Contact us to learn about language preferences for specific programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
