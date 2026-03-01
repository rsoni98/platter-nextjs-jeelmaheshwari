"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import styles from "./page.module.css";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@techgeek.io" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
  { icon: MapPin, label: "Office", value: "Ahmedabad, Gujarat, India" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.tag}>
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Let's <span className={styles.accent}>Talk</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Have a question or just want to say hi? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <motion.div
            className={styles.sidebar}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Get in Touch</h2>
            <div className={styles.infoList}>
              {contactInfo.map((info, i) => (
                <div key={i} className={styles.infoItem}>
                  <div className={styles.infoIconWrap}><info.icon size={16} /></div>
                  <div>
                    <div className={styles.infoLabel}>{info.label}</div>
                    <div className={styles.infoValue}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.responseNote}>
              <h3>Response Time</h3>
              <p>We typically respond within 24 hours on business days.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}><CheckCircle size={26} /></div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formCard}>
                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label>Full Name *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className={styles.field}>
                    <label>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                </div>
                <div className={styles.fieldFull}>
                  <div className={styles.field}>
                    <label>Subject *</label>
                    <select name="subject" required value={form.subject} onChange={handleChange}>
                      <option value="" disabled>Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                <div className={styles.fieldFull}>
                  <div className={styles.field}>
                    <label>Message *</label>
                    <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." rows={5} />
                  </div>
                </div>
                <button type="submit" disabled={loading} className={styles.submitBtn}>
                  {loading ? <span className={styles.spinner} /> : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}