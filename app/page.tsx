"use client";

import HeroSlider from "@/components/HeroSlider";
import { motion } from "framer-motion";
import { BarChart3, Shield, Zap, Globe, Users, Star } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized infrastructure with global CDN and auto-scaling built for performance." },
  { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security with end-to-end encryption and compliance tools." },
  { icon: Globe, title: "Global Scale", desc: "50+ edge locations worldwide with 99.99% uptime guaranteed." },
  { icon: BarChart3, title: "Smart Analytics", desc: "AI-powered insights that help you make faster, data-driven decisions." },
  { icon: Users, title: "Team Collaboration", desc: "Real-time collaboration tools that keep your entire team aligned." },
  { icon: Star, title: "Premium Support", desc: "Dedicated 24/7 support from our expert team whenever you need help." },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Integrations" },
  { value: "24/7", label: "Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className={styles.statItem}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Why TechGeek</span>
            <h2>Everything You Need to Succeed</h2>
            <p>A complete platform with all the tools modern businesses need to build, scale, and grow.</p>
          </div>
          <div className={styles.grid}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={styles.card}
              >
                <div className={styles.cardIcon}><f.icon size={20} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Join thousands of companies using TechGeek to build faster and smarter.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.btnPrimary}>Get Started Free</Link>
              <Link href="/services" className={styles.btnSecondary}>View Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}