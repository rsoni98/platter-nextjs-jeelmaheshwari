"use client";

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Award } from "lucide-react";
import styles from "./page.module.css";

const values = [
  { icon: Target, title: "Mission First", desc: "Every decision we make is guided by our mission to empower businesses worldwide." },
  { icon: Heart, title: "Customer Obsessed", desc: "Our customers' success is our success. We go the extra mile, always." },
  { icon: Lightbulb, title: "Innovation Always", desc: "We constantly push the boundaries of what's possible." },
  { icon: Award, title: "Excellence Standard", desc: "We hold ourselves to the highest standards in everything we build." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.tag}>
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Building the Future of <span className={styles.accent}>Business Tech</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Founded in 2021, TechGeek was born from a simple belief: powerful software should be accessible to every business, not just the Fortune 500.
          </motion.p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyInner}>
          <motion.div
            className={styles.storyContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Story</h2>
            <p>TechGeek started as a side project between two engineers tired of seeing businesses struggle with outdated, overpriced software. We believed there had to be a better way.</p>
            <p>Three years later, we've helped over 10,000 businesses across 40+ countries streamline operations, grow revenue, and delight their customers.</p>
            <p>We're a remote-first company with team members across 12 countries, united by a shared passion for building things that genuinely make a difference.</p>
          </motion.div>
          <motion.div
            className={styles.statsGrid}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[["2021", "Founded"], ["10K+", "Customers"], ["40+", "Countries"], ["$5M+", "Revenue Saved"]].map(([val, label]) => (
              <div key={label} className={styles.statCard}>
                <strong>{val}</strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <div className={styles.sectionHeader}>
            <h2>Our Core Values</h2>
            <p>The principles that guide every decision we make.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon}><v.icon size={18} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}