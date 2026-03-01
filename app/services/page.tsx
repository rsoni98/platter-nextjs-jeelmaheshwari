"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, Globe, BarChart3, Headphones, Code } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Enterprise-grade protection with SOC2, GDPR compliance, and real-time threat monitoring.",
    features: ["End-to-end encryption", "SOC2 & GDPR compliant", "Threat detection", "Access control"],
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    desc: "Deploy across 50+ data centers worldwide and serve customers with minimal latency.",
    features: ["50+ edge locations", "Multi-region deploy", "Automatic failover", "DDoS protection"],
  },
  {
    icon: Headphones,
    title: "Premium Support",
    desc: "Dedicated account managers and 24/7 engineering support for business-critical needs.",
    features: ["24/7 live chat", "Dedicated manager", "SLA guarantee", "Priority queue"],
  },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    desc: "Perfect for small teams.",
    features: ["Up to 5 users", "10GB storage", "Basic analytics", "Email support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    desc: "Best for growing businesses.",
    features: ["Up to 50 users", "100GB storage", "Advanced analytics", "Priority support", "Custom integrations", "AI insights"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large-scale operations.",
    features: ["Unlimited users", "Unlimited storage", "Dedicated infra", "24/7 phone support", "SLA guarantee", "Custom contracts"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.tag}>
            Our Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Solutions for <span className={styles.accent}>Every Stage</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Whether you're a startup or enterprise, we have the tools and infrastructure you need.
          </motion.p>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}><s.icon size={20} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className={styles.featureList}>
                  {s.features.map((f, j) => (
                    <li key={j}><Check size={13} />{f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pricing}>
        <div className={styles.pricingInner}>
          <div className={styles.sectionHeader}>
            <h2>Simple, Transparent Pricing</h2>
            <p>No hidden fees. Cancel anytime.</p>
          </div>
          <div className={styles.pricingGrid}>
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`${styles.planCard} ${plan.highlighted ? styles.planCardHighlighted : ""}`}
              >
                {plan.highlighted && <span className={styles.popularBadge}>Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className={styles.planPrice}>{plan.price}</div>
                <p className={styles.planDesc}>{plan.desc}</p>
                <div className={styles.divider} />
                <ul className={styles.planFeatures}>
                  {plan.features.map((f, j) => (
                    <li key={j}><Check size={13} />{f}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`${styles.planBtn} ${plan.highlighted ? styles.planBtnHighlighted : ""}`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}