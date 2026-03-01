"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, BarChart3, Shield } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./HeroSlider.module.css";

const slides = [
  {
    badge: "Platform",
    title: "Scale Your Business",
    titleAccent: "Without Limits",
    desc: "Streamline workflows, automate operations, and grow revenue — all from one unified platform built for modern teams.",
    cta: "Start Free Trial",
    ctaHref: "/contact",
    Icon: Zap,
  },
  {
    badge: "Analytics",
    title: "Decisions Backed",
    titleAccent: "By Real Data",
    desc: "Replace guesswork with AI-driven insights. Understand your customers, optimize campaigns, and track growth in real time.",
    cta: "Explore Analytics",
    ctaHref: "/services",
    Icon: BarChart3,
  },
  {
    badge: "Security",
    title: "Enterprise Security",
    titleAccent: "Out of the Box",
    desc: "SOC2-compliant infrastructure, end-to-end encryption, and 99.99% uptime SLA — so you never lose sleep over reliability.",
    cta: "View Services",
    ctaHref: "/services",
    Icon: Shield,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 , ease: "easeOut" },
  }),
};

export default function HeroSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: `.${styles.pagination}` }}
          navigation={{ nextEl: `.${styles.navNext}`, prevEl: `.${styles.navPrev}` }}
          loop
          speed={800}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <div className={styles.slideInner}>
                  <div className={styles.slideContent}>
                    <motion.span
                      custom={0}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className={styles.badge}
                    >
                      {slide.badge}
                    </motion.span>

                    <motion.h1
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className={styles.title}
                    >
                      {slide.title}{" "}
                      <span className={styles.titleAccent}>{slide.titleAccent}</span>
                    </motion.h1>

                    <motion.p
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className={styles.desc}
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className={styles.actions}
                    >
                      <Link href={slide.ctaHref} className={styles.btnPrimary}>
                        {slide.cta}
                        <ArrowRight size={16} />
                      </Link>
                      <Link href="/about" className={styles.btnSecondary}>
                        Learn More
                      </Link>
                    </motion.div>
                  </div>

                  <div className={styles.slideVisual}>
                    <div className={styles.visualGrid} />
                    <div className={styles.visualIcon}>
                      <slide.Icon size={36} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className={`${styles.navBtn} ${styles.navPrev}`}>
          <ChevronLeft size={18} />
        </button>
        <button className={`${styles.navBtn} ${styles.navNext}`}>
          <ChevronRight size={18} />
        </button>
        <div className={styles.pagination} />
      </div>
    </section>
  );
}